import { segmaLoading } from '@segma/segma-directives';
const directives = [segmaLoading];

export default {
    install(Vue) {
        directives.forEach(directive => {
            Vue.directive(directive.name, directive.directive);
        });
    }
};
