
import styled from '@emotion/styled'
import Learn from '../assets/images/Learn.jpg'
import Homely from '../assets/images/Homely.jpg'
import Petqo from '../assets/images/Petqo.jpg'
import Jobsa from '../assets/images/Jobsa.jpg'



const Projects = () => {


    const ManyProjects = [
        {
            title : 'Learn',
            background : Learn,
            alt : 'This is a project called Learn',
            url : 'https://williamqsnt.github.io/learn-dribbble/'

        },
        {
            title : 'Homely',
            background : Homely,
            alt : 'This is a project called Homely',
            url : 'https://williamqsnt.github.io/homely-dribbble/'
        },
        {
            title: 'Petqo',
            background : Petqo,
            alt : 'This is a project called Petqo',
            url : 'https://williamqsnt.github.io/petqo-dribbble/'
        },
        {
            title: 'Jobsa',
            background : Jobsa,
            alt : 'This is a project called Jobsa',
            url : 'https://williamqsnt.github.io/jobsa-dribble/'
        },

    ]


   
   


    
        return(

    
        <TextContent>
                <div className="Projects">
                <h2>Projects</h2>
            </div>
                <div className="AllProjects">



                    {ManyProjects.map(({title,img, background, url}) => {
                      
                        return(
                            <div className="eachProjects" style={{background: `url(${background})`}}>
                                
                                <a href={url} target='_blank' className="eachButton" rel="noreferrer">View the project</a>
                            </div>
                        )
                    })}
                </div>
            </TextContent>
        )
    
  
}


export default Projects


const TextContent = styled.div`
    .Projects{
        display : flex;
        align-items : center;
        justify-content : center;
    }
    .Projects h2{
        color : rgb(58,143,211);
        font-size : 4em;
        letter-spacing : 5px;
    
    }
    .AllProjects{
        margin-top : 5em;
        display : flex;
        justify-content : center;
        flex-wrap : wrap;
    }
    .eachProjects{
        display : flex;
        align-items : center;
        justify-content : center;
        width : 400px;
        margin : 1em;
        height : 400px;
        box-shadow : 0 0 0.8em lightgrey;
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
        background-color : blue;
        border : none;
        color : transparent;
        font-size : 1.5em;
        height : 40%;
        width : 40%;
        opacity : 0;
    }
    .eachButton:hover{
        display : flex;
        align-items : center;
        justify-content : center;
        background-color : rgb(58,143,211);
        border-radius : 50%;
        height : 40%;
        width : 40%;
        animation : buttonZoom 0.5s forwards;
        opacity : 0.8;
        color : white;
        cursor : pointer;
    }
    @keyframes buttonZoom{
        from{height : 40%; width : 40%; opacity : 0.8; color : transparent}
        to{height : 55%; width : 55%; opacity : 0.95; color : white;}
    }
`
