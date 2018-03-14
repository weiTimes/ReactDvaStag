/*
 * @Author: yewei 
 * @Date: 2018-01-30 19:40:03 
 * @Last Modified by: yewei
 * @Last Modified time: 2018-03-13 11:52:14
 * 
 * 用户登录信息
 */

import { routerRedux } from 'dva/router';
import store from 'store2';

import {
    showLoading,
    showFailToast,
    showSuccessToast
} from '../components/commons/LightToast';

export default {
    namespace: 'user',

    state: {},

    subscriptions: {
        setup({ dispatch, history }) {
            // eslint-disable-line
            return history.listen(location => {
                // eslint-disable-line
            });
        }
    },

    effects: {},

    reducers: {}
};
