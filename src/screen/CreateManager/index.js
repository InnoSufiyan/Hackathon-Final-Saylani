import './App.css';
import { useState } from 'react';

import { useNavigate } from "react-router-dom";

import db from '../../config/firebase'

import { doc, getDoc, setDoc } from "firebase/firestore";




export default function CreateManager() {


    let navigate = useNavigate();

    const [userName, setuserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, seterror] = useState("")


    const submitHandler = async () => {
        console.log("submit Handler clicked")
        console.log(userName, password);

        await setDoc(doc(db, "Branch Manager", userName), {
            userName,
            password,
        });
        navigate("/home")



    }


    return (
        <>
            <div id="container">
                <div className="form-wrap">
                    <h1>Create Manager</h1>

                    <p>Keep the username and password secret with you only</p>
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
                            Create Manager
                        </button>
                        <p className="bottom-text">
                            By clicking the Sign Up button, you agree to our{" "}
                            <a href="#">Terms & Conditions</a> and{" "}
                            <a href="#">Privacy Policy</a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}