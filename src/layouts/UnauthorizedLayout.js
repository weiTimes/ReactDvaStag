/*
 * @Author: yewei 
 * @Date: 2018-02-01 10:25:51 
 * @Last Modified by: yewei
 * @Last Modified time: 2018-02-01 15:44:44
 * 
 * 没有通过验证的布局
 * 包括登录、忘记密码等
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import { Route, Switch, Redirect } from 'dva/router';
import glamorous, { ThemeProvider } from 'glamorous';

import { Login } from '../routes';

class UnauthorizedLayout extends Component {
    render() {
        const { match, globals } = this.props;

        return (
            <ThemeProvider theme={globals.theme}>
                <Switch>
                    <Route path={`${match.path}/login`} component={Login} />
                    <Redirect to={`${match.url}/login`} />
                </Switch>
            </ThemeProvider>
        );
    }
}

export default connect(({ globals }) => ({ globals }))(UnauthorizedLayout);
