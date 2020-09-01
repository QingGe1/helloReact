import React, { Component } from 'react'
import FieldContext from './FieldContext';

export default class Field extends Component {
  static contextType = FieldContext;

  componentDidMount() {
    this.cancelRegisterField = this.context.registerField(this);
  }

  componentWillUnmount() {
    if (this.cancelRegisterField) {
      this.cancelRegisterField();
    }
  }

  onStoreChange = () => {
    this.forceUpdate();
  };

  getControlled = () => {
    const { getFieldValue, setFieldValue } = this.context;
    const { name } = this.props;
    return {
      value: getFieldValue(name),
      onChange: e => {
        const newValue = e.target.value;
        setFieldValue(name, newValue);
      }
    };
  };
  render() {
    const { children } = this.props;
    const returnChildNode = React.cloneElement(
      children,
      this.getControlled()
    );
    return returnChildNode;
  }
}


// export default function Field(prop) {
//   const {registerField, getFieldValue, setFieldsValue} = useContext(FieldContext);
//   useEffect(() => {
//     registerField()
//   })
//   const getControlde = () => {
//     return {
//       value: getFieldValue(prop.name),
//       name: prop.name,
//       rules: prop.rules,
//       onChange: (e) => {
//         const newValue = e.target.value;
//         setFieldsValue({[prop.name]: newValue});
//         console.log(`newValue:${newValue}`);
//       }
//     }
//   }
//   const returnChildNode = React.cloneElement(prop.children, getControlde());
//   return (
//     <div>
//       {returnChildNode}
//     </div>
//   )
// }
