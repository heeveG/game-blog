import React from 'react';
import "../../styles/footer.css"

function Footer() {
    return (
        <footer>
            <div className="text-center text-md-right footer-wrapper">
                <ul className="list-unstyled list-inline">

                    <li className="list-inline-item">
                        <a className=""
                           href="https://www.facebook.com/Cloudxdxd">
                            <i className="fa fa-facebook-f fa-2x"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-sm rgba-white-slight mx-1"
                           href="https://twitter.com/Nazar77438332">
                            <i className="fa fa-twitter fa-2x"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://github.com/heeveG">
                            <i className="fa fa-github fa-2x"/>
                        </a>
                    </li>

                </ul>

            </div>
        </footer>
    )
}

export default Footer;
