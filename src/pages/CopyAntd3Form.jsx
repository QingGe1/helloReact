import React, { Component } from "react";
import createForm from "../components/HOCForm";
import Input from "../components/Input";
const nameRules = { required: true, message: "请输⼊姓名！" };
const passworRules = { required: true, message: "请输⼊密码！" };

@createForm
class CopyAntd3Form extends Component {
  componentDidMount() {
    this.props.form.setFieldsValue({ username: "default" });
  }
  submit = () => {
    const {
      // getFieldsValue,
      validateFields
    } = this.props.form;
    // console.log("submit", getFieldsValue());
    validateFields((err, val) => {
      if (err) {
        console.log("err", err);
      } else {
        console.log("校验成功", val);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h3>MyRCForm</h3>
        {getFieldDecorator("username", { rules: [nameRules] })(
          <Input placeholder="Username" />
        )}
        {getFieldDecorator("password", { rules: [passworRules] })(
          <Input placeholder="Password" />
        )}
        <button onClick={this.submit}>submit</button>
      </div>
    );
  }
}
export default CopyAntd3Form;