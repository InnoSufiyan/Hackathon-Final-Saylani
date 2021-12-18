import './App.css';
import { useState } from 'react';

import { useNavigate } from "react-router-dom";

import db from '../../config/firebase'

import { doc, getDoc } from "firebase/firestore";




export default function Login() {


    let navigate = useNavigate();

    const [userName, setuserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, seterror] = useState("")


    const submitHandler = async () => {
        console.log("submit Handler clicked")
        console.log(userName, password);

        const docRef = doc(db, "HeadOffice", "admin");
        const docSnap = getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    const adminDetails = docSnap.data();
                    console.log("Document data:", adminDetails);
                    (adminDetails.username === userName && adminDetails.password === password) ? navigate("/home") : console.log("sorry")
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })
            .catch((error) => {
                console.log(error);
            });

        // const docRef = doc(db, "cities", "SF");
        // const docSnap = await getDoc(docRef);

        // if (docSnap.exists()) {
        //     console.log("Document data:", docSnap.data());
        // } else {
        //     // doc.data() will be undefined in this case
        //     console.log("No such document!");
        // }



    }


    return (
        <>
            <div id="container">
                <div className="form-wrap">
                    <h1>Login</h1>

                    <p>It's free and take a minute only</p>
                    <form onSubmit={e => e.preventDefault()}>


                        <div className="form-group">
                            <label for="name">UserName</label>
                            <input
                                type="name"
                                name="name"
                                id="name"
                                placeholder="pappu"
                                onChange={(e) => setuserName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label for="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="e.g:Hard One"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <p>{error}</p>

                        <button type="submit" onClick={submitHandler} className="btn">
                            Login
                        </button>
                        <p className="bottom-text">
                            By clicking the Sign Up button, you agree to our{" "}
                            <a href="#">Terms & Conditions</a> and{" "}
                            <a href="#">Privacy Policy</a>
                        </p>
                    </form>
                </div>
                <footer>
                    <p style={{ color: "black" }}>
                        Dont Have any Account
                        Signup
                    </p>
                </footer>
            </div>
        </>
    );
}