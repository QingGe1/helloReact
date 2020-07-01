import React, { Fragment, cloneElement } from "react";
import ReactDOM from 'react-dom'
import './Dialog.scss'

function scopeClassMaker(prefix) {
  return function (name) {
    return [prefix, name].filter(Boolean).join('-')
  }
}

const sc = scopeClassMaker('fui-dialog')

export default function Dialog(props) {
  const onClickClose = () => {
    props.onClose()
  }
  const d = props.visible ?
    <Fragment>
      <div className={sc('mask')}>
      </div>
      <div className={sc()}>
        <div className={sc('close')} onClick={onClickClose}>
          x
      </div>
        <header className={sc('header')}>提示</header>
        <main className={sc('main')}>
          {props.children}
        </main>
        <footer className={sc('footer')}>
          {
            props.footer.map((element, index) => cloneElement(element, { key: index }))
          }
        </footer>
      </div>
    </Fragment>
    :
    null;
  return (
    ReactDOM.createPortal(d, document.body)
  )
}



const modal = (content, buttons, afterClose) => {
  const close = () => {
    // 因为对话框的 visible 是由外部传入的，
    // 且 React 是单向数据流的，在组件内并不能直接修改 visible，
    // 所以在 onClose 方法我们需要再次渲染一个新的组件,
    // 并设置新组件 visible 为 ture,覆盖原来的组件
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
    afterClose && afterClose()
  }
  const component = 
  <Dialog visible={true} 
    onClose={() => {
      close(); afterClose && afterClose()
    }}
    footer={buttons}
  >
    {content}
  </Dialog>
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(component, div)
  return close
}

const alert = (content) => {
  const button = <button onClick={() => close()}>ok</button>
  const close = modal(content, [button])
}
export { alert }


