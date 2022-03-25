import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBRnWvEoXf2iwKHPGrCtXwNUEIzCZCmhTo",
    authDomain: "egypt-food.firebaseapp.com",
    projectId: "egypt-food",
    storageBucket: "egypt-food.appspot.com",
    messagingSenderId: "566739082425",
    appId: "1:566739082425:web:cfa07f335e6389cb770f68"

};

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;