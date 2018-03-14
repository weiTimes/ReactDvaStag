/*
 * @Author: yewei 
 * @Date: 2018-01-31 17:54:13 
 * @Last Modified by: yewei
 * @Last Modified time: 2018-03-13 13:46:21
 * 
 * 组件验证
 * 进行登录验证、权限验证
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import { Route, Switch, Link, withRouter, Redirect } from 'dva/router';
import store from 'store2';

import WithLightToast from '../../components/commons/LightToast';

@connect(({ user }) => ({
    user
}))
class AuthorizedRoute extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { component: Component, app, ...rest } = this.props;

        const checkUserInfo = store.get('user'); // 检查本地是否有用户信息

        const userId = checkUserInfo && checkUserInfo.user_id;

        return (
            <Route
                {...rest}
                render={props => {
                    // 本地存储中有登录信息，说明已经登录过了，就不用再次登录了 => 每次进来都需要先登录
                    return userId ? (
                        <Component {...props} app={app} />
                    ) : (
                        <Redirect to="/auth/login" />
                    );
                }}
            />
        );
    }
}

export default WithLightToast(AuthorizedRoute);
