import * as firebase from 'firebase';

var firebaseConfig = { 
    apiKey: "AIzaSyA72KXb0dwEpb53xsaawei_Y562GFNG2xQ",
    authDomain: "people-fb.firebaseapp.com",
    databaseURL: "https://people-fb-default-rtdb.firebaseio.com",
    projectId: "people-fb",
    storageBucket: "people-fb.appspot.com",
    messagingSenderId: "473790780071",
    appId: "1:473790780071:web:c558471210285cd7dcc182",
    measurementId: "G-X59H1WLMJ0"
  };
  var fireDb = firebase.default.initializeApp(firebaseConfig);

  export default fireDb.database().ref();

