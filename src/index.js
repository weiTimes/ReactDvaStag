import '@babel/polyfill';
import dva from 'dva';
import { createBrowserHistory, createHashHistory } from 'history';
import { reducer as formReducer } from 'redux-form';
import createLoading from 'dva-loading';
import FastClick from 'fastclick';

import 'normalize.css';

// 自定义样式
import './index.scss';

// 自定义文件
import { globals, user } from './models';
import router from './router'; // 路由配置

let history = createBrowserHistory();

// 1. Initialize
const app = dva({
    history,
    extraReducers: { form: formReducer },
    onError(e, dispatch) {
        // Toast.fail(e.toString(), 1);
    }
});

// 2. Plugins
app.use(createLoading());

// 3. Model
registerModel();

// 4. Router
app.router(router);

// 5. Start
app.start('#app');
FastClick.attach(document.body); // 解决移动端click事件的300ms延迟

/**
 * 注册model
 *
 */
function registerModel() {
    app.model(globals);
    app.model(user);
}
