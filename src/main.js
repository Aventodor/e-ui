import Vue from 'vue'
import App from './App.vue'
import utils from "./utils/utils";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$utils = utils

new Vue({
  render: h => h(App),
}).$mount('#app')

const install = function(Vue, opts = {}) {
  /*components.forEach(component => {
    Vue.component(component.name, component);
  });*/
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
