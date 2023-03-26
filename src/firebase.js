import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, doc } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
});

export const db = getFirestore(firebaseApp);
export const userCollectionRef = collection(db, "accounts");

