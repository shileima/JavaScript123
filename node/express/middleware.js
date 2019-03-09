const http = require('http');
const url = require('url');
function createApplication(){
  let app = function(req,res){
    const {pathname} = url.parse(req.url,true);
    let index = 0;
    function next(err){
      if(index >= app.routes.length){
        return res.end(`Cannot ${req.method} ${pathname}\r\n`)
      }
      let route = app.routes[index++];
      if(err){
        //console.log('current path:',route.path);
        if(route.method == 'middleware'){
          if(route.path == '/' 
            || pathname.startsWith(route.path + '/') 
            || pathname == route.path
            ){
            if(route.handler.length == 4){
              route.handler(err,req,res,next)
            }else{ next(err) }
          } else { next(err) }
        } else { next(err) }
      }else{
        if(route.method == 'middleware'){
          if(route.path == '/' 
            || pathname.startsWith(route.path + '/') 
            || pathname == route.path
            ){
            route.handler(req,res,next)
          }else{ next() }
        }else{
          if( (route.method == req.method.toLowerCase() 
          || route.method == 'all') 
          && (route.path == pathname || route.path == '*') 
          ){
            return route.handler(req,res)
          }else{ next() }
        }
      }
    }
    next()
  }

  app.listen = function(){
    let server = http.createServer(app);
    server.listen.apply(server,arguments)
  }

  // 建立数组保存路由规则 
  app.routes = []
  http.METHODS.forEach(method => {
    method = method.toLowerCase();
    app[method] = function(path,handler){
      app.routes.push({method, path, handler})
    }
  })

  app.all = function(path,handler){
    app.routes.push({
      method:'all', 
      path, 
      handler
    })
  }
  // 添加一个中间件
  app.use = function(path,handler){
    if(typeof handler != 'function'){
      handler = path;
      path = '/';
    }
    app.routes.push({
      method:'middleware',
      path,
      handler
    })
  }

  return app;
}
module.exports = createApplication;