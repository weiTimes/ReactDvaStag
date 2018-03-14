/*
 * @Author: yewei 
 * @Date: 2018-02-01 10:25:34 
 * @Last Modified by: yewei
 * @Last Modified time: 2018-03-13 11:48:19
 * 
 * app主入口布局
 */

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';

import { HomePage } from '../routes';

const PrimaryLayout = ({ match, app }) => {
    const routes = [
        {
            path: `${match.path}/users`,
            component: () => HomePage
        }
    ];

    return (
        <Switch>
            <Route path={`${match.path}`} exact component={HomePage} />
            {routes.map(({ path, exact, component, ...dynamics }, key) => (
                <Route
                    key={key}
                    path={path}
                    exact={exact}
                    component={component()}
                    // component={dynamic({
                    //     app,
                    //     ...dynamics
                    // })}
                />
            ))}
            <Redirect to={`/`} />
        </Switch>
    );
};

export default PrimaryLayout;
