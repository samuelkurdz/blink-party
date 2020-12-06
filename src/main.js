import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import Axios from 'axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.prototype.$http = Axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
