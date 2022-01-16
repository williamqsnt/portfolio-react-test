import styled from '@emotion/styled'
import { useState } from 'react'
import image1 from '../assets/images/image1.png'
import backgroundimage from '../assets/images/backgroundimage.png'


const Carousel = () => {

    
    const [Slide, upSlide] = useState(false)

    return Slide ? (
        <Slider>
         <div className="container">
            <div className="top">
                <img src={image1} width='550' alt="a screen of visual studio code" style={{boxShadow : 'unset'}}/>
            </div>
           <div className="bottom">
               <button onClick={()=> upSlide(false)}>○</button>
            <button onClick={()=> upSlide(true)}>●</button>
           </div>
            
        </div>
        </Slider>
    ) : (
        <Slider>
        <div className="container">
            <div className="top">
                 <img src={backgroundimage} alt="background" width='500' />
            </div>
           <div className="bottom">
               <button onClick={()=> upSlide(false)}>●</button>
            <button onClick={()=> upSlide(true)}>○</button>
           </div>
            
        </div>
        </Slider>
        
    )




}
   

const Slider = styled.div`
    .container{
        display : flex;
        flex-direction : column;
    }
    .top{
        text-align : center;
    }
    .bottom{
        text-align : center;
    }
    .bottom button{
        border : none;
    }
    button{
        font-size : 2em;    
        color : #FF5151;
        background : transparent;
        cursor : pointer;
    }
    @media (max-width : 920px){
        img{
            width : 400px;
        }
    }
   
`


export default Carousel