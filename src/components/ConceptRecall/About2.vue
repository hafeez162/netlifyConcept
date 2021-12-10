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
                                    data-aos-duration="600">Mobile Application</h1>
                            <p data-aos="fade-left" data-aos-easing="linear"
                                    data-aos-duration="600">Our dedicated team of web designers and developers makes your website according to your instructions and expectations. The layouts, coding and technicalities has never been a hurdle for us.</p>
                            <div class="newletter">
                                <img class="roll" src="../../assets/images/roll.png" />
                            </div>
                            <img class="c-shap" src="../../assets/images/angle.png" />
                          
                        </div>
                        <div class="col">
                            <div class="hero-img">
                                <img src="../../assets/images/about.png" />
                                <img class="roll" src="../../assets/images/roll.png"  data-aos="fade-down" 
                        data-aos-duration="800"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /hero-section -->
           <Clients />
            <Values2 />
            <OurTestimonials />
            <Footer2 />
    </div>
</template>


<script>
import Header from '../ConceptRecall/Header.vue';
import Values2 from './Values2.vue';
import Clients from '../ConceptRecall/Clients2.vue';
import OurTestimonials from './OurTestimonials.vue';
import Footer2 from './Footer2.vue';

export default {
    name:'About2',
    components: {Header,Values2,
        OurTestimonials,Footer2,Clients},
    mounted() {
    this.$anime(/* ... animate something ... */)
  },

    data() {
        return {
            slickOptions: {
                slidesToShow:4,
                 infinite: true,
                        accessibility: true,
                        adaptiveHeight: false,
                        arrows: true,
                        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-arrow-left"></i></button>',
                        nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-arrow-right"></i></button>',
                        dots: true,
                        draggable: true,
                        edgeFriction: 0.30,
                        swipe: true
                // Any other options that can be got from plugin documentation
            },
        };
    },

   
    methods: {
        // next() {
        //     this.$refs.slick.next();
        // },

        // prev() {
        //     this.$refs.slick.prev();
        // },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
    }, 
}
</script>