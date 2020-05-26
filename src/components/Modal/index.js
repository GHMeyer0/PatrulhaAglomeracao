import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
import { Button, Dialog } from 'react-native-paper';

const Modal = props => {
  return (
    <Dialog
      visible={props.visible}
      onDismiss={() => props.onClose()}
    >
      <Dialog.Title>{props.title}</Dialog.Title>
      <Dialog.Content>
        {
          props.content
        }
        
      </Dialog.Content>
      <Dialog.Actions>
          <Button onPress={() => props.onClose()}>Não</Button>
          <Button onPress={() => props.yesAction()}>Sim</Button>
      </Dialog.Actions>
    </Dialog>
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  yesAction: PropTypes.func
}

export default Modal

