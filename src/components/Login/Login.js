import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import firebaseConfig from "../../firebase.config";
import google from "../../icons/google.png";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const LogIn = () => {
  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  })
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        var { displayName, email } = result.user;
        const signedInUser = { name: displayName, email: email }
        setLoggedInUser(signedInUser)
        history.replace(from)

      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <div className="text-center mt-5">
      <button className=" mt-5" onClick={googleSignIn}> <img style={{width: "30px"}} src={google} alt=""/> Continue with Google</button><br />
    </div>
  );
};
export default LogIn;