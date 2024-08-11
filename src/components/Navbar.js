/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../style/navbar.css'
import logo from '../images/logo.jpg'

const Navbar = () => {
    return (
        <>
              <section style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: "white", border: "2px solid lightgray", top: '0', zIndex: '1', position:'sticky'}}>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-light" id='navLogo'>
                        <a className="navbar-brand" href="/">
                            <img id='imgLogo' src={logo} alt="logo" />
                        </a>
                        <div className="navbar-collapse" id="myCont">
                            <div className="form-inline my-2 my-lg-0" >
                                <ul className="navbar-nav ml-auto" style={{ fontSize: "15px", marginBottom: "15px", paddingTop: "10px", fontWeight:"500" }} >
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/">Home</a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="https://www.ascentwealth.in/#feature-22">About&nbsp;Us<span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="https://www.ascentwealth.in/#title-7">Services<span className="sr-only"></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='btnHome' style={{paddingBottom:'7px', display:'flex', textAlign:'end'}}>
                            <a href="https://m.assetplus.in/#!/login" target='_blank' id='btnHvn' className="nav-link"><span style={{ color: 'white' }}>Login</span></a>
                            </div>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Navbar
