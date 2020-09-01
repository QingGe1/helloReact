import React, { useEffect, useRef } from "react";
// import Form, {Field} from "rc-field-form";
import Form, { Field } from "../components/RCForm/";
import Input from "../components/Input";

const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

export default function RCFormPage(props) {
  const [form] = Form.useForm();
  const formRef = useRef(form);

  const onFinish = val => {
    console.log("onFinish", val);
  };

  // 表单校验失败执行
  const onFinishFailed = val => {
    console.log("onFinishFailed", val);
  };

  useEffect(() => {
    console.log("form", form);
    console.log('formRef', formRef);
    //form.setFieldsValue({username: "default"});
  }, [form]);

  return (
    <div>
      <h3>fucntion RCForm</h3>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed} >
        <Form.Field name="username" rules={[nameRules]}>
          <Input placeholder="input UR Username" />
        </Form.Field>
        <Form.Field name="password" rules={[passworRules]}>
          <Input placeholder="input UR Password" />
        </Form.Field>
        <button>Submit</button>
      </Form>
      <RCFormPageClass></RCFormPageClass>
    </div>
  );
}

class RCFormPageClass extends React.Component {
  
  constructor(props) {
    super(props)
    this.formRef = React.createRef();
  }

  onFinish = val => {
    console.log("onFinish", val);
  };

  // 表单校验失败执行
  onFinishFailed = val => {
    console.log("onFinishFailed", val);
  };


  render() {
    return <div>
    <h3>class RCForm</h3>
    <Form
      ref={this.formRef}
      onFinish={this.onFinish}
      onFinishFailed={this.onFinishFailed} >
      <Field name="username" rules={[nameRules]}>
        <Input placeholder="input UR Username" />
      </Field>
      <Field name="password" rules={[passworRules]}>
        <Input placeholder="input UR Password" />
      </Field>
      <button>Submit</button>
    </Form>
  </div>
  }
}