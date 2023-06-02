//모달 팝업창
import React from 'react'
import ReactDom from 'react-dom'
//import { createPortal } from 'react-dom'
//dom = 내장되어있는 함수?
import classes from './Modal.module.css'

//모달 뒤의 까만배경
//컴포넌트는 대문자로 시작해 줄 것.
const BackDrop=(props)=>{
  return <div className={classes.backDrop} onClick={props.onClose}></div>
  //이건 작동하는 부분이라서, 하단과 다르게 onClick으로 받아줌.
}

//모달창
const ModalOverlay=(props)=>{
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays');

//메인 컴포넌트
const Modal = (props) => {
  return (
    <div>
      {ReactDom.createPortal(<BackDrop onClose={props.onClose} />,portalElement)}
      {/* 
      위에 ReactDom이라고 이름 불러서 전체 가져온 거라 ReactDom이라고 앞에 붙여줌.
      반대로 기본 생성된 👉 import { createPortal } from 'react-dom' 👈 형식일 경우,
      {createPortal(<BackDrop />,portalElement)}
       */}
       {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </div>
  )
}

export default Modal
//createPortal
//https://react.dev/reference/react-dom/createPortal