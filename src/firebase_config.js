import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth";
import{getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDPef5LYEB7MVO1FyIj0OJFsFqLvFoLp44",
  authDomain: "findingblood-4d6b9.firebaseapp.com",
  projectId: "findingblood-4d6b9",
  storageBucket: "findingblood-4d6b9.firebasestorage.app",
  messagingSenderId: "401453604606",
  appId: "1:401453604606:web:f7310194ba5ddf83df8faf",
  measurementId: "G-S2ZGFL1STL"
};

const app = initializeApp(firebaseConfig);

// let analytics;
// if (process.env.NODE_ENV === "production") {
//   isSupported().then((yes) => {
//     if (yes) {
//       analytics = getAnalytics(app);
//     }
//   });
// }

// export { app, analytics };

export const db = getFirestore(app);
 const auth = getAuth(app);
 export{auth};