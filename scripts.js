// Firebase Config (استبدل بالقيم الخاصة بك)
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "bashmina.firebaseapp.com",
  projectId: "bashmina",
  storageBucket: "bashmina.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();