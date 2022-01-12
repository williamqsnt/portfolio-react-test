import styled from '@emotion/styled'
import '../App.css';
import { Body, About, Skills, Projects, Blog, Contact } from '../components'



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
                          <h2>myPortfolio<span>(&nbsp;)</span></h2>
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


          <div className="Body">
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
    margin-top : 10em;
  }
  .Skills{
    margin-top : 4em;
  }
  .Projects{
    margin-top : 10em;
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
      z-index : 1000;
    }
    .Navigations{
        display : flex;
        justify-content : space-around;
        box-shadow : 2px 2px 5px rgb(230, 230, 230);
    }
    .Menu{
        display : flex;
        align-items : center;
        color : rgb(58,143,211);
        font-style : italic;
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
    }
    a{ 
        color : black;
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
