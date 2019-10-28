// rollup main.js -f iife -o bundle_iife.js -m inline -w
import json from 'rollup-plugin-json' // 解析 json

// 这个 rollup-plugin-node-resolve 插件可以告诉 Rollup 如何查找外部模块。
import nodeResolve from 'rollup-plugin-node-resolve';

// 这个 rollup-plugin-commonjs 插件就是用来将 CommonJS 转换成 ES2015 模块的。
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle_umd.js',
    format: 'umd'
  },
  plugins: [
    json(),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/**',  // Default: undefined
      exclude: ['node_modules/foo/**', 'node_modules/bar/**'],  // Default: undefined
      // these values can also be regular expressions
      // include: /node_modules/

      // search for files other than .js files (must already
      // be transpiled by a previous plugin!)
      extensions: ['.js', '.coffee'],  // Default: [ '.js' ]

      // if true then uses of `global` won't be dealt with by this plugin
      ignoreGlobal: false,  // Default: false

      // if false then skip sourceMap generation for CommonJS modules
      sourceMap: false,  // Default: true

      // explicitly specify unresolvable named exports
      // (see below for more details)
      namedExports: { 'react': ['createElement', 'Component'] },  // Default: undefined

      // sometimes you have to leave require statements
      // unconverted. Pass an array containing the IDs
      // or a `id => boolean` function. Only use this
      // option if you know what you're doing!
      ignore: ['conditional-runtime-dependency']
    })
  ],
  watch: {
    chokidar: true,
    include: ['src/**'],
    exclude: ['node_modules/**']
  }
}