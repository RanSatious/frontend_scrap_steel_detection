import element_ui from './element_ui';
import * as filters from './filters';
import directives from './directives/index';
import components from '../components/common/index';
import eventBus from './event_bus';
import { Title } from '@segma/vue-components';

/**
 * 使用插件方式引入filter
 * 参考：https://cn.vuejs.org/v2/guide/plugins.html
 * */
const _filters = {
    install(Vue) {
        Object.keys(filters).forEach(key => {
            Vue.filter(key, filters[key]);
        });
    }
};

const plugins = [element_ui, directives, components, _filters, eventBus, Title];

export default {
    install(Vue) {
        plugins.forEach(plugin => {
            Vue.use(plugin);
        });
    }
};
