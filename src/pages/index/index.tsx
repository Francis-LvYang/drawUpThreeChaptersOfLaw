import { Component } from 'react';
import { View, Text } from '@tarojs/components';
import { AtButton, AtRate } from 'taro-ui';

import 'taro-ui/dist/style/components/button.scss'; // 按需引入
import './index.scss';

export default class Index extends Component {
  /**  */
  public constructor() {
    super(...arguments);
    this.state = {
      value: 5
    };
  }

  /** 处理函数 */
  public handleChange(value) {
    this.setState({
      value
    });
  }

  /** */
  public componentWillMount() {}

  /**  */
  public componentDidMount() {}

  /**  */
  public componentWillUnmount() {}

  /**  */
  public componentDidShow() {}

  /** */
  public componentDidHide() {}

  /**  */
  public render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <AtButton type="primary">I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type="primary" circle={true}>
          支持
        </AtButton>
        <Text>共建？</Text>
        <AtButton type="secondary" circle={true}>
          来
        </AtButton>
        <AtRate value={this.state.value} onChange={this.handleChange} />
      </View>
    );
  }
}
