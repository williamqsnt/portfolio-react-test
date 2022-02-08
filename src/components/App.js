import styled from '@emotion/styled'

import { logo, github, linkedin, pp, bg, Carousel} from './index'
import Skill from './Skills'
import Project from './Projects'
import Contact from './Contact'
import mail from '../assets/icons/mail.svg'
import arrow from '../assets/icons/arrow.svg'
import mailcolor from '../assets/images/mailcolor.svg'
import { BrowserView, MobileView} from 'react-device-detect'
import Blog from './Blog'

function App() {



  return (
    <div className="alllpage">


    <BrowserView>
    <All>
        <Body>
            <div className='allPage' id="home">
                <a className='rs' href="https://www.linkedin.com/in/william-quesnot/" target='blank' rel='noreferrer'>
                  <img src={linkedin}  style={{position : 'fixed', bottom : '110px', left : '15px'}}  alt="linkedin" width='70px' />
                </a>
                <a className='rs' href="https://github.com/williamqsnt" target='blank' rel='noreferrer'> 
                  <img src={github} style={{position : 'fixed', bottom : '40px', left : '20px'}} alt="github" width="60px" />
                </a>
               
                  
                <div className='fixed' style={{zIndex : '10000'}}>
                      <div className='menus'>
                          <a href="#home"><img src={logo} width='60px' alt="logo" /></a>
                      <div>
                          <nav>
                              <ul>
                                  <a href="#about"><li>About</li></a>
                                  <a href="#skills"><li>Skills</li></a>
                                  <a href="#projects"><li>Projects</li></a>
                                  <a href="#blog"><li>Blog</li></a>
                                  <a href="#contact"><li>Contact</li></a>
                              </ul>
                          </nav>
                      </div>
                    </div>
                </div>
                
              
                <div className='body'>
                    <div className='left'>
                      <div className='title'>
                         <h2 style={{color : '#49F2CA', fontSize : '2.5em', fontFamily : 'monospace', marginBottom : '1em'}}>I'm William,</h2>
                         <h1>FRONT END</h1>
                         <h2>DEVELOPER</h2>
    
                    </div>
                </div>
                
                <div className='right'>
                    <img src={bg} alt="background" width="200px" />
                    <h2>I offer my services to develop the <strong style={{color : '#49F2CA'}}>interface</strong>, the <strong style={{color : '#49F2CA'}}>design </strong><br/> and <strong style={{color : '#49F2CA'}}>SEO</strong>  of your company - brand. I am available for short projects.</h2>
                   
                    <a href="mailto:quesnot.william@hotmail.com"><img src={arrow} alt="arrow" width='30px'/>quesnot.william@hotmail.com<img src={mail} alt="mail" width='35px'/></a>
                </div>
                </div>
            </div>

          </Body>

          <About id="about">
              <div className='allPage'>  
                <div className='body'>
                  <div className='left'>
                    <h2 style={{ color : '#49F2CA'}}>ABOUT</h2>
                    <img src={pp} alt="profil" />
                  </div>
                  <div className='right'>
                    <p style={{fontWeight : "400", color : 'lightgrey'}}>My name is <strong style={{color : '#49F2CA'}}> William Quesnot</strong>. I did a scientific baccalaureate. Then, I did a Google distance training in digital marketing and I obtained the diploma <strong style={{color : '#49F2CA'}}> "The fundamentals of Digital Marketing"</strong>.<br/><br/>
                    Being passionate about new technologies and computers, I learned JavaScript programming language on my own, often used in interactive web pages. Subsequently I combined it with <strong style={{color : '#49F2CA'}}>HTML and CSS </strong> technologies to do <strong style={{color : '#49F2CA'}}>web development</strong>. <br/>I am currently in computer engineering school to perfect my knowledge and skills.<br/><br/>
                    I am motivated and curious to learn new things. I want to develop my knowledge and skills in order to put them into practice in various projects and accomplish my professional goals.
                    </p>
                  </div>
                </div>
                
                <div className='bottom' style={{marginTop : '7em'}}>
                    <h2 style={{ color : '#49F2CA', fontSize : '3em', textAlign : 'center', marginBottom :'2em'}}>How I proceed</h2>
                    <Carousel />
                    
                </div>
              </div>
          </About>

          <Skills id="skills">
            <div className='allPage'>
                <div className='body'>   
                   <h2 style={{ color :'#49F2CA', fontSize : '5em', marginBottom : '0.5em'}}>SKILLS</h2>
                      <Skill /> 
                </div>
            </div>
          </Skills>

          <Projects id="projects">
              <div className="allPage">
                  <div className="body">
                      <Project />
                  </div>
              </div>
          </Projects>


          <Blogs id="blog">
          <div className="allPage">
                  <div className="body">
                  <h2 style={{ color :'#49F2CA', fontSize : '5em', marginBottom : '0.5em'}}>BLOG</h2>
                      <Blog />
                  </div>
              </div>
          </Blogs>


          <Contacts id="contact">
            <div className='allPage'>
              <div className='body'>
                <h2 style={{ color :'#49F2CA', fontSize : '5em', marginBottom : '0.2em'}}>CONTACT ME</h2>
                  <Contact />
              </div>
            </div>


          </Contacts>
         
    <footer style={{height : '25vh', width : '100%', borderTop : '1px solid #40F2CA', backgroundColor : '#0A192F'}}>
      <div style={{width : '100%', height : '100%', display : 'flex', alignItems : 'center', justifyContent : 'space-around'}}>

          <div style={{display : 'flex'}} >
          <a href="#about"><li>About</li></a>
          <a href="#skills"><li>Skills</li></a>
          <a href="#projects"><li>Projects</li></a>
          <a href="#blog"><li>Blog</li></a>

          </div>
     
          <div>
          <a href="mailto:quesnot.william@hotmail.com"  style={{display : 'flex', alignItems : 'center', justifyContent : 'center'}}><img src={mailcolor} alt="mail" width='40px' style={{marginRight : '0.5em'}}/>quesnot.william@hotmail.com</a>
          </div>
        
      </div>    
    

      <p style={{backgroundColor : '#0A192F', textAlign : 'center', padding : '0 0 2em 0'}}> &copy; William Quesnot | 2022</p>

      
    </footer>
      
    </All>
    </BrowserView>



    <MobileView>
      <MobileMenus>

     
          <div style={{display : 'flex', justifyContent : 'center'}}>
             <img src={logo} style={{padding : '1em'}} alt="logo" width='50px' height="50px"/>
          </div>
           

    
        <div className='body' style={{marginTop : '3em'}}>
                      <div className='title'>
                         <h2 style={{color : '#49F2CA', fontWeight : '400', fontSize : '2.5em', fontFamily : 'monospace'}}>I'm William</h2>
                         <h1 style={{color : 'white', fontSize : '4em', fontWeight : 'bold'}}>FRONT END</h1>
                         <h2 style={{color : 'white', fontSize : '3em', fontWeight : 'lighter'}}>DEVELOPER</h2>
                      </div>

                      <div style={{textAlign : 'center', marginTop : '2em'}}>
                        <img src={bg} alt="bg" width="200px" />
                        <h2 style={{ color : 'lightgrey', fontSize : '1.2em', textAlign : 'center', marginTop : '1em' }}>I offer my services to develop the <strong style={{color : '#49F2CA'}}>interface</strong>, the <strong style={{color : '#49F2CA'}}>design </strong> and <strong style={{color : '#49F2CA'}}>SEO</strong>  of your company - brand. I am available for short projects.</h2>
                      </div>
                      <a style={{textDecoration : 'none', marginTop : '1em', color : '#49F2CA', border : '1px solid #49F2CA', padding : '0.5em 2em' }} href="mailto:quesnot.william@hotmail.com">quesnot.william@hotmail.com</a>
                
        </div>

        <About>
            <h2 style={{color : '#49F2CA', textAlign : 'center', fontSize : '4em', marginTop : '2em'}}>ABOUT</h2>
            <p style={{fontWeight : "400", color : 'lightgrey', textAlign : 'justify', margin : '1.5em'}}>My name is <strong style={{color : '#49F2CA'}}> William Quesnot</strong>. I did a scientific baccalaureate. Then, I did a Google distance training in digital marketing and I obtained the diploma <strong style={{color : '#49F2CA'}}> "The fundamentals of Digital Marketing"</strong>.<br/><br/>
                    Being passionate about new technologies and computers, I learned JavaScript programming language on my own, often used in interactive web pages. Subsequently I combined it with <strong style={{color : '#49F2CA'}}>HTML and CSS </strong> technologies to do <strong style={{color : '#49F2CA'}}>web development</strong>. <br/>I am currently in computer engineering school to perfect my knowledge and skills.<br/><br/>
                    I am motivated and curious to learn new things. I want to develop my knowledge and skills in order to put them into practice in various projects and accomplish my professional goals.
            </p>
            <h2 style={{color : '#49F2CA', textAlign : 'center', fontSize : '2em', margin : '2em'}}>HOW I PROCEED</h2>
            <Carousel />
        </About>

        <Skills>
          
        </Skills>

        <Project>
          <Projects />
        </Project>

        <Blogs>
        <h2 style={{color : '#49F2CA', textAlign : 'center', fontSize : '4em', marginBottom : '1em'}}>BLOG</h2>
          <Blog />
        </Blogs>

        <Contacts>
        <h2 style={{color : '#49F2CA', textAlign : 'center', fontSize : '4em', marginTop : '2em'}}>CONTACT</h2>

          <Contact />
        </Contacts>


      <footer style={{ marginTop : '15em',height : '25vh', width : '100%', borderTop : '1px solid #49F2CA', backgroundColor : '#0A192F'}}>
      <div style={{width : '100%', height : '100%', display : 'flex',flexDirection : 'column'  ,alignItems : 'center', justifyContent : 'space-around'}}>

          <div style={{display : 'flex'}} >
          <a href="#about" style={{textDecoration : 'none', color : '#49F2CA'}}><li style={{listStyle : 'none', margin : '0.5em'}}>About</li></a>
          <a href="#skills" style={{textDecoration : 'none', color : '#49F2CA'}}><li style={{listStyle : 'none', margin : '0.5em'}}>Skills</li></a>
          <a href="#projects" style={{textDecoration : 'none', color : '#49F2CA'}}><li style={{listStyle : 'none', margin : '0.5em'}}>Projects</li></a>
          <a href="#blog" style={{textDecoration : 'none', color : '#49F2CA'}}><li  style={{listStyle : 'none', margin : '0.5em'}}>Blog</li></a>

          </div>
     
          <div>
          <a href="mailto:quesnot.william@hotmail.com"  style={{display : 'flex', alignItems : 'center', justifyContent : 'center', textDecoration : 'none', color : '#49F2CA'}}><img src={mailcolor} alt="mail" width='40px' style={{marginRight : '0.5em'}}/>quesnot.william@hotmail.com</a>
          </div>
        
      </div>    
    

      <p style={{backgroundColor : '#0A192F', textAlign : 'center',padding : '0 0 2em 0', color : '#49F2CA', marginTop : '2em'}}> &copy; William Quesnot | 2022</p>

      
    </footer>


      </MobileMenus>
    </MobileView>
    </div>
  );
}

export default App;


const MobileMenus = styled.div`
  *{
    padding : 0;
    margin : 0;
  }
    .fixed{
      position : fixed;
      width : 100%;
    }
    .menus{
        display : flex;
        justify-content : space-between;
        margin : 0.5em;
        
        button{
          border : none;
          background : transparent;
          font-size : 1.5em;
          color : #49F2CA;
        }
    }

    .body{
      display : flex;
      align-items : center;
      justify-content : center;
      height : 70vh;
      flex-direction : column;
      
      .title{
        margin : unset;
        padding : unset;
      }
    }

`




const Blogs = styled.div`
.allPage{
  background-color : #0A192F;
  width : 100%;
  height : 80vh;
  display : flex;
  align-items : center;
  flex-direction : column;
  color : white;
  
  .body{
    display : flex;
    align-items : center;
    flex-direction : column;
    justify-content : center;
  }
`

const Contacts = styled.div`


.allPage{
  background-color : #0A192F;
  width : 100%;
  height : 100vh;
  display : flex;
  align-items : center;
  flex-direction : column;
  color : white;
  
  .body{
    display : flex;
    align-items : center;
    flex-direction : column;
    justify-content : center;

   
  }

`


const Projects = styled.div`
.allPage{
  background-color : #0A192F;
  width : 100%;
  height : 100vh;
  display : flex;
  align-items : center;
  flex-direction : column;
  color : white;
  
  .body{
    display : flex;
    align-items : center;
    flex-direction : column;
    justify-content : center;
  }
`

const Skills = styled.div`
  .allPage{
    margin-top : 20em;
    background-color : #0A192F;
    width : 100%;
    height : 100vh;
    display : flex;
    align-items : center;
    flex-direction : column;
    color : white;
  
  .body{
    display : flex;
    align-items : center;
    flex-direction : column;
    justify-content : center;
  }

  .right{
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction: column;
    width : 70%;
} 

}

`



const About = styled.div`



.allPage{

  background-color : #0A192F;
  width : 100%;
  height : 100vh;
  display : flex;
  flex-direction : column;
  color : white;
  
  .body{
    display : flex;
    align-items : center;
    justify-content : center;
    margin : 0 10em;


    .left{

      display : flex;
      align-items : center;
      justify-content : center;
      flex-direction: column;
      width : 50%;

      h2{
        font-size :5em;
      }
      img{
        margin-top : 3em;
        width : 300px;
        border-radius : 30px;
        filter: grayscale(80%);
      }


    }

    .right{
      width : 50%;

  
    }

  }

}


`


const All = styled.div`
*{
  padding : 0;
  margin : 0
}



footer{
  color : #49F2CA;
  
  a{
    text-decoration : none;
    color : #49F2CA;
  }

  li{
    list-style-type : none;
    margin : 1em 0.5em;
  }
}
`

const Body = styled.div`


   
    .allPage{
      background-color : #0A192F;
      width : 100%;
      height : 100vh;
      display : flex;
      flex-direction : column;

      .fixed{
        position : fixed;
        
        width : 100%;
        background-color :#0A192F;
        opacity : 0.9;
      }
      .menus{
        display : flex;
        align-items : center;
        justify-content : space-around;
        color : #49F2CA;
        padding : 0.2em;


        a{
          text-decoration : none;
          color : #49F2CA;

          :hover{
            border-bottom : 1px solid #49F2CA;
            transition : 0.5s;
          }
        }

        ul{
          display : flex;

          li{
            list-style-type : none;
            padding : 1em;
            font-family :"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
            
          }
        }
      }

      .body{
        height : 100vh;
        display : flex;
        
        .left{
          display : flex;
          align-items : center;
          color : lightgrey;
          justify-content : center;
          width : 50%;

          .rsx{
            display : flex;
            align-items : center;
            margin : 1em;
          }

          .title{
            display : flex;
            flex-direction : column;
      

            a{
              padding : 1em;
              margin-top : 1em;
              width : 7em;
              color : lightgrey;
              text-decoration : none;
              text-align : center;
              border : 2px solid #49F2CA;
              border-radius : 60px;
            }
            
            a:hover{
              background-color : #49F2CA;
              transition : 1s;
              color : #0A192F;
            }

            h1{
              font-size : 5em;
            }
            h2{
              font-size : 3em;
              font-weight : lighter;
            }
          }
        }
        .right{
          width : 50%;
          display : flex;
          align-items : center;
          justify-content : center;
          flex-direction : column;

          a{
            text-decoration : none;
            border : 2px solid #49F2CA;
     
            padding : 1em 1.5em 1em 1.5em;
            color : #49F2CA;
            display : flex;
            align-items : center; 
            transition : 0.5s;
            justify-content : space-around;
            
      
            img{
              margin-right : 0.2em;
              margin-left : 0.2em;
            }
          }

          a:hover{
            box-shadow: inset 400px 0 0 0 #49F2CA;
            color :  #0A192F;
          }
       


          h2{
            color : lightgrey;
            font-weight : 400;
            padding : 1em;
            text-align : center;
          }
        }

      }

    }

  

`


