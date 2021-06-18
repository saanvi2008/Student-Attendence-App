import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCHkfGVrA0Hn2Wtp5LDkjrg4Qn7IsZxk4s",
    authDomain: "school-attendence-app-a8620.firebaseapp.com",
    databaseURL: "https://school-attendence-app-a8620-default-rtdb.firebaseio.com",
    projectId: "school-attendence-app-a8620",
    storageBucket: "school-attendence-app-a8620.appspot.com",
    messagingSenderId: "195562594945",
    appId: "1:195562594945:web:6ff929354314b0001be380"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();
  