import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCfIPiVqCLoKadkrTqFeBXflbbrERrcCaQ",
    authDomain: "societyfiles-8f8ac.firebaseapp.com",
    projectId: "societyfiles-8f8ac",
    storageBucket: "societyfiles-8f8ac.appspot.com",
    messagingSenderId: "403757236259",
    appId: "1:403757236259:web:5d1cd913975ba92915b196"
};
export const app = initializeApp(firebaseConfig);

//getting acces to the storage

export const storage = getStorage(app)