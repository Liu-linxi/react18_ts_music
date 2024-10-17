import React, { PureComponent } from "react";

interface IProps {
  name: string;
  age?: number;
}

interface IState {
  message: string;
  count: number;
}
interface ISnapshot {
  address: string;
}
/**
 * PureComponent<IProps, IState>
 * IProps定义props参数类型
 * IState定义state类型
 * ISnapshot定义getSnapshotBeforeUpdate返回值数据类型
 */
class Demo2 extends PureComponent<IProps, IState,ISnapshot> {
  name = "测试赋值";
  state = {
    message: "测试数据message",
    count: 123,
  };
  // 常用在组件要进行更新可以提前将数据保存一下
  getSnapshotBeforeUpdate() {
    return { address: "测试地址" };
  }

  // componentDidUpdate第三个参数常用到这个ISnapshot
  // componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: ISnapshot | undefined): void { }

  // constructor构造器默认进行super操作
  // constructor(props: IProps) {
  //   super(props);
  //   /* this.state = {
  //     message: "测试数据message",
  //     count: 123,
  //   }; */
  // }

  render(): React.ReactNode {
    return (
      <div>
        <h1>测试类组件类型</h1>
        <h3>
          我是父组件传递过来的参数:{this.props.name} - {this.props.age} - {this.state.message}
        </h3>
      </div>
    );
  }
}

export default Demo2;
