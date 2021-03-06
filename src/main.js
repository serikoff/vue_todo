import Vue from 'vue';
import App from './App.vue';
import router from './router';

import store from './store';
import { Empty, Spin } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;
Vue.component(Empty.name, Empty);
Vue.component(Spin.name, Spin);

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app');
