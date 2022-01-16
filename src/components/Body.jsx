import styled from '@emotion/styled'
import linkedin from '../assets/images/linkedin.svg'
import github from '../assets/images/github.svg'
import Carousel from './Carousel'



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
    ];
    
    return(
        <BodyDiv>
            <div className="Presentation">

                <div className="left">
                                        <h1>FRONT-END</h1>
                                        <h2>Developer</h2>
                                        <div className="btn">
                                            <a href="mailto:quesnot.william@hotmail.com" className="contactMe">CONTACT ME</a>
                                            <a href="https://www.linkedin.com/in/william-quesnot-a23591223/"  target="_blank" rel="noreferrer" className="learnMore">LEARN MORE</a>
                                        </div>
                                       
                                
                                        <div className="socialMedias">
                                            {socials.map(({link, socialMedia, alt})=>{
                                                return(
                                                    <a href={link} target='_blank' rel="noreferrer"><img src={socialMedia} alt={alt} ></img></a>
                                                )
                                            })}
                                        </div>

                </div>

                <div className="right">

                                    
                        <Carousel />
                                            



                </div>
               
                
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
    .right img{
        border-radius : unset;
        transform : unset;
    }
    .left{
        display : flex;
        align-items : center;
        justify-content : center;
        flex-direction : column;
        height : 100%;
        width : 100%;
    }
    .contactMe{
        margin-top : 2em;
        background-color : #FF5151;
        text-decoration : none;
        padding : 1em 2em 1em 2em;
        color : #161E54;
        font-weight : bold;
        border-radius : 30px;
        margin-right : 0.5em;
        cursor : pointer;
    }
    .contactMe:hover{
        color : white;
    }
    .learnMore{
        margin-top : 2em;
        background-color : transparent;
        text-decoration : none;
        padding : 1em 2em 1em 2em;
        color : #FF5151;
        font-weight : bold;
        margin-left : 0.5em;
        cursor : pointer;
        border-radius : 30px;
        border : 2px solid #FF5151;
    }
    .learnMore:hover{
        background-color : #FF5151;
        color : white;
    }
    .btn{
        padding : 1em;
        margin-top : 2em;
    }
    .right{
        height : 100%;
        width : 100%;
        display : flex;
        align-items : center;
        justify-content : center;
    }
    .Presentation h1{
        padding : unset;
        margin : unset;
        font-weight : bold;
        font-size : 5em;
        color : #FF5151;
        letter-spacing : 5px;
        text-shadow : 4px 3px lightblue;
    
    }
    .Presentation h2{
        padding : unset;
        margin : unset;
        font-size : 4em;
        color : #FF5151;
        letter-spacing : 3px;
    }
    .Presentation img{
        -moz-user-select: none; 
        -webkit-user-select: none; 
        -ms-user-select: none;
        user-select: none;
    }
    .Presentation{
        background : #161E54;
        display : flex;
        align-items : center;
        justify-content : center;
        height : 100vh;
    }
    .socialMedias{
        margin-top : 1em;
    }
    .socialMedias img{
        border-radius : unset;
        box-shadow : unset;
        border : unset;
        width : 50px;
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
        font-weight : lighter;
        color : #FF9B6A;
    }
    .description code{
        font-style : italic;
        font-size : 1em;
        color : #FF9B6A;
    }
    .description span{
        color : #FF9B6A;
        font-style : italic;
    }

    @media (max-width : 1025px){
        .Presentation h1{
            font-size : 4em;
        }
    }
    @media (max-width : 835px){
        .right{
            display : none;
        }
    }

    @media (max-width : 600px){
        .Presentation{
            flex-direction : column;
            height : 85vh;
        }
     
       
    }


    @media (max-width : 415px){
        .Presentation h1{
            font-size : 3em;
        }
        .Presentation h2{
            font-size : 3em;
        }
        .btn a{
            padding : 1em;
        }
    }
    @media (max-width : 390px){
        code{
            display : none;
        }
        span{
            display : none;
        }
    }
`





