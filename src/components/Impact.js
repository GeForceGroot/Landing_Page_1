import React from 'react'
import '../style/impact.css'
import img1 from '../images/about3-img1.png'
import img2 from '../images/elementor17.png'

const Impact = () => {
  return (
    <>
    <div class="about3-section-area section-padding5">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6 aos-init aos-animate" data-aos="fade-right" data-aos-duration="1200">
        <div class="about3-images1">
          <img src={img1} alt="" data-aos="zoom-out" data-aos-duration="1200" class="aos-init aos-animate"/>
          <img src={img2} alt="" class="elementor-9 keyframe3"/>
        </div>
      </div>
      <div class="col-lg-6 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1200" style={{textAlign:'start'}}>
        <div class="about3-textarea1">
          <span class="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">About Us</span>
          <h1 class="font-lora font-48 lineh-56 weight-600 color-29 margin-b20" style={{textShadow: '4px 4px 5px rgba(0, 0, 0, 0.3)', color: 'rgba(32, 64, 99, 0.8)'}}>Mission &amp; Values Of Your Law Consult Firm</h1>
          <p class="font-ks font-16 lineh-26 weight-500 color-30 " style={{fontFamily:'inherit'}}>Provide professional advice and guidance on legal matters, helping clients understand their rights, obligations, and potential courses.</p>
        <div class="counter3-area3">
          <div class="row">
            <div class="col-lg-6 col-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1200">
              <div class="counter3-boxarea4 text-center margin-b20 margin-t32">
               <div class="counter4-boxarea4">
                <h1 class="font-lora font-40 lineh-40 color-29 margin-b weight-600"><span class="counter">959</span>+</h1>
                <p class="font-ks font-16 lineh-16 weight-500 color-30">Case Settlement</p>
               </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-duration="1200">
              <div class="counter3-boxarea4 text-center margin-b20 margin-t32">
               <div class="counter4-boxarea4">
                <h1 class="font-lora font-40 lineh-40 color-29 margin-b weight-600"><span class="counter">250</span>+</h1>
                <p class="font-ks font-16 lineh-16 weight-500 color-30">Insurance Settlment</p>
               </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 aos-init" data-aos="fade-left" data-aos-duration="1200">
              <div class="counter3-boxarea4 text-center">
               <div class="counter4-boxarea4">
                <h1 class="font-lora font-40 lineh-40 color-29 margin-b weight-600"><span class="counter">388</span>+</h1>
                <p class="font-ks font-16 lineh-16 weight-500 color-30">Personal Injury</p>
               </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 aos-init" data-aos="fade-left" data-aos-duration="1200">
              <div class="counter3-boxarea4 text-center">
               <div class="counter4-boxarea4">
                <h1 class="font-lora font-40 lineh-40 color-29 margin-b weight-600"><span class="counter">400</span>+</h1>
                <p class="font-ks font-16 lineh-16 weight-500 color-30">Divorce Case</p>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Impact
