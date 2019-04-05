import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  //template: '<h1>This is template</h1>', // 必须带标签 h1，不能纯文本 'This is template'

  render: h => h(App),

  //components:{App},
  //template:'<App/>',
}).$mount('#app')
