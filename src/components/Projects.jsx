
import styled from '@emotion/styled'
import Learn from '../assets/images/Learn.jpg'
import Homely from '../assets/images/Homely.jpg'
import Petqo from '../assets/images/Petqo.jpg'
import Jobsa from '../assets/images/Jobsa.jpg'
import Enabank from '../assets/images/Enabank.jpg'

const Projects = () => {


    const ManyProjects = [
        {
            title : 'Learn',
            img : undefined,
            background : Learn

        },
        {
            title : 'Homely',
            img : undefined,
            background : Homely
        },
        {
            title: 'Petqo',
            img : undefined,
            background : Petqo
        },
        {
            title: 'Jobsa',
            img : undefined,
            background : Jobsa
        },
        {
            title: 'Enabank',
            img : undefined,
            background : Enabank
        }

    ]



    return(
        <TextContent>
            <div className="Projects">
                <h2>Projects</h2>
            </div>
                <div className="AllProjects">
                    {ManyProjects.map(({title,img, background}) => {
                        return(
                            <div className="eachProjects" style={{background: `url(${background})`}}>
                                

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
        padding-bottom : 1em;
        border-bottom : 2px solid rgb(58,143,211);
    
    }
    .AllProjects{
        margin-top : 5em;
        display : flex;
        justify-content : center;
        flex-wrap : wrap;
    }
    .eachProjects{
        width : 400px;
        margin : 1em;
        height : 400px;
        background-color : red;
        box-shadow : 0 0 0.8em lightgrey;
    }
    .eachProjects:hover{
        cursor : pointer;
        transform : translateY(-20px);
        transition : 0.2s;
    }
`
