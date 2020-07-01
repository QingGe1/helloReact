import React from "react";
import Dialog, { alert } from "../components/Dialog/index.jsx";

export default function DialogPage() {
  const [showDialog, setShowDialog] = React.useState(false);
  return (
    <div>
      <h3>DialogPage</h3>
      <button onClick={() => { setShowDialog(!showDialog) }}>showDialog:{String(showDialog)}</button>
      <button onClick={() => { alert(1) }}>alert</button>
      <Dialog
        visible={showDialog}
        onClose={() => { setShowDialog(false) }}
        footer={
          [
            <button onClick={() => { }}>1</button>,
            <button onClick={() => { }}>2</button>,
          ]
        }
      >
        Dialog content
      </Dialog>
    </div>
  )
}