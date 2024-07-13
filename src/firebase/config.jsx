import firebase  from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9F9R3DOIyHdRlUkYG-BSkTOJpsH5nzqA",
    authDomain: "olx--clone-655d9.firebaseapp.com",
    projectId: "olx--clone-655d9",
    storageBucket: "olx--clone-655d9.appspot.com",
    messagingSenderId: "351480802177",
    appId: "1:351480802177:web:2983973161d315b49cd680",
    measurementId: "G-85T6RWKJ3W"
  };


export default firebase.initializeApp(firebaseConfig)