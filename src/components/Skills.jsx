import styled from '@emotion/styled'
import html from '../assets/icons/html.svg'
import css from '../assets/icons/css.svg'
import php from '../assets/icons/php.svg'
import js from '../assets/icons/js.svg'
import reacticon from '../assets/icons/reacticon.png'
import mysql from '../assets/icons/mysql.svg'
import nodejs from '../assets/icons/nodejs.svg'
import figma from '../assets/images/figma.png'
import notion from '../assets/images/notion.png'
import sql from '../assets/images/sql.png'
import whimsical from '../assets/images/whimsical.png'
import canva from '../assets/images/canva.png'
import python from '../assets/icons/python.png'
import django from '../assets/icons/django.png'
import mongodb from '../assets/icons/mongodb.png'

const Skills = () => {

    const Frontend = [
        { programmation : 'HTML', icons : html, width : '30px'},
        { programmation : 'CSS', icons : css, width : '30px'},
        { programmation : 'Javascript', icons : js, width : '30px'},
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

    const creativeTools = [

        { tools : 'Canva', icons : canva, width : '30px'},
        { tools : 'Figma', icons : figma, width : '30px'},
        { tools : 'Whimsical', icons : whimsical, width : '30px'},
        { tools : 'Notion.so', icons : notion, width : '30px'}
    ]

    const SkillsComplementary = [
        { complementary : 'Digital marketing'},
        { complementary : 'SEO'},
        { complementary : 'SEA'},
        { complementary : 'Communication'}
    ]



    return(
        <TextContent>
            <div className="titleSkills">
                 <h2>Skills</h2>
            </div>
           
           <div className="AllPage">

           
            <div className="MySkills">

            <div className="Line"></div>
            <div className="Line"></div>
            <div className="Line"></div>
            <div className="Line"></div>
            
                <div className="Skills-a">
                    <div className="marginbook">
                    <div className="Skillss">
                        <div className="title">
                            <h2>Front-End</h2>
                        </div>
                        
                        <ul>
                            {Frontend.map(({programmation, icons, width})=> {
                                return(
                                    <li><img src={icons} width={width} alt="programmation"/>{programmation}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="Skillss">
                        <div className="title">
                            <h2>Back-End</h2>
                        </div>
                        
                            <ul>
                                {Backend.map(({programmation, icons, width})=> {
                                return(
                                    <li><img src={icons} width={width} alt="another programmation" />{programmation}</li>
                                )
                            })}
                            </ul>
                        </div>
                        <div className="Skillss">
                        <div className="title">
                            <h2>Database</h2>
                        </div>
                        
                            <ul>
                                {Database.map(({programmation, icons, width})=> {
                                return(
                                    <li><img src={icons} width={width} alt="another programmation" />{programmation}</li>
                                )
                            })}
                            </ul>
                        </div>
                    </div>
                    
                    </div>
                   
                
               
                <div className="Skills-b">
                    <div className="marginbook">
                    <div className="Skillss">
                        <h2>Complementary</h2>
                        <ul>
                            {SkillsComplementary.map(({complementary})=> {
                                return(
                                    <li>{complementary}</li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="Skillss">
                        <div className="title">
                            <h2>Creative Tools</h2>
                        </div>
                        
                        <ul>
                            {creativeTools.map(({tools, icons, width})=> {
                                return(
                                    <li><img src={icons} width={width} alt="tools"/>{tools}</li>
                                )
                            })}
                        </ul>
                    </div>
                    </div>
                    

                   
                    
                </div>
                            
                
            <div className="Line"></div>
            <div className="Line"></div>
            <div className="Line"></div>
            <div className="Line"></div>
            
            </div>

            </div>
        </TextContent>
    )
}

export default Skills 

const TextContent = styled.div`
    .AllPage{
        display : flex;
        align-items : center;
        justify-content : center;
        padding-bottom : 5em;
    }
    .titleSkills {
        display : flex;
        align-item : center;
        justify-content : center;
    }
    .titleSkills h2{
        color : #FF5151;
        font-size : 4em;
        letter-spacing : 5px;
    }
    .MySkills{
        -moz-user-select: none; 
        -webkit-user-select: none; 
        -ms-user-select: none;
        user-select: none;
        margin-top : 4em;
        display : flex;
        justify-content : center;
        background-color : rgba(99, 82, 61, 0.753);
        border-left : 1px solid black;
        border-right : 1px solid black;
        height : 100%;
        width : 68%;
    }
    .MySkills h2{
        font-weight : 300;
    }
    .Skills-a{
        background-color : white;
        display : flex;
        flex-direction : column;
        width : 40%;
        box-shadow : 0 0 1em lightgrey;
        border-top-right-radius : 20px;
        border-bottom-right-radius: 20px;
    }
    .Skills-b{
        background-color : white;
        display : flex;
        align-item : center;
        justify-content : center;
        flex-direction : column;
        width : 40%;
        box-shadow : 0 0 1em lightgrey;
        border-top-left-radius: 20px;
        border-bottom-left-radius : 20px;
    }

    .Skillss{
        display : flex;
        flex-direction : column;
        align-item : center;
    
    }
    .Skillss h2{
        margin : unset;
        margin-top : 2em;
        text-align : center;
        color : rgba(99, 82, 61, 0.753);
    }
    .Skillss ul{
        margin : unset;
        margin-top : 1em;
        margin-bottom : 1em;
        display : flex;
        align-item : center;
        justify-content : center;
        flex-wrap : wrap;
        padding : unset;
        margin-left : 2em;
        margin-right : 2em;
    }
    .Skillss li{
        display : flex;
        align-items : center;
        margin : 0.45em;
        display : flex;
        align-item : center;
        list-style-type : none;
        color : #E74C3C;
        background-color : #f5f5f5;
        padding : 0.25em 1em 0.25em 1em;
        box-shadow : 0.3em 0em 0.2em lightgrey;
    }
    .Skillss li img{
        margin-right : 0.4em;
    }
    .Skillss li:hover{
        transform : scale(1.25);
        transition : 0.2s;
    }
    .title{
        text-align : center;
        margin-top : 0em;
    }
    .Line{
        width : 1.25%;
        box-shadow : 0 0 0.3em lightgrey;
        background-color : white;
    }
    .empty{
        margin-top : 5em;
    }
    .marginbook{
        margin-bottom : 1em;
    }
    @media (min-width : 1360px){
        .MySkills{
            width : 60%;
        }
    }
    @media (min-width : 1800px){
        .MySkills{
            width : 50%;
        }
    }
    @media (max-width : 1190px){
        .MySkills{
            background-color : unset;
            flex-direction : column;
            width : 90%;
            border : unset;
            border-radius
        }
        .Skills-a{
            width : 100%;
            margin-bottom : 2em;
            border-top-right-radius : unset;
            border-bottom-right-radius: unset;
            border-radius : 20px;
        }
        .Skills-b{
            width : 100%;
            border-top-left-radius: unset;
            border-bottom-left-radius : unset; 
            border-radius : 20px;
        }
        .Skillss ul{

            margin-bottom : 2em;
        }
    }
`
