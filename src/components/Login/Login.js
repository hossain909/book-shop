import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import firebaseConfig from "../../firebase.config";

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
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <button onClick={googleSignIn}>Continue with Google</button><br />

      {user.success
        ? <h5 style={{ color: "green", marginTop: "10px" }}>User {newUser ? "Created" : "Logged In"} Successfully</h5>
        : <h5 style={{ color: "red", marginTop: "10px" }}>{user.error}</h5>
      }
    </div>
  );
};
export default LogIn;