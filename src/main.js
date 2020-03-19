import Vue from "vue";
import VueAxios from "vue-plugin-axios";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLodash from "vue-lodash";
import lodash from "lodash";

Vue.config.productionTip = false;

Vue.use(VueLodash, { lodash: lodash });
Vue.use(VueAxios, { axios });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
