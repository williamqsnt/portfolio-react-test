import styled from '@emotion/styled'
import '../App.css';
import { Header, Body, About, Skills, Projects, Contact } from '../components'



function App() {


  return (
        <Wrapper>
          <div className="Header">
            <Header/>
          </div>
          <div className="Body">
            <Body />
          </div>
           <div className="About">
             <About />
           </div>
           <div className="Skills">
             <Skills />
           </div>
            <div className="Projects">
              <Projects />
            </div>
            <div className="Contact">
              <Contact />
            </div>
        </Wrapper>
       

    
  );
}

export default App;


const Wrapper = styled.div`
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
