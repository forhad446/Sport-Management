import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMkMwIICIwjoy4pE0pq2rmaGoF8jFEWlA",
  authDomain: "entertainment-event-mana-e6563.firebaseapp.com",
  projectId: "entertainment-event-mana-e6563",
  storageBucket: "entertainment-event-mana-e6563.appspot.com",
  messagingSenderId: "731392695672",
  appId: "1:731392695672:web:679a379fc6575ede15fc8d"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
