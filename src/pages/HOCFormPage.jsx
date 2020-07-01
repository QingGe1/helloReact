import React from "react";
// import { createForm } from 'rc-form';
import { createForm } from '../components/HOCForm';
import Input from "../components/Input";

const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

@createForm
class Form extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      form: {}
    }
  }
  submit = () => {
    const { getFieldsValue, validateFields } = this.props.form
    console.log(getFieldsValue());
    console.log(validateFields())
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {getFieldDecorator('username', { rules: nameRules})(<Input />)}
        {getFieldDecorator('password', { rules: passworRules})(<Input />)}
        <button onClick={this.submit}>submit</button>
      </div>
    );
  }
}

export default Form;