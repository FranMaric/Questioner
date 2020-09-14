// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyDes5XW_eFPz16UUUQS_-cNOqCij5ZG7UY",
    authDomain: "fm-quiz.firebaseapp.com",
    databaseURL: "https://fm-quiz.firebaseio.com",
    projectId: "fm-quiz",
    storageBucket: "fm-quiz.appspot.com",
    messagingSenderId: "61014012434",
    appId: "1:61014012434:web:7eecb00e7ca5ba2beb9ecb",
    measurementId: "G-C9PG86QM0N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();