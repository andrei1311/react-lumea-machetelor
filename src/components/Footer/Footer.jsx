import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as GitHub } from "../../assets/icons/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/linkedin.svg";
import "./Footer.css";

function Footer() {
    return (
        <footer className="pt-3 mt-5 bg-light">
            <div
                className="container-fluid container-min-max-width
                            d-flex justify-content-between"
            >
                <div className="footer-section">
                    <h3 className="h5">Link-uri rapide:</h3>
                    <p className="mb-1">
                        <Link to="/about">Despre mine</Link>
                    </p>
                    <p className="m-0">
                        <Link to="/terms">Termeni și condiții</Link>
                    </p>
                </div>
                <div className="footer-section">
                    <h3 className="h5">Email și telefon:</h3>
                    <p className="mb-1">
                        <a href="mailto:andrei.agrigoroaie@gmail.com">
                            <Mail className="mr-1 mb-1 footer-icon" />
                            andrei.agrigoroaie@gmail.com
                        </a>
                    </p>
                    <p className="m-0">
                        <Phone className="mr-1 footer-icon" />
                        +40765002768
                    </p>
                </div>
                <div className="footer-section">
                    <h3 className="h5">Github și Linkedin:</h3>
                    <p className="mb-1">
                        <a href="https://github.com/andrei1311">
                            <GitHub className="mr-1 mb-1 footer-icon" />
                            andrei1311
                        </a>
                    </p>
                    <p className="m-0">
                        <a href="https://www.linkedin.com/in/agrigoroaie-andrei-6721b417b">
                            <LinkedIn className="mr-1 footer-icon" />
                            Andrei Agrigoroaie
                        </a>
                    </p>
                </div>
            </div>
            <div className="text-center py-3">
            <Link to="/about">&copy; Andrei Agrigoroaie, 2021</Link>
            </div>
        </footer>
    );
}

export default Footer;