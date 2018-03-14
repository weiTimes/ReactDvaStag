/*
 * @Author: yewei 
 * @Date: 2018-01-31 17:55:47 
 * @Last Modified by: yewei
 * @Last Modified time: 2018-02-01 15:43:53
 * 
 * 存放全局信息
 * 例如: 转场动画状态、主题样式...
 */

export default {
    namespace: 'globals',

    state: {
        theme: {
            main: {
                color: '#0aa'
            }
        }
    },

    subscriptions: {
        setup({ dispatch, history }) {
            // eslint-disable-line
            return history.listen(({ location, pathname }) => {});
        }
    },

    effects: {},

    reducers: {}
};
