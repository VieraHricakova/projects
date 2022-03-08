import { createStore } from 'vuex'

export default createStore({
  state: {
    dataset:[
      {name: 'Viera Hricáková',
       position: 'Frontent Javascript developer candidate', 
       aboutMeDescription: 'A mother who decided to make a career U-turn during her maternity leave. I have discovered that the IT sector is the right thing for me. I benefit from my logical thinking and a passion for solving puzzles and whatever I lack in my IT knowledge will catch up thanks to a passion for lifelong learning, tireless patience and a never-give-up attitude. ',
       itProject: 'CV aplication',
       projectDescription: 'This simple application demonstrates routing and Vuex in the Vue framework. The basic navigation bar allows you to select from two pages. Click to select the "show CV" page. The store contains biographical data of one individual that is displayed on the "Show CV" page.',
       educationName: 'JavaScript from scratch (280 hours),Software Development Academy',
       educationAddress: 'aleja Zwycięstwa 96/98, 81-451 Gdynia, Poland',
       educationDescription: ' ',
       dateOfEducationBeginning:'June 2021',
       dateOfEducationEnding: 'March 2022',
       workExperienceName: 'Slovak National Gallery in Bratislava',
       workExperienceAddress: 'Riečna 1, 813 15 Bratislava',
       workExperienceDescription: 'curator of architecture',
       workExperienceBeginning: 'September 2011',
       workExperienceEnding: 'present',
       skills: 'HTML, CSS, JavaCript, Vue',
       languages: 'english language (A1)',
       city: 'Bratislava',
       email: 'viera.hricakova@gmail.com',
       phone: '+421910927518',
       socialNet: '',
       github: 'VieraHricakova'
       }
   ]
  },
  getters: {
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
  }
})
