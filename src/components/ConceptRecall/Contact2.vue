<template>
    <div>
        <Header />
        <!-- hero-section -->
            <section class="hero-section inner-banner">
                <div class="container">
                    <img class="dark-dot" src="../../assets/images/circle-shap.png" />
                    <div class="row">
                        <div class="col">
                            <h1 data-aos="fade-down" data-aos-easing="linear"
                                    data-aos-duration="600">OUR CONTACT</h1>
                            <p data-aos="fade-right" data-aos-easing="linear"
                                    data-aos-duration="600">Our diversified digital portfolio meet kind of your needs. The work will be done according to your instructions which will surely meet your level of satisfaction and expectations.</p>
                            <div class="newletter">
                                <img class="roll" src="../../assets/images/roll.png" />
                            </div>
                            <img class="c-shap" src="../../assets/images/angle.png" />
                        
                        </div>
                        <div class="col">
                            <div class="hero-img">
                                <img src="../../assets/images/Contact.png"  data-aos="zoom-in-right" 
                        data-aos-duration="600"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                       <!-- Project -->

<div class="contact">
    <div class="container">
        <img src="../../assets/images/u-angle.png" class="u-shap">
           <div class="title-style">
                        <span class="brand" data-aos="fade-down" data-aos-easing="linear"
                                    data-aos-duration="600">Contact Us</span>
                        <h2 class="brand-title" data-aos="fade-left" data-aos-easing="linear"
                                    data-aos-duration="600">How might we desig <br> demand for your business?</h2>
                        <p></p>
                    </div>
        <!-- <div class="middle-contain">
            <div class="head-six round"><h6 class="fw-bold t-uppercase">Contact Us</h6></div>
            <div class="head-two bord-bot contact-head"><h2 class="fw-bold text-uppercase mob-head">How might we desig demand for your business?</h2></div>
        </div> -->

       
        <div class="main_form">
            <form  data-aos="flip-up" data-aos-easing="linear"
                                    data-aos-duration="800">
                <div class="row">
                <div class="form-group col-md-6">
                    <label for="inputState"></label>
                    <select id="inputState" class="form-control multiple">
                      <option selected>Choose...</option>
                      <option>One</option>
                      <option>Two</option>
                      <option>Three</option>
                      <option>Four</option>
                      <option>Five</option>
                      <option>Six</option>
                      <option>Seven</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputEmail4"></label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Company Name">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4"></label>
                    <input type="text" class="form-control" id="inputPassword4" placeholder="First Name">
                  </div>
                    <div class="form-group col-md-6">
                      <label for="inputEmail4"></label>
                      <input type="email" class="form-control" id="inputEmail4" placeholder="Last Name">
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4"></label>
                      <input type="password" class="form-control" id="inputPassword4" placeholder="Phone">
                    </div>
                        <div class="form-group col-md-6">
                          <label for="inputEmail4"></label>
                          <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                        </div>
                        <div class="form-group col-md-12">
                        <textarea class="form-control" aria-label="With textarea" placeholder="Comment"></textarea>
                        </div>
                <div class="form-group col-md-12 text-right form-btn">
                <button type="submit" class="btn btn-primary form_btn" >Submit</button>
            </div>   
            </div>
            </form>
        </div>
    </div>
</div>

<div class="map">
    <div class="row">
        <div class="col-xs-1 col-sm-1 col-md-6 col-lg-6 col-xl-6">
            <div class="soical-links">
                        <h3 class="contact-head"  data-aos="fade-left" data-aos-easing="linear"
                                    data-aos-duration="600">Contact Us</h3>
                        <div class="icon-box" >
                            <div class="icon">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <div class="soical-content"   id="icon-box1">
                                <h4>Phone:</h4>
                                <a href="tel:+76512392345">+(765) 123 92345</a>
                            </div>
                        </div>
                        <div class="icon-box"  >
                            <div class="icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="soical-content">
                                <h4>Email:</h4>
                                <a href="mailto:info@conceptrecall.com">info@conceptrecall.com</a>
                            </div>
                        </div>
                        <div class="icon-box" >
                            <div class="icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="soical-content">
                                <h4>Location:</h4>
                                <p>3rd Floor, 1/6C, Sarah-e-Faisal Rd,Block-6 Nursery Karachi, Karachi City, Sindh,Pakistan</p>
                            </div>
                        </div>
                    </div>
        </div>
        <div class="col-xs-1 col-sm-1 col-md-6 col-lg-6 col-xl-6">
          <div class="map-img">
              <img src="../../assets/images/map.png" alt="">
          </div>
        </div>
        </div>
</div>
                               
    
    
    
    <Footer />
    
    </div>
</template>


<script>
import Header from './Header.vue';
import Footer from './Footer2.vue';

export default {
    name:'Contact',
    components:{
        Header,Footer
    }
}
</script>