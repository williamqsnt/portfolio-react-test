import { html, css, php, js, reacticon, mysql, nodejs, figma, sql, whimsical, canva, python, django, mongodb, netlify, vscode, github } from './index'

import styled from '@emotion/styled'
import { useState } from 'react'


const Skills = () => {

    const Frontend = [
        { programmation : 'HTML', icons : html, width : '30px'},
        { programmation : 'CSS', icons : css, width : '30px'},
        { programmation : 'JS', icons : js, width : '30px'},
        { programmation : 'React', icons : reacticon, width : '30px'},
    ] 
    const Backend = [
        { programmation : 'Nodejs', icons : nodejs, width : '35px'},
        { programmation : 'PHP', icons : php, width : '35px'},
        { programmation : 'Python', icons : python, width : '30px'},
        { programmation : 'Django', icons : django, width : '35px'},
    ]
    const Database = [
        { programmation : 'SQL', icons : sql, width : '30px'},
        { programmation : 'MySQL', icons : mysql, width: '35px'},
        { programmation : 'Mongodb', icons : mongodb, width : '35px'}
    ]
    const DevTools = [
        {programmation : 'VSCode', icons : vscode, width : '35px'},
        {programmation : 'Github', icons : github, width: '35px'},
        {programmation : 'Netlify', icons : netlify, width: '35px'}
    ]
    const creativeTools = [
        { tools : 'Canva', icons : canva, width : '30px'},
        { tools : 'Figma', icons : figma, width : '30px'},
        { tools : 'Whimsical', icons : whimsical, width : '30px'},
    ]
    const SkillsComplementary = [
        { complementary : 'SEO'},
        { complementary : 'SEA'},
        { complementary : 'SMO'},
        { complementary : 'SEM'},
     
    ]


    const [isSkills, setIsSkills] = useState(true)


    return isSkills ? (
        <Container>


            <div className='allProg'>

            <div className='btn' style={{display : 'flex', alignItems : 'center', justifyContent : 'center', flexDirection : 'column'}}>
                <button style={{backgroundColor : '#49F2CA', color : '#0A192F'}}>Main Skills</button>
                <button onClick={()=>{ setIsSkills(false)}}>Complementary Skills</button>
            </div>

            <div className='programming'>

                <h2>Front End</h2>
            
                {Frontend.map(({programmation, icons, width})=>{
                    return(
                        <div className='frontend'>
                            <img src={icons} alt="programmations" width={width} />
                            <h3>{programmation}</h3>
                    

                        </div>
                    )
                })}
            </div>

            <div className='programming'>

                <h2>Back End</h2>
            
                {Backend.map(({programmation, icons, width})=>{
                    return(
                        <div className='frontend'>
                            <img src={icons} alt="programmations" width={width} />
                            <h3>{programmation}</h3>
                    

                        </div>
                    )
                })}
            </div>

            <div className='programming'>

                <h2>Database</h2>

                    {Database.map(({programmation, icons, width})=>{
                        return(
                            <div className='frontend'>
                                <img src={icons} alt="programmations" width={width} />
                                <h3>{programmation}</h3>
                        

                            </div>
                        )
                    })}
            </div>
                    
                    
            </div>

            <h2 style={{textAlign : 'center', margin : '1em', fontWeight : '400', color : 'lightgrey', fontFamily : 'monospace'}}>I am a front end web developer, specializing in <strong style={{color : '#49F2CA'}}> React.js</strong>. <br/>I have a good knowledge of <strong style={{color : '#49F2CA'}}>HTML, CSS and Javascript</strong> <br/> to build your most beautiful websites. </h2>
            


        </Container>
    ) : (
        <Container>

        <div className='allProg'>
        <div className='btn' style={{display : 'flex', alignItems : 'center', justifyContent : 'center', flexDirection : 'column'}}>
                <button onClick={()=>{ setIsSkills(true)}} >Main Skills</button>
                <button style={{backgroundColor : '#49F2CA', color : '#0A192F'}} onClick={()=>{ setIsSkills(false)}}>Complementary Skills</button>
            </div>

           
            <div className='programming'>

<h2>Developer <br/>Tools</h2>

{DevTools.map(({programmation, icons, width})=>{
    return(
        <div className='frontend'>
            <img src={icons} alt="programmations" width={width} />
            <h3>{programmation}</h3>
    

        </div>
    )
})}
</div>

<div className='programming'>

<h2>Creative <br/> Tools</h2>

{creativeTools.map(({tools, icons, width})=>{
    return(
        <div className='frontend'>
            <img src={icons} alt="programmations" width={width} />
            <h3>{tools}</h3>
    

        </div>
    )
})}
</div>

<div className='programming'>

<h2>Digital <br/> marketing</h2>

{SkillsComplementary.map(({complementary})=>{
    return(
        <div className='frontend'>       
            <h3>{complementary}</h3>
        </div>
    )
})}
</div>


        </div>

        <h2  style={{textAlign : 'center', margin : '1em', fontWeight : '400', color : 'lightgrey', fontFamily : 'monospace'}}><strong style={{color : '#49F2CA'}}>Digital marketing and SEO </strong> are skills that I master, <br/> not to be neglected, referencing and marketing strategies are important in a website. <br/> Be in the top of the ranking! </h2>

        

        </Container>
    )


}


export default Skills



const Container = styled.div`



.allProg{
    display : flex;
}


.btn button{
    width : 200px;
    padding : 1em;
    font-size : 1.2em;
    background : transparent;
    color :  #49F2CA;
    border : none;
    border: 1px solid #49F2CA;
    margin : 1em;
    font-family : monospace;
    cursor : pointer;
}
.programming{
    border : 2px solid #49F2CA;
    padding : 2em;
    border-radius : 10px;
    margin : 2em;

    h2{
        padding : 1em;
        text-align : center;
    }
    .frontend{
        display : flex;
        align-items : center;
        justify-content : space-between;
        margin : 1em;
        border-radius : 5px;


        h3{
            display : flex;
            align-items : center;
            justify-content : center;
        }
    }
}


`