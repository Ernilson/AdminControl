import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDtDI_JtLqnZKJbRqBexHgUm1eSxTL0wDM",
  authDomain: "sibre-project.firebaseapp.com",
  databaseURL: "https://sibre-project.firebaseio.com",
  projectId: "sibre-project",
  storageBucket: "sibre-project.appspot.com",
  messagingSenderId: "238776754853",
  appId: "1:238776754853:web:453fb978810bba5308a34c",
  measurementId: "G-Q89VDKTV7G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();   
   

  export default firebase;
  
  