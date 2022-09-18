import Vue from "vue"; // 引入 Vue 是因为要用到 Vue.extend() 这个方法
import message from "./index.vue"; // 引入组件


let messageConstructor = Vue.extend(message); // 用 Vue.extend 创建组件的模板（构造函数）
let instance;

const Message = function (options = {}) {
  //实例化组件
  instance = new messageConstructor({
    data: options // 这里的 data 会传到 message.vue 组件中的 data 中，当然也可以写在 props 里
  }); // 渲染组件
  document.body.appendChild(instance.$mount().$el); // 挂载到 body 下
};
// 以下就是在 Message函数中拓展 ["success", "error"] 这两个方法
["success", "error","warning"].forEach(type => {
    Message[type] = options => {
      options.type = type;
      return Message(options);
    };
  });
export default Message;
