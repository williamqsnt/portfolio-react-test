import styled from '@emotion/styled'
import { Learn, Homely, Petqo, Jobsa } from './index'


const Projects = () => {

    const ManyProjects = [
        { title : 'Learn', background : Learn, alt : 'This is a project called Learn', url : 'https://williamqsnt.github.io/learn-dribbble/'},
        { title : 'Homely', background : Homely, alt : 'This is a project called Homely', url : 'https://williamqsnt.github.io/homely-dribbble/'},
        { title: 'Petqo', background : Petqo, alt : 'This is a project called Petqo', url : 'https://williamqsnt.github.io/petqo-dribbble/'},
        { title: 'Jobsa', background : Jobsa, alt : 'This is a project called Jobsa', url : 'https://williamqsnt.github.io/jobsa-dribble/'},
    ]

    return(
     <TextContent>

<h2 style={{ color :'#49F2CA', fontSize : '4.5em', marginBottom : '1em', textAlign : 'center', marginTop : '2em'}}>PROJECTS</h2>

                   <div className="AllProjects">
                   
                    <div className="eprojects">
                        {ManyProjects.map(({title,img, background, url}) => {
                          
                            return (
                                
                                    <a href={url} target="_blank" rel="noreferrer">

                                   
                                    <div className="eachProjects" style={{background: `url(${background})`, backgroundPosition : 'center', backgroundSize : '90%'}}>
                                        <a href={url} target='_blank' className="eachButton" rel="noreferrer">View</a>
                                    </div>
                                    </a>
                              
                                
                            )
                        })}
                    </div>
                </div>
         </TextContent>
    )



}

export default Projects



const TextContent = styled.div`


    
 
    .AllProjects{
        display : flex;
        justify-content : center;
        flex-direction : column;
        padding-bottom : 5em;
    }
    .eprojects{
        display : flex;
        justify-content : center;
        flex-wrap : wrap;
    }
    .eachProjects{
        display : flex;
        align-items : center;
        justify-content : center;
        width : 300px;
        margin : 1em;
        height : 300px;
        transition : 0.5s;
    }
    .eachProjects:hover{
        cursor : pointer;
        transform : scale(1.05);
        box-shadow : 0 0 0.5em grey;
    
    }
    .eachProjects a{
        text-decoration : none;
    }
    .eachButton{
        display : flex;
        align-items : center;
        justify-content : center;
        border : none;
        color : black;
        font-size : 1.5em;
        height : 40%;
        width : 40%;
        opacity : 0;

    }
    .eachButton:hover{
        display : flex;
        align-items : center;
        justify-content : center;
        background-color :   #0A192F;
        border-radius : 50%;
        height : 40%;
        width : 40%;
        animation : buttonZoom 0.5s forwards;
        opacity : 0.8;
        color : white;
        cursor : pointer;

        a{
            text-decoration : none;
        }
    }


    @keyframes buttonZoom{
        from{height : 40%; width : 40%; opacity : 0.8; color : white}
        to{height : 55%; width : 55%; opacity : 0.95; color : white}
    }
`
