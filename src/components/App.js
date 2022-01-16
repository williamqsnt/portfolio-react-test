import styled from '@emotion/styled'
import '../App.css';
import { Body, About, Skills, Projects, Blog, Contact } from '../components'
import logo from '../assets/icons/logo.png'
import Carousel from './Carousel'

function App() {

  const navigations = [
    { link : '#about', text : 'About'},
    { link : '#skills', text : 'Skills'},
    { link : '#projects', text : 'Projects'},
    { link : '#blog', text : 'Blog'},
    { link : '#contact', text : 'Contact'}
]


  return (

        <Wrapper>
          
    

          <Menus>
              <div className="navFixed">
                  <div className="Navigations">
                      <div className="Menu">
                          <a href="#body"><img src={logo} width='50' alt="logo" /></a>
                      </div>
                

                  <div className="Navbar">
                      <nav>
                          <ul>          
                              {navigations.map(({link, text})=>{
                                  return(
                                      <li>
                                          <a href={link}>{text}</a>
                                      </li>
                                  )
                              })}    
                          </ul>
                      </nav>
                  </div>
              </div>
              </div>
                 

          </Menus>

  
          <div className="Body" id="body">            
            <Body />
          </div>
           <div className="About" id="about">
             <About />
           </div>
           <div className="Skills" id="skills">
             <Skills />
           </div>
            <div className="Projects" id="projects">
              <Projects />
            </div>
            <div className="Blog" id="blog">
              <Blog />
            </div>
            <div className="Contact" id="contact">
              <Contact />
            </div>
        </Wrapper>
       

    
  );
}

export default App;


const Wrapper = styled.div`
  .Body{
    margin-top : 3em;
  }
  .About{
    margin-top : 2em;
  }
  .Skills{
    margin-top : 4em;
    margin-bottom : 3em;
  }
 
  .Contact{
    margin-top : 10em;
  }
`

const Menus = styled.div`
    
    .navFixed{
      top : 0px;
      position : fixed;
      width : 100%;
      background-color : white;
      box-shadow : 2px 2px 4px lightgrey;
      z-index : 1000;
    }
    .Navigations{
        display : flex;
        justify-content : space-around;
     
    }
    .Menu{
        display : flex;
        align-items : center;
    }
    .Menu span{
        color : black;
        font-style : unset;
        font-weight : lighter;
    }
    .Navbar{
        display : flex;
    }
    ul{
        display : flex;
    }
    li{
        margin : 1em;
        list-style-type : none;    
        -webkit-transition: all 0.2s ease; 
        -moz-transition: all 0.2s ease; 
        -ms-transition: all 0.2s ease; 
        -o-transition: all 0.2s ease;
        transition: all 0.2s ease;
        color : rgb(251,36, 18);
    }
    a{ 
      color : #FF5151;
        text-decoration : none;   
    }
    li:hover{
        -webkit-transform:scale(1.25); 
        -moz-transform:scale(1.25); 
        -ms-transform:scale(1.25);
        -o-transform:scale(1.25);
        transform:scale(1.25);


    }

    @media (max-width : 600px){
        .Navbar{
            display : none;
        }
        .hamburgerMenu{
          visibility : visible;
        }
    }

`
