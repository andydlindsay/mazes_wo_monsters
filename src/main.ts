import Vue from 'vue';
import App from '@/components/app/App.ts';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Element from 'element-ui';

Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
