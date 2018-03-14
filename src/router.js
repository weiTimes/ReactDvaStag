/*
 * @Author: yewei 
 * @Date: 2018-01-29 11:07:38 
 * @Last Modified by: yewei
 * @Last Modified time: 2018-03-13 13:43:01
 * 
 * 根路由配置
 */

import React from 'react';
import { connect } from 'dva';
import {
    routerRedux,
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'dva/router';
import { UnauthorizedLayout, PrimaryLayout } from './layouts';
import { AuthorizedRoute } from './routes';

const { ConnectedRouter } = routerRedux;

const RouterConfig = ({ history, app }) => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/auth" component={UnauthorizedLayout} />
                <AuthorizedRoute
                    path="/app"
                    component={PrimaryLayout}
                    app={app}
                />
                <Redirect to="/app" />
            </Switch>
        </ConnectedRouter>
    );
};

export default RouterConfig;
