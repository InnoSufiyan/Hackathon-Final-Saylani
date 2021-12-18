import "./App.css";
import Adcard from "../../components/Adcard";
import Navbar from "../../components/Navbar";
import NavbarLoggedIn from "../../components/NavbarLoggedIn";
import Navbar2 from "../../components/Navbar2";



export default function Dashboard() {

    return (
        <>
            <NavbarLoggedIn />

            <Navbar2 />
            <div className="coverImage">
                <img src="/images/maincover.jpeg" alt="" />
            </div>
            <div className="d-flex justify-content-between w-100 mt-5">
                <div className="container firstLine d-flex flex-column justify-content-center align-items-center">
                    <h2 className="my-5">Request Tab</h2>
                    <div className="firstLineProducts d-flex">
                        <Adcard request="/images/request.png" ourtextHeadline="Description" ourtext="All the requests from public are available here" />
                    </div>
                </div>
                <div className="container firstLine d-flex flex-column justify-content-center align-items-center">
                    <h2 className="my-5">Approved and Rejected Request</h2>
                    <div className="firstLineProducts d-flex">
                        <Adcard request="/images/acceptreject.jpg" ourtextHeadline="Description" ourtext="You can approve and reject requests here" />
                    </div>
                </div>
                <div className="container firstLine d-flex flex-column justify-content-center align-items-center">
                    <h2 className="my-5">Branch Manager Tab</h2>
                    <div className="firstLineProducts d-flex flex-wrap">
                        <Adcard request="/images/branchmanager.jpg" ourtextHeadline="Description" ourtext="Branch Manager can be made admin from here" />
                    </div>
                </div>
            </div>
            <div className="coverImage">
                <img src="/images/footercover.jpeg" alt="" />
            </div>
        </>
    );
}