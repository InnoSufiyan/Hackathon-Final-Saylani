import './App.css';
import React from "react";
import Login from './screen/Login'
import { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";
import Dashboard from './screen/Dashboard';
// import { auth, db } from './config/firebase'

// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// import { getFirestore, collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";



function App() {

  // const [user, setUser] = useState(false);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //       console.log(uid)
  //       if (uid) {
  //         setUser(true)
  //       }
  //     } else {
  //       console.log("user is signed out")
  //     }
  //   });
  // }, [])




  return (

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Dashboard />} />
    </Routes>



    // <Router>
    //   <div>

    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //     <Switch>
    //       <Route exact path="/signup">
    //         <Signup />
    //       </Route>
    //       <Route exact path="/login">
    //         <Login />
    //       </Route>
    //       <Route exact path="/editprofile">
    //         {ProtectedRoute(user, <Editprofile />)}
    //       </Route>
    //       <Route exact path="/sellingpage">
    //         {ProtectedRoute(user, <Sellingpage />)}
    //       </Route>
    //       <Route exact path="/">
    //         <Homepage />
    //       </Route>
    //       <Route exact path="/detail/:adId">
    //         {ProtectedRoute(user, <Detail />)}
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;