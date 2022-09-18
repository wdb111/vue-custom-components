import Demo from './Demo/index.js';
const components = [
  Demo
]
const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}
// 这一步判断window.Vue是否存在，因为直接引用vue.min.js， 它会把Vue绑到Window上，我们直接引用打包好的js才能正常跑起来。
if (typeof window !== 'undefined' && window.Vue) {
  //这样就可以使用Vue.use进行全局安装了。
  install(window.Vue);
}
export default {
  install,
  Demo
}
