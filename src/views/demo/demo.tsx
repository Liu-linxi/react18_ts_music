import React, { PureComponent } from "react";

interface IProps {
  name: string;
  age?: number;
}

class Demo2 extends PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      message: "测试数据message",
      count: 123,
    };
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>测试类组件类型</h1>
        <h3>
          我是父组件传递过来的参数:{this.props.name} - {this.props.age} - {(this.state as any).message}
        </h3>
      </div>
    );
  }
}

export default Demo2;
