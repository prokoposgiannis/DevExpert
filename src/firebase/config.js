import { initializeApp } from 'firebase/app';

import {
  getFirestore,
  collection,
  getDoc,
  deleteDoc,
  getDocs,
  doc,
  setDoc,
  query,
  updateDoc,
  where,
} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyAg8KWf5Jhivlvd-RjkMBRajLIKPKj_Sb4',
  authDomain: 'devexpert-9fa44.firebaseapp.com',
  projectId: 'devexpert-9fa44',
  storageBucket: 'devexpert-9fa44.appspot.com',
  messagingSenderId: '476953186072',
  appId: '1:476953186072:web:78237b50accbd8357d986d',
  measurementId: 'G-L7E9XWCQ2Q',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const addCardToFirestore = (
  category,
  question,
  answer,
  isLoved = false,
  key,
  cardNumber
) => {
  const docRef = collection(db, 'cards');

  setDoc(doc(docRef), {
    category,
    question,
    answer,
    isLoved,
    key,
    cardNumber,
  });
};

const deleteCardToFirestore = (id) => {
  const docRef = doc(db, 'cards', id);

  deleteDoc(docRef)
    .then(() => {
      console.log('Document has been deleted successfully.');
    })
    .catch((error) => {
      console.log(error);
    });
};

const loveCardToFirestore = (id, newBooleanValue) => {
  const docRef = doc(db, 'cards', id);

  updateDoc(docRef, {
    isLoved: newBooleanValue,
  })
    .then(() => {
      console.log('Love state has been updated successfully.');
    })
    .catch((error) => {
      console.log(error);
    });
};

export {
  db,
  addCardToFirestore,
  collection,
  getDoc,
  getDocs,
  doc,
  updateDoc,
  setDoc,
  deleteDoc,
  deleteCardToFirestore,
  loveCardToFirestore,
  query,
  where,
};
