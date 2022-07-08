import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAEVkLck0KizmrM2gY9gkVpSRHkXwN3iBw",
    authDomain: "food-order-8a9b6.firebaseapp.com",
    databaseURL: "https://food-order-8a9b6-default-rtdb.firebaseio.com",
    projectId: "food-order-8a9b6",
    storageBucket: "food-order-8a9b6.appspot.com",
    messagingSenderId: "1093377202061",
    appId: "1:1093377202061:web:f65ca09cd53a40aa62cfc4"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
