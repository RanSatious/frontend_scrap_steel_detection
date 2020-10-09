/**
 * 通过routeName定位route
 * */
export const positionRoute = (routeName, routes) => {
    let getRoute = routes => {
        let result = routes.find(item => item.name === routeName);
        if (result) {
            return result;
        } else {
            let sonRoutes = [];
            routes.forEach(item => {
                if (item.children) {
                    sonRoutes = [...sonRoutes, ...item.children];
                }
            });
            return getRoute(sonRoutes);
        }
    };
    return getRoute(routes);
};

/**
 * 获取子孙路由
 * */
export const getOffspringRouteNames = route => {
    let arr = [];
    arr.push(route.name);
    let getName = route => {
        if (route.children && route.children.length > 0) {
            route.children.forEach(item => {
                getName(item);
            });
        } else {
            arr.push(route.name);
        }
    };
    getName(route);
    return arr;
};
