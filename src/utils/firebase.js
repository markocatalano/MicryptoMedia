import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA_wZamcA_1IBTlJjt44JSSfCAjlQ2kbWM",
    authDomain: "mi-crypto-media.firebaseapp.com",
    projectId: "mi-crypto-media",
    storageBucket: "mi-crypto-media.appspot.com",
    messagingSenderId: "766259583556",
    appId: "1:766259583556:web:7e6a5741642cff127a3a11"
  };


  //iniciamos la conexion del proyecto react con firebase
  const app = initializeApp(firebaseConfig);

  //Nos conectamos a la base de datos que creamos en firestone
  export const db = getFirestore(app);

