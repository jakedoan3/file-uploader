import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCnWkOkGck6F2hFdZGAvBKSx0cvpQ7Iryo",
  authDomain: "file-uploader-7ff6b.firebaseapp.com",
  projectId: "file-uploader-7ff6b",
  storageBucket: "file-uploader-7ff6b.appspot.com",
  messagingSenderId: "341811153887",
  appId: "1:341811153887:web:f1f8b0dfc5cafdbc25d26a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)