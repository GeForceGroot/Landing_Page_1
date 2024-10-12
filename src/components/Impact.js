import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '../style/impact.css';

const Impact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Counter will reset every time it comes into view
    threshold: 0.3, // Trigger when 30% of the element is in view
  });

  return (
    <>
      <div className="counter2-section-area">
        <div className="container">
          <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">
            Discover Your New Insights
          </span>
          <h1
            className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20"
            style={{ textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: 'rgba(32, 64, 99, 0.8)' }}
          >
            Beyond Trends Towards Setting New Standards
          </h1>
          <p className="font-ks font-16 lineh-26 weight-500 color-30" style={{ fontFamily: 'inherit' }}>
            <strong>Consultancy Services: </strong>Don't want to outsource the whole process? No worries, get the best strategies and recommendations based on AI-based market analysis to have the best actions before rivals.
          </p>
          <div className="row" style={{ marginTop: '50px' }} ref={ref}>
            <div className="col-lg-3 col-md-6">
              <div className="countre2-boxarea text-center">
                <div className="counter-box">
                  <h1 className="font-outfit font-44 lineh-52 color-17 weight-600">
                    <span className="counter">{inView && <CountUp start={0} end={11} duration={1} />} +</span>
                  </h1>
                  <p className="font-outfit font-16 lineh-16 color-15 weight-400 margin-t">Year of Experience</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="countre2-boxarea text-center">
                <div className="counter-box">
                  <h1 className="font-outfit font-44 lineh-52 color-17 weight-600">
                    <span className="counter">{inView && <CountUp start={0} end={700} duration={1} />} +</span>
                  </h1>
                  <p className="font-outfit font-16 lineh-16 color-15 weight-400 margin-t">Clients on a Recurring Basis</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="countre2-boxarea text-center">
                <div className="counter-box">
                  <h1 className="font-outfit font-44 lineh-52 color-17 weight-600">
                    <span className="counter">{inView && <CountUp start={0} end={75} duration={2} />} +</span>
                  </h1>
                  <p className="font-outfit font-16 lineh-16 color-15 weight-400 margin-t">Full-Time Employees</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="countre2-boxarea text-center">
                <div className="counter-box">
                  <h1 className="font-outfit font-44 lineh-52 color-17 weight-600">
                    <span className="counter">{inView && <CountUp start={0} end={1427} duration={2} />} +</span>
                  </h1>
                  <p className="font-outfit font-16 lineh-16 color-15 weight-400 margin-t">HST Remitted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Impact;
