import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBbw7GahI_9m18mS3Z338S1id6Ii6qyAnQ",
    authDomain: "ecommerce-coderhouse-a0730.firebaseapp.com",
    projectId: "ecommerce-coderhouse-a0730",
    storageBucket: "ecommerce-coderhouse-a0730.appspot.com",
    messagingSenderId: "824727731372",
    appId: "1:824727731372:web:e7c70e815cdbc54792b309"
});

export const getFirebase = () => {
    return app;
};

export const getFirestore = () => {
    return firebase.firestore(app);
};
