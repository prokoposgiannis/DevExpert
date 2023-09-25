import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectModals,
  changeModalVisibility,
} from '../../../redux/slices/modalsSlice';
import {
  selectCards,
  getCards,
  addCardToRedux,
  addHomeScreenCards,
} from '../../../redux/slices/cardsSlice';

const AddNewCardModal = () => {
  const [question, onChangeQuestion] = React.useState('');
  const [answer, onChangeAnswer] = React.useState('');

  const dispatch = useDispatch();

  const modals = useSelector(selectModals);

  const modalIndex = modals.findIndex(
    (modal) => modal.name === 'addNewCardModal'
  );

  const modalVisibility = modals[modalIndex].isVisible;

  const doChangeModalVisibility = () => {
    dispatch(changeModalVisibility('addNewCardModal'));
  };

  const doAddCard = () => {
    dispatch(
      addCardToRedux({
        category: 'general',
        question,
        answer,
        isLoved: false,
        key: Math.floor(Math.random() * 100),
      })
    );
    onChangeAnswer('');
    onChangeQuestion('');
  };

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={modalVisibility}
      onRequestClose={() => {
        doChangeModalVisibility();
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Submit your Question</Text>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            onChangeText={(question) => onChangeQuestion(question)}
            value={question}
            style={{
              width: '100%',
              height: '40%',
              margin: 10,
              borderColor: 'black',
              borderWidth: 1,
            }}
          />
          <Text style={styles.modalText}>Submit your Answer</Text>

          <TextInput
            editable
            multiline
            numberOfLines={4}
            onChangeText={(answer) => onChangeAnswer(answer)}
            value={answer}
            style={{
              width: '100%',
              height: '40%',
              margin: 10,
              borderColor: 'black',
              borderWidth: 1,
            }}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              doAddCard();
              doChangeModalVisibility();
            }}
          >
            <Text style={styles.textStyle}>submit</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => doChangeModalVisibility()}
          >
            <Text style={styles.textStyle}>close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    // height: '90%',
    // width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: '90%',
    width: '90%',
    // flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default AddNewCardModal;
