import App from './App.vue';
import { css, testcss, Vue, router, axios, VueAxios } from './main.js';
Vue.use(VueAxios, axios);

window.Vue = Vue;
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app');
