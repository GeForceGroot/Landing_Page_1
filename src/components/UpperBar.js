import React from 'react'
import '../style/upperbar.css'

const UpperBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgb(15 77 106)', height: '50px' }} id='upBar'>
                <div className='container' style={{ marginTop: '10px' }}>
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <a style={{ marginBottom: '9px' }} href="https://www.facebook.com/umangratani"  id='upBarNav' rel="noreferrer">
                                    <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/461facebook5.png" style={{ marginLeft: '50px', marginRight: '10px' }} alt="Facebook" width={'25px'} height={'25px'} />
                                </a>
                                <a id='upBarNav' style={{ marginBottom: '9px' }} href="/" >
                                    <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/71twitter5.png" style={{ marginRight: '10px' }} alt="x" width={'25px'} height={'25px'} />
                                </a>
                                <a id='upBarNav' style={{ marginBottom: '9px' }} href="https://www.instagram.com/umangratani/"  rel="noreferrer">
                                    <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/55instagram5.png" style={{ marginRight: '10px' }} alt="Instagram" width={'25px'} height={'25px'} />
                                </a>
                                <a id='upBarNav' style={{ marginBottom: '9px' }} href="https://www.youtube.com/@umangratani"  rel="noreferrer">
                                    <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/118youtube5.png" style={{ marginRight: '10px' }} alt="Youtube" width={'25px'} height={'25px'} />
                                </a>
                                <a id='upBarNav' style={{ marginBottom: '9px' }} href="https://api.whatsapp.com/send?phone=+918200858674&text=Hello"  rel="noreferrer">
                                    <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/883whatsapp5.png" style={{ marginRight: '10px' }} alt="Whats-app" width={'25px'} height={'25px'} />
                                </a>
                                <a id='upBarNav' style={{ marginBottom: '9px' }} href="https://www.linkedin.com/in/umangratani/"  rel="noreferrer">
                                    <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/211linkedin5.png" style={{ marginRight: '10px' }} alt="LinkedIn" width={'25px'} height={'25px'} />
                                </a>
                            </ul>
                            <span className="navbar-text" style={{ display: 'flex', color: 'white' }}>
                                <img style={{ marginLeft: "10px" }} src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/46955615telephone1.png" alt="Phone" width={'25px'} height={'25px'} />
                                <p style={{ marginLeft: "10px", fontSize: '15px', fontWeight: "600", marginTop: '3px ' }}>+91-8200858674</p>
                                <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/704694287mail2.png" alt="Mail" width={'25px'} height={'25px'} style={{ marginLeft: '20px' }} />
                                <a href="mailto:growth@umangratani.com" style={{ color: 'black', textDecoration: 'none' }}>
                                    <p style={{ marginLeft: "10px", fontSize: '15px', fontWeight: "600", color: 'white', marginTop: '3px  ' }}>Carol@quickaccounting.us</p>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default UpperBar
