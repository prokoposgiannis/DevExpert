import { initializeApp } from 'firebase/app';

import {
  getFirestore,
  collection,
  getDoc,
  getDocs,
  doc,
  setDoc,
  query,
  updateDoc,
  where,
  deleteDoc,
} from 'firebase/firestore/lite';

const firebaseConfig = {
//
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const addArticle = (title, content, imageUrl, isFavorite) => {
  const docRef = collection(db, 'posts');

  setDoc(doc(docRef), {
    content,
    // id: id, // Most secure way must be found
    imageUrl,
    isFavorite,
    title,
  });
};

export {
  db,
  addArticle,
  collection,
  getDoc,
  getDocs,
  doc,
  updateDoc,
  setDoc,
  deleteDoc,
  query,
  where,
};

