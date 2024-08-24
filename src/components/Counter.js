/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import '../style/impact.css';

const Counter = () => {
    const countersRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const counters = entry.target.querySelectorAll('.counter');
                        const duration = 2000; // Duration in milliseconds
                        counters.forEach((counter) => {
                            counter.innerText = '0';
                            const target = +counter.getAttribute('data-target');
                            const increment = target / (duration / 20);

                            const updateCounter = () => {
                                const count = +counter.innerText;
                                if (count < target) {
                                    counter.innerText = Math.ceil(count + increment);
                                    setTimeout(updateCounter, 20);
                                } else {
                                    counter.innerText = target;
                                }
                            };
                            updateCounter();
                        });
                    }
                });
            },
            { threshold: 0.5 }
        );

        countersRef.current.forEach((counterSection) => {
            observer.observe(counterSection);
        });

        return () => {
            countersRef.current.forEach((counterSection) => {
                observer.unobserve(counterSection);
            });
        };
    }, []);

    return (
        <>
            <div className="counter2-section-area" ref={(el) => (countersRef.current[0] = el)}>
                <div className="container">
                    <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">Discover Your New Insights</span>
                    <h1
                        className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20"
                        style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: 'rgba(32, 64, 99, 0.8)' }}
                    >
                        Beyond Trends Towards Setting New Standards
                    </h1>
                    <div className="row" style={{ marginTop: '50px' }}>
                        <div className="col-lg-3 col-md-6 aos-init aos-animate" id='colMargin' data-aos="zoom-in" data-aos-duration="800">
                            <div className="countre2-boxarea text-center">
                                <div className="counter-box">
                                    <h1 className="font-outfit font-44 lineh-52 color-17 weight-600">
                                        <span className="counter" data-target="50">0</span>+
                                    </h1>
                                    <p className="font-outfit font-16 lineh-16 color-15 weight-400 margin-t">Reporting</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 aos-init aos-animate" id='colMargin' data-aos="zoom-in" data-aos-duration="1000">
                            <div className="countre2-boxarea text-center">
                                <div className="counter-box">
                                    <h1 className="font-outfit font-44 lineh-52 color-17 weight-600">
                                        <span className="counter" data-target="14">0</span>+
                                    </h1>
                                    <p className="font-outfit font-16 lineh-16 color-15 weight-400 margin-t">Years of Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 aos-init aos-animate" id='colMargin' data-aos="zoom-in" data-aos-duration="1200">
                            <div className="countre2-boxarea text-center">
                                <div className="counter-box">
                                    <h1 className="font-outfit font-44 lineh-52 color-17 weight-600">
                                        <span className="counter" data-target="1427">0</span>+
                                    </h1>
                                    <p className="font-outfit font-16 lineh-16 color-15 weight-400 margin-t">HST Remitted</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 aos-init aos-animate" id='colMargin' data-aos="zoom-in" data-aos-duration="1400">
                            <div className="countre2-boxarea text-center">
                                <div className="counter-box">
                                    <h1 className="font-outfit font-44 lineh-52 color-17 weight-600">
                                        <span className="counter" data-target="800">0</span>+
                                    </h1>
                                    <p className="font-outfit font-16 lineh-16 color-15 weight-400 margin-t">Clients on a Recurring Basis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Counter;
