import { initializeApp } from 'firebase/app';


//PUT YOUR CREDENTIALS
const firebaseConfig = {
  apiKey: "AIzaSyBQZa7NG_qL-NGEelMZ0QoYoOyPMvmaY0k",
  authDomain: "react-with-firebase-cfe2c.firebaseapp.com",
  projectId: "react-with-firebase-cfe2c",
  storageBucket: "react-with-firebase-cfe2c.appspot.com",
  messagingSenderId: "518525972786",
  appId: "1:518525972786:web:2432ecf2882b6f25f8e72b",
};

const app = initializeApp(firebaseConfig);

export default app;
