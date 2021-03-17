import logo from './logo.svg';
import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

function App() {
  var provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () =>{
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    console.log(user);
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(email,errorCode,errorMessage);
  });

  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn} className="btn btn-success mt-5 text-center" >SignIn by Google</button>
    </div>
  );
}

export default App;
