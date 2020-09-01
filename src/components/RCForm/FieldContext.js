import React from "react";

const warnFunc = () => {
  console.warn('----------err----------');
}

const FieldContext = React.createContext({
  registerField: warnFunc,
  getFieldsValue: warnFunc,
  setFieldsValue: warnFunc,
  getFieldValue: warnFunc,
  setFieldValue: warnFunc,
  submit: warnFunc,
});

export default FieldContext;