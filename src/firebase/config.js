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

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase

// import { getAnalytics } from "firebase/analytics";

// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from 'firebase/auth';
// const auth = getAuth(app);
// const handleSignOut = () => {
//   console.log('handleSignOut run');
//   signOut(auth)
//     .then((res) => console.log('sign out was successful'))
//     .catch((err) => console.error('error on sign out', err));
// };

// const signUp = (username, email, password) => {
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredentials) => {
//       const currentUser = auth.currentUser;
//       const user = userCredentials.user;

//       console.log('Registered with:', user.email);
//       console.log('id:', currentUser.uid);

//       const userRef = doc(db, 'users', currentUser.uid);
//       setDoc(userRef, {
//         username,
//         email,
//         password,
//         roleid: 3, //id of simple user role
//         isAdmin: false,
//       })
//         .then((res) => {
//           console.log('user', user, 'added successfully with result', res);
//         })
//         .catch((err) => console.error('user add error', err));
//     })
//     .catch((err) => console.error('user sign up error', err.message));
// };
// const signIn = (email, password) => {
//   console.log('sign in args', auth, email, password);
//   signInWithEmailAndPassword(auth, email, password)
//     .then((res) => {
//       console.log('successful sign in', res);
//     })
//     .catch((err) => console.error('error on sign in', err));
// };

// let data = {
//   email: 'email',
//   isAdmin: false,
//   password: 'password',
//   userName: 'userName',
//   roleId: 0,
// };

// let roleData = {
//   roleName: 'role',
//   perms: '',
//   roleId: 0,
// };
