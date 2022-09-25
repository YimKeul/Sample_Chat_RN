import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
// import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
  apiKey: "AIzaSyBQOgqN4JFFqd_kOfvadgFkGDuEY_7KUrw",
  authDomain: "sample-chat-643ef.firebaseapp.com",
  projectId: "sample-chat-643ef",
  storageBucket: "sample-chat-643ef.appspot.com",
  messagingSenderId: "858501658920",
  appId: "1:858501658920:web:de2d654decd32f81d4f81d",
};

//사용 방법입니다.
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();

// export const firebase_db = firebase.database()
export { auth, db };
