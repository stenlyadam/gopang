import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAc9cY-5GACTv-UAkba7nTibz9CueafQKs',
  authDomain: 'gopang-2022.firebaseapp.com',
  databaseURL:
    'https://gopang-2022-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'gopang-2022',
  storageBucket: 'gopang-2022.appspot.com',
  messagingSenderId: '705078793630',
  appId: '1:705078793630:web:7c78a2ad9fc79ed7bd328f',
  measurementId: 'G-P4Q1MHG3Y9',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
