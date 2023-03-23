import React from 'react'
import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';
 
export default function OptionsCKmodal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{paddingLeft: '25px'}}>
            주문 정보 확인
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h5>선택하신 옵션</h5>  */}
          <ul>
            <li><p>원두 용량 : {props.inputData.volume}</p></li>
            <li>원두 분쇄 : {props.inputData.comminution}</li>
            {props.inputData.comminution === '원두 갈기' ?
            <p>원두 분쇄 정도 : {props.inputData.beanSize} 용으로 갈기</p> : null}
            <li>구독 유무 : {props.inputData.PurchaseMethod}</li>
            {props.inputData.PurchaseMethod === '구독하기' ?
            <p>구독 주기 : {props.inputData.cycle}</p> : null}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>취소</Button>
          <Button>주문 하기</Button>
        </Modal.Footer>
      </Modal>
    );
  }


