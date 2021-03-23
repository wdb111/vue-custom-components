import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import EchojoyMessage from './myPlugin/db-message/message.js'
Vue.prototype.$dbMessage = EchojoyMessage;

Vue.use(ElementUI);
Vue.use(ViewUI);
new Vue({
  el: '#app',
  render: h => h(App)
})
