//firebase config key setup
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//Your web app's Firebase configuration
const firebaseConfig={
  apiKey: "AIzaSyDzrdLLvxJbVB25uKP9KCLrfR7xz49A_ms",
  authDomain: "projectnav-82adf.firebaseapp.com",
  projectId: "projectnav-82adf",
  storageBucket: "projectnav-82adf.appspot.com",
  messagingSenderId: "987754617964",
  appId: "1:987754617964:web:97f787c568ad7d03d88c49"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export{firebase};