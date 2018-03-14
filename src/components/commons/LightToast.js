/*
 * @Author: yewei 
 * @Date: 2018-01-31 10:10:43 
 * @Last Modified by: yewei
 * @Last Modified time: 2018-03-13 13:35:48
 * 
 * 轻提示 Toast
 * 通常用来提示网络异常、loading、请求成功、请求失败等状态
 * 
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import glamorous from 'glamorous';
import * as glamor from 'glamor';
import { Toast } from 'antd-mobile';

const TOAST_SUCCESS = require('../../assets/images/toast_icon_success.png');
const TOAST_INFO = require('../../assets/images/toast_icon_i.png');
const TOAST_LOADING = require('../../assets/images/loading.png');

const LoadingContainer = glamorous.div({
    width: '0.8rem',
    height: '0.8rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const ToastContainer = glamorous.div({
    width: '1.64rem',
    height: '1.47rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
});

const ToastIcon = glamorous.img({
    width: ' 0.5rem',
    height: '0.5rem',
    marginBottom: '0.19rem'
});

const LoadingIcon = glamorous.img(
    {
        width: '0.33rem',
        height: '0.33rem'
    },
    () => {
        const rotate = glamor.css.keyframes({
            from: { transform: `rotate(0deg)` },
            to: { transform: `rotate(360deg)` }
        });
        return { animation: `${rotate} 2s infinite linear` };
    }
);

const ToastText = styled.p`
    line-height: 0.17rem;
    font-size: 0.17rem;
    font-family: PingFangSC-Regular;
    color: rgba(255, 255, 255, 1);
`;

const NormalInfoContainer = glamorous.div({
    padding: '0.16rem 0.26rem'
});

const NormalText = glamorous.p({
    fontSize: '0.17rem',
    fontFamily: 'PingFangSC-Regular',
    color: 'rgba(255,255,255,1)',
    lineHeight: '0.26rem',
    width: '2.04rem',
    // maxHeight: '52px',
    overflow: 'hidden'
});

const renderCustomer = (url, text) => (
    <ToastContainer>
        <ToastIcon src={url} alt="" />
        {text && <ToastText>{text}</ToastText>}
    </ToastContainer>
);

const renderLoading = url => (
    <LoadingContainer>
        <LoadingIcon src={url} />
    </LoadingContainer>
);

const renderNormalInfo = text => (
    <NormalInfoContainer>
        <NormalText>{text}</NormalText>
    </NormalInfoContainer>
);

const showToast = text => {
    Toast.info(renderNormalInfo(text), 1.5);
};

const showSuccessToast = text => {
    // Toast.success(text, 1);
    Toast.info(renderCustomer(TOAST_SUCCESS, text), 1.5);
};

const showFailToast = text => {
    // Toast.fail(text, 1);
    Toast.info(renderCustomer(TOAST_INFO, text), 1.5);
};

const showLoading = () => {
    Toast.info(renderLoading(TOAST_LOADING), 0);
    // Toast.loading('Loading...', 0);
};

const showNetError = () => {
    Toast.offline('网络连接失败 !!!', 1.5);
};

const hideLoading = () => {
    Toast.hide();
};

class LightToast extends Component {
    static propTypes = {
        render: PropTypes.func.isRequired // 渲染组件的方法
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const SEND_PROPS = {
            showToast: showToast,
            showSuccessToast: showSuccessToast,
            showFailToast: showFailToast,
            showLoading: showLoading,
            showNetError: showNetError,
            hideLoading: hideLoading
        };

        return this.props.render(SEND_PROPS);
    }
}

export {
    showToast,
    showSuccessToast,
    showFailToast,
    showLoading,
    showNetError,
    hideLoading
};

export default function WithLightToast(Component) {
    return class extends Component {
        render() {
            return (
                <LightToast
                    render={props => <Component {...this.props} {...props} />}
                />
            );
        }
    };
}
