import React, { PureComponent } from "react";

interface IProps{
  name:string
  age?:number
}

class Demo2 extends PureComponent {
  constructor(props: IProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>测试类组件类型</h1>
      </div>
    )
  }
}

export default Demo2;
