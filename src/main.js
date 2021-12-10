import Vue from 'vue'
import App from './App.vue'
// import Vue from 'vue'
import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "owl.carousel";
import VueRouter  from  'vue-router'
import Home from  './components/ConceptRecall/Home.vue';
import About2 from  './components/ConceptRecall/About2.vue'; 
// import   projectpage   from './components/projectPage.vue';
import  Ourproject from './components/ConceptRecall/ProjectPage2.vue';
import Services    from  './components/ConceptRecall/ServicePage2.vue';
import Clientspage    from  './components/ConceptRecall/Clientspage2.vue';
import Contact from './components/ConceptRecall/Contact2.vue'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
import VueAnime from 'vue-animejs';
import AOS from 'aos'
import 'aos/dist/aos.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
import Particles from "particles.vue";
Vue.use(Particles);

Vue.use(VueAnime)
Vue.use(SequentialEntrance);





Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes=[

{ 
  path:'/',
  component:Home
},
{
  path:'/About',
  component:About2
},
{
  path:'/projects',
  component:Ourproject
},
{
  path:'/Services',
  component:Services
},
{
  path:'/Clients',
  component:Clientspage
},
{
  path:'/Contact',
  component:Contact
},
// {

//   path:'/test',
//   component:test

// }
]

const  router=new VueRouter({

  routes,
  mode:'history'

}
)




Vue.config.productionTip = false


new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App),
}).$mount('#app')

