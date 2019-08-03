import vClickOutside from 'v-click-outside';
import Vue from 'vue';
import Vuetify, {
  VApp, // required
  VBtn,
  VIcon,
  VList,
  VListTile,
  VListTileTitle,
  VMenu,
} from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker'

Vue.use(vClickOutside);
Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VIcon,
    VList,
    VListTile,
    VListTileTitle,
    VMenu,
  },
  directives: {
    Ripple,
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
