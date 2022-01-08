import styled from '@emotion/styled'



const Skills = () => {

    const Frontend = [
        { programmation : 'HTML'},
        { programmation : 'PHP'},
        { programmation : 'CSS'},
        { programmation : 'Javascript'},
        { programmation : 'React'},
    ]
    
    const Backend = [
        { programmation : 'MYSQL'},
        { programmation : 'NodeJS'},
        { programmation : 'ExpressJS'},
    ]

    const creativeTools = [
        { tools : 'iMovie'},
        { tools : 'Sony Vegas Pro',},
        { tools : 'Adobe Premiere Pro'},
        { tools : 'Canva'},
        { tools : 'Figma'},
        { tools : 'Whimsical'},
        { tools : 'Notion.so'}
    ]

    const SkillsComplementary = [
        { complementary : 'Digital marketing'},
        { complementary : 'SEO'},
        { complementary : 'SEA'},
        { complementary : 'Communication'}
    ]

    const Languages = [
        { language : 'French : Fluent'},
        { language : 'English : B1-B2'},
        { language : 'Spanish : A2'}
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
                    <div className="title">
                        <h2>Programmations</h2>
                    </div>
                    <div className="Skillss">
                        <h2>Front-End</h2>
                        <ul>
                            {Frontend.map(({programmation})=> {
                                return(
                                    <li>{programmation}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="Skillss">
                        <h2>Back-End</h2>
                            <ul>
                                {Backend.map(({programmation})=> {
                                return(
                                    <li>{programmation}</li>
                                )
                            })}
                            </ul>
                        </div>
                    </div>
                
               
                <div className="Skills-b">
                    <div className="title">
                        <h2>Others</h2>
                    </div>
                        
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
                        <h2>Creative Tools</h2>
                        <ul>
                            {creativeTools.map(({tools})=> {
                                return(
                                    <li>{tools}</li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="Skillss">
                        <h2>Languages</h2>
                        <ul>
                            {Languages.map(({language})=> {
                                return(
                                    <li>{language}</li>
                                )
                            })}
                        </ul>
                        <div class="empty"></div>
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
    }
    .titleSkills {
        display : flex;
        align-item : center;
        justify-content : center;
    }
    .titleSkills h2{
        color : rgb(58,143,211);
        padding-bottom : 1em;
        border-bottom : 2px solid rgb(58,143,211);
    }
    .MySkills{
        display : flex;
        justify-content : center;
        background-color : rgba(99, 82, 61, 0.753);
        border-left : 1px solid black;
        border-right : 1px solid black;
        height : 100%;
        width : 75%;
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
        margin-top : 1em;
    }
    .Skillss h2{
        text-align : center;
    }
    .Skillss ul{
        display : flex;
        align-item : center;
        justify-content : center;
        flex-wrap : wrap;
        margin-right : 2em;
        margin-left : 2em;
    }
    .Skillss li{
        margin : 0.3em;
        display : flex;
        align-item : center;
        justify-content : center;
        list-style-type : none;
        border-radius : 50px;
        color : white;
        background-color : rgb(58,143,211);
        padding : 0.5em 1em 0.5em 1em;
        box-shadow : 0.3em 0em 0.2em lightgrey;
    }
    .Skillss li:hover{
        background-color : white;
        box-shadow : 0 0 0.7em grey;
        color : black;
    }
    .title{
        text-align : center;
        margin-top : 0em;
        font-size : 1.5em;
    }
    .Line{
        width : 1.25%;
        box-shadow : 0 0 0.3em;
        background-color : white;
    }
    .empty{
        margin-top : 5em;
    }
`
