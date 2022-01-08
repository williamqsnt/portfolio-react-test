import styled from '@emotion/styled'
import pp from '../assets/images/photo_William_QUESNOT.jpg'
import linkedin from '../assets/images/linkedin.png'
import github from '../assets/images/github.png'
import arrowDown from '../assets/images/arrowDown.png'


const Body = () => {


    const socials = [
        {
            link : 'https://www.linkedin.com/in/william-quesnot-a23591223/',
            socialMedia : linkedin,
            alt : 'My LinkedIn William Quesnot'
        },
        {
            link : 'https://github.com/williamqsnt?tab=repositories',
            socialMedia : github,
            alt : 'My Github williamqsnt'
        }
    ]


    return(
        <BodyDiv>
            <div className="Presentation">
                <h1> 
                    
                    <code>&lt;</code><span>Job</span><code>&gt;</code> &nbsp;
                    Front-end Developer &nbsp;
                    <code>&lt;</code><span>/Job</span><code>&gt;</code>
                    </h1>
                <img src={pp} alt="My profile photo" width='150' height='150'></img>
                <div className="description">
                    <p>
                        <code>&lt;</code><span>p</span><code>&gt;</code> Welcome, I'm William Quesnot. <br/> Front-end developer from Lyon in France. <br /> Nice to meet you <code>&lt;</code><span>/p</span><code>&gt;</code> 
                    </p>
                </div>
                <div className="socialMedias">
                    {socials.map(({link, socialMedia, alt})=>{
                        return(
                            <a href={link} target='_blank' rel="noreferrer"><img src={socialMedia} alt={alt} ></img></a>
                        )
                    })}
                </div>
                
            </div>

           
                <div className='Footer'>
                    <img src={arrowDown} width='50'></img>
                </div>
            
           
        </BodyDiv>
    )
}


export default Body 

const BodyDiv = styled.div`
    *{
        font-family : Arial;
        font-weight : lighter;
    }
    .Presentation img{
        border-radius : 50%;
        box-shadow:  2px 2px 4px grey;
    }
    .Presentation img:hover{
        transform : scale(1.05);
        transition : 0.5s;
    }
    .Presentation{
        display : flex;
        align-items : center;
        justify-content : center;
        flex-direction : column;
        height : 80vh;
    }
    .Presentation code{
        font-style : italic;
        font-size : 1em;
        color : grey;
    }
    .Presentation span{
        color : rgb(58,143,211);
        font-style : italic;
    }
    .socialMedias img{
        border-radius : unset;
        box-shadow : unset;
        border : unset;
        width : 40px;
        margin : 1em 0.5em 0.5em 0.5em ; 
    }
    .socialMedias img:hover{
        transform : translateY(-5px);
        transition : 0.2s;
    }
    .description{
        margin-top : 1em;
    }
    .description p{
        font-size : 1.2em;
        text-align : center;
    }
    .description code{
        font-style : italic;
        font-size : 1em;
        color : grey;
    }
    .description span{
        color : rgb(58,143,211);
        font-style : italic;
    }
    .Footer{
        display : flex;
        align-items : center;
        justify-content : center;
    }
`





