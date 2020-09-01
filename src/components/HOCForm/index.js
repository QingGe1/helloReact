import React, { Component } from "react";

export default function createForm(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {}
      this.options = {}
    }
    handleChange = (e) => {
      const { name, value } = e.target
      this.setState({ [name]: value });
    }
    getFieldDecorator = (filed, options) => InputCmp => {
      this.options[filed] = options;
      return React.cloneElement(InputCmp, {
        name: filed,
        value: this.state[filed],
        onChange: this.handleChange
      })
    }
    getFieldValue = name => this.state[name]
    getFieldsValue = () => ({ ...this.state })
    setFieldValue = (name, value) => { this.setState({ [name]: value }) }
    setFieldsValue = newStore => { this.setState(newStore) }
    validateFields = (cb) => {
      let err = [];
      Object.keys(this.options).forEach(name => {
        const { rules } = this.options[name];
        let value = this.state[name];
        if (rules && rules.required && (value === undefined || value === "")) {
          err.push({ [name]: rules.message, value });
        }
      });
      cb(err);
      return err;
    }
    getForm = () => ({
      form: {
        getFieldValue: this.getFieldValue,
        getFieldsValue: this.getFieldsValue,
        setFieldsValue: this.setFieldsValue,
        getFieldDecorator: this.getFieldDecorator,
        validateFields: this.validateFields,
      }
    })
    render() {
      return (<Cmp {...this.props} {...this.getForm()}></Cmp>)
    }
  }
}