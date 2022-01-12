import styled from '@emotion/styled'
import need from '../assets/images/need.png'
import seo from '../assets/images/seo.webp'
import code from '../assets/images/code.webp'
import checked from '../assets/images/checked.webp'
import delivery from '../assets/images/delivery.webp'
import coding from '../assets/images/coding.webp'

const About = () => {

    const Proceed = [
        {
            img : need,
            title : "Your need",
            desc : 'Define your need, the nature of your site, what type of audience is your site aimed at? What is the purpose of your site?'
        },
        {
            img : seo,
            title : "SEO",
            desc : "Referencing your site is an important issue to increase its visibility with Internet users. It will be important for me to establish natural / paid SEO strategies, in order to apply them."
        },
        {
            img : code,
            title : "The conception",
            desc : "After our discussion on your project, I will move on to the design of your website with regular monitoring. Subsequently, I will set up a tree structure in order to do SEO work."
        },
        {
            img : checked,
            title : "Test",
            desc : "Carrying out the testing phase will ensure that all elements are functioning perfectly. This is an important final step to avoid all types of mistakes."
        },
        {
            img : delivery,
            title : "Delivery",
            desc : "We have arrived at the realization of your order. The website is given to you, as well as with the possibility of keeping in touch with me to solicit me for other projects!"
        }
    ]

    return(
        <TextContent>
            <div className="About">
                <h2>About me</h2>
                <p>
                My name is William Quesnot. I did a scientific baccalaureate. Then, I did a Google distance training in digital 
                marketing and I obtained the diploma  "<a href="https://learndigital.withgoogle.com/ateliersnumeriques/course/digital-marketing" target="_blank">The fundamentals of Digital Marketing</a>". <br /><br />
                Being passionate about new technologies and computers, I learned the JavaScript programming language on my own, often used in interactive web pages. Subsequently I combined it with HTML and CSS technologies to do web development.
                I am currently in computer engineering school to perfect my knowledge and skills. <br /><br />
                I am motivated and curious to learn new things. I want to develop my knowledge and skills in order to put them into practice in various projects and accomplish my professional goals.
                </p>
            </div>
            <div className="Proceed">
                <div className="ProceedTop">
                    <img src={coding} width='100'></img>
                <h3>
                    <code>&lt;</code><span>Methods</span><code>&gt;</code> &nbsp;
                    How I proceed &nbsp;
                    <code>&lt;</code><span>/Methods</span><code>&gt;</code>
                </h3>
                </div>

                {Proceed.map(({img, title, desc}) => {
                    return(
                        <ul>
                            <li>
                                <div className="ProceedTitle">
                                    <img src={img} width='50'></img>
                                    <h3>{title}</h3>
                                </div>
                                <p>{desc}</p>
                            </li>
                        </ul>
                    )
                })}
            </div>      
        </TextContent>
    )
}




export default About


const TextContent = styled.div`
.About{
    display : flex;
    flex-direction : column;
    align-items : center;
}
.About p a{
    text-decoration : none;
    color : rgb(58,143,211);
}
.About h2{
    color : rgb(58,143,211);
    font-size : 4em;
    letter-spacing : 5px;

}
.About p{
    font-size : 1.1em;
    margin-top : 5em;
    text-align : justify;
    width : 70%;
    margin-bottom : 4em;
}
.Proceed{
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
}
.ProceedTop{
    text-align : center;
    margin-bottom : 4em;
}
.ProceedTop h3{
    font-weight : 400;
    margin-top : em;
}
.Proceed code{
    color : grey;
}
.Proceed span{
    color : rgb(58,143,211);
    font-style : italic;
}
.ProceedTitle{
    display : flex;
    align-items : center;
}
.ProceedTitle h3{
    margin-left : 1em;
    color : rgb(58,143,211);
}
.Proceed ul{
    box-shadow : 0em 0em 0.7em lightgrey;
    padding : 1em;
    border-radius : 10px;
    width : 50%;
}
.Proceed li{
    list-style-type : none;
}
.Proceed ul:hover{
    transform : scale(1.2);
    z-index : 1;
    background-color : transparent;
    transition : 0.2s;
}

@media (max-width : 600px){
    .About p{
        width : 85%;
    }
    .Proceed ul{
        width : 70%;
    }
}

`
