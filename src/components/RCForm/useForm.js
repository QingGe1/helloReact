import { useRef } from "react"

class FormStore {
  constructor() {
    this.store = {};
    this.fieldEntities = [];
    this.callbacks = {}
  }
  
  registerField = field => {
    this.fieldEntities.push(field);
    // 删除 field
    return () => {
      this.fieldEntities = this.fieldEntities.filter(item => item !== field);
      delete this.store[field.props.name];
    }
  }

  setCallback = (callbacks) => {
    this.callbacks = {
      ...this.callbacks,
      ...callbacks,
    }
  }

  getFieldValue = (name) => this.store[name];

  getFieldsValue = () => ({ ...this.store });

  setFieldValue = (name, newValue) => {
    this.store[name] = newValue;
    const field = this.fieldEntities.find(field => field.props.name === name);
    field.onStoreChange();
  }

  setFieldsValue = (newStore) => {
    this.store = { ...this.store, ...newStore };
    Object.keys(newStore).forEach((name) => {
      const field = this.fieldEntities.find(field => field.props.name === name);
      field.onStoreChange();
    })
  }

  validate = () => {
    let err = [];
    // todo
    this.fieldEntities.forEach(entity => {
      const { name, rules } = entity.props;
      let value = this.store[name];
      let rule = rules && rules[0];
      if (rule && rule.required && (value === undefined || value === "")) {
        //  出错
        err.push({
          [name]: rules.message,
          value
        });
      }
    });
    return err;
  };

  submit = () => {
    let err = this.validate();
    if (err.length === 0) {
      this.callbacks.onFinish(this.getFieldsValue())
    } else {
      this.callbacks.onFinishFailed(err, this.getFieldsValue())
    }
  }

  getForm = () => {
    return {
      registerField: this.registerField,
      setCallback: this.setCallback,
      getFieldValue: this.getFieldValue,
      setFieldValue: this.setFieldValue,
      getFieldsValue: this.getFieldsValue,
      setFieldsValue: this.setFieldsValue,
      submit: this.submit,
    }
  }
}

export default function useForm(form) {
  const formRef = useRef()
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore();
      formRef.current = formStore.getForm();
    }
  }
  return [formRef.current]
}


