import React, { Component } from 'react'
import styled from 'react-emotion'
import { GlobalConsumer } from '../../GlobalState'

class Modal extends Component {
  render() {
    const { small, name, children, component: Component } = this.props
    return (
      <GlobalConsumer>
        {({ currentModal, closeModal }) => {
          if (!currentModal) {
            return null
          }
          if (name === currentModal.name) {
            return (
              <ModalContainer
                show={name === currentModal.name}
                onClick={event => {
                  event.stopPropagation()
                  closeModal({ name })
                }}
              >
                <ModalContent
                  onClick={event => event.stopPropagation()}
                  small={small}
                >
                  {Component ? (
                    <Component name={name} />
                  ) : currentModal.render ? (
                    currentModal.render({
                      ...this.props,
                      closeModal: () => closeModal({ name })
                    })
                  ) : null}
                  {children}
                </ModalContent>
              </ModalContainer>
            )
          }
        }}
      </GlobalConsumer>
    )
  }
}

const ModalContainer = styled('div')`
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`

const ModalContent = styled('div')`
  background: white;
  padding: 40px;
  width: 100%;
  overflow-y: scroll;
  max-height: 100%;
  border-radius: 6px;
  height: auto;
  width: auto;
  @media (max-width: 576px) {
    width: 75%;
  }
`

export default Modal
