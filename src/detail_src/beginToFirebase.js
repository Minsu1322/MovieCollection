import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

export const beginToFirebase = () => {
  // Firebase 구성 정보 설정
  const firebaseConfig = {
    apiKey: "AIzaSyBlVtkRsT8W0hxPh1MtfF8iJpOr7K0Xwdw",
    authDomain: "teammovie-66f9e.firebaseapp.com",
    projectId: "teammovie-66f9e",
    storageBucket: "teammovie-66f9e.appspot.com",
    messagingSenderId: "1097560740511",
    appId: "1:1097560740511:web:a5c6d3b3d083d8511048aa",
    measurementId: "G-R960EWKPQD",
  };

  // Firebase 인스턴스 초기화
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return db;
};
