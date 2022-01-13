import styled from '@emotion/styled'
import pp from '../assets/images/photo_William_QUESNOT.jpg'
import linkedin from '../assets/images/linkedin.png'
import github from '../assets/images/github.png'



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
                <h1>       
                    Front-end Developer
                </h1>
                <img src={pp} alt="the code" width='150' height='150'/>
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

            
            
           
        </BodyDiv>
        
    )
}


export default Body 

const BodyDiv = styled.div`
    *{
        font-family : Arial;
        font-weight : lighter;
     
    }
    .Presentation h1{
        font-weight : bold;
        font-size : 4em;
        color : #FF9B6A;
        letter-spacing : 3px;
        transform:scaleY(1.2);
        
    }
    .Presentation img{
        border-radius : 50%;
        box-shadow:  2px 2px 4px grey;
        -moz-user-select: none; 
        -webkit-user-select: none; 
        -ms-user-select: none;
        user-select: none;
    }
    .Presentation img:hover{
        transform : scale(1.05);
        transition : 0.5s;
    }
    .Presentation{
        background : #161E54;
        display : flex;
        align-items : center;
        justify-content : center;
        flex-direction : column;
        height : 90vh;
    }
    .socialMedias img{
        border-radius : unset;
        box-shadow : unset;
        background-color : white;
        border-radius : 10px;
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


    @media (max-width : 600px){
        .Presentation h1{
            font-size : 1.5em;
        }
    }

    @media (max-width : 415px){
        .Presentation h1{
            font-size : 2em;
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





