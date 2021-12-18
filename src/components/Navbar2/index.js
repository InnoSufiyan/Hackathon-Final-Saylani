import './App.css';


export default function Navbar2 () {
    return (
        <>
            <ul className="nav nav-pills d-flex justify-content-center">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">About</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Introduction</a></li>
                        <li><a className="dropdown-item" href="#">Chairman Message</a></li>
                        <li><a className="dropdown-item" href="#">Saylani Annual report</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Saylani Services</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Education</a></li>
                        <li><a className="dropdown-item" href="#">Medical</a></li>
                        <li><a className="dropdown-item" href="#">Welfare</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Hajj Application Form</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Saylani Ehsaas</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Ehsas Langar khana</a></li>
                        <li><a className="dropdown-item" href="#">Saylani Dastarkhuwan</a></li>
                        <li><a className="dropdown-item" href="#">Online Sadaqah</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Saylani Job Bank</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Future Project</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Saylani University</a></li>
                        <li><a className="dropdown-item" href="#">Saylani City</a></li>
                        <li><a className="dropdown-item" href="#">Books</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Saylani Online Masjid</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Media</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Photos</a></li>
                        <li><a className="dropdown-item" href="#">Videos</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Donation</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Bank Details</a></li>
                        <li><a className="dropdown-item" href="#">Sadqah</a></li>
                        <li><a className="dropdown-item" href="#">Aqeeqah</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Contact Us</a></li>
                    </ul>
                </li>
            </ul>
        </>
    )
}