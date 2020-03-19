import Vue from "vue";
import VueAxios from "vue-plugin-axios";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLodash from "vue-lodash";
import lodash from "lodash";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.use(VueLodash, { lodash: lodash });
Vue.use(VueAxios, { axios });

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
