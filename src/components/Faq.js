import React from 'react'
import '../style/faq.css'

const Faq = () => {
    return (
        <>
            <section style={{ backgroundColor: 'rgb(244 250 255)' }}>
                <div className='container' style={{ marginTop: "50px" }}>
                    <div className='row'>
                        <div className='col-lg-4 col-md-12' style={{ textAlign: 'start' }} >
                            <h2 style={{ marginTop: '50px', color: 'rgb(151 151 151)' }}>FAQ's</h2>
                            <h2 style={{ color: 'rgba(32, 64, 99, 0.8)', textShadow: 'rgba(0, 0, 0, 0.3) 4px 4px 5px' }}>Frequently Asked Questions</h2>
                        </div>
                        <div className='col-lg-8 col-md-12' style={{ textAlign: 'start' }}>
                            <div className="accordion">
                                <div className="accordion-item">
                                    <input type="checkbox" id="accordion1" />
                                    <label htmlFor="accordion1" className="accordion-item-title">
                                        <span className="icon"></span>
                                        What do e-accountants do?
                                    </label>
                                    <div className="accordion-item-desc">
                                        E- Accountants are expert professionals who provide you with data insights on your daily transactions and support in tax filing and more. They store your data in online tools and make it easy for you to analyze and share them across your business. You can seek suggestions when needed and provide you with guidance based on their knowledge of multiple firms. With Quick Accounting your data is secured on our portals, and can only be accessed by you.
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <input type="checkbox" id="accordion2" />
                                    <label htmlFor="accordion2" className="accordion-item-title">
                                        <span className="icon"></span>
                                        Are online bookkeeping services secure?
                                    </label>
                                    <div className="accordion-item-desc">
                                        Yes, online bookkeeping services are secure since they offer multiple layers of security and protection of the cloud with secured access of the owner to the site. With Quick Accounting you get access to premium and secure portals.
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <input type="checkbox" id="accordion3" />
                                    <label htmlFor="accordion3" className="accordion-item-title">
                                        <span className="icon"></span>
                                        Why is accounting important for a business?
                                    </label>
                                    <div className="accordion-item-desc">
                                        With the right accounting, you get to know the financial status of your business, and the strategies needed to operate and succeed. Accounting is an effective monitoring of your business in terms of expense, income, cash flow and more.
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <input type="checkbox" id="accordion4" />
                                    <label htmlFor="accordion4" className="accordion-item-title">
                                        <span className="icon"></span>
                                        Why should I hire a professional bookkeeper instead of doing it myself?
                                    </label>
                                    <div className="accordion-item-desc">
                                        Professional bookkeeper records every transaction and smarty categorizes them into the right journals and ledgers keeps track of your taxes and finances and allows you to comply with regulations and standards.
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <input type="checkbox" id="accordion5" />
                                    <label htmlFor="accordion5" className="accordion-item-title">
                                        <span className="icon"></span>
                                        How much do bookkeeping services cost?
                                    </label>
                                    <div className="accordion-item-desc">
                                        The general prices for standard service packages include ₹15000- ₹20000, though some of the services might not be relevant to your business needs thus it is best to consult with our Quick Accounting experts for free and get accurate pricing as per your business needs.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq
