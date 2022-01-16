import styled from '@emotion/styled'
import need from '../assets/images/need.png'
import seo from '../assets/images/seo.webp'
import code from '../assets/images/code.webp'
import checked from '../assets/images/checked.webp'
import delivery from '../assets/images/delivery.webp'
import pp from '../assets/images/photo_William_QUESNOT.jpg'



const About = () => {

    const Proceed = [
        {
            img : need,
            title : "Your need",
            desc : 'Define your needs, the nature of your site, what type of audience is your site aimed at? What is the main purpose of your site ?'
        },
        {
            img : seo,
            title : "SEO",
            desc : "The referencing of your site is an important issue to increase its visibility among Internet users. It will be important for me to establish SEO strategies, in order to apply them and place you at the top of the ranking."
        },
        {
            img : code,
            title : "The conception",
            desc : "After our discussion on your project, I will move on to the design of your website with regular monitoring by applying SEO strategies at the same time."
        },
        {
            img : checked,
            title : "Test",
            desc : "Performing the test phase will ensure that all the elements work perfectly. This is an important final step to avoid all types of errors."
        },
        {
            img : delivery,
            title : "Delivery",
            desc : "We have arrived at the realization of your order. The site is delivered to you, as well as the possibility to stay in contact with me to solicit me for other projects !"
        }
    ]

    return(
        <TextContent>
            <div className="About">
                <h2>About me</h2>
                <img src={pp} width='200' alt='logo' style={{borderRadius : '50%', marginBottom : '2em'}}/>
                <p>
                My name is William Quesnot. I did a scientific baccalaureate. Then, I did a Google distance training in digital 
                marketing and I obtained the diploma  "<a href="https://learndigital.withgoogle.com/ateliersnumeriques/course/digital-marketing" target="_blank" rel="noreferrer">The fundamentals of Digital Marketing</a>". <br /><br />
                Being passionate about new technologies and computers, I learned JavaScript programming language on my own, often used in interactive web pages. Subsequently I combined it with HTML and CSS technologies to do web development.
                I am currently in computer engineering school to perfect my knowledge and skills. <br /><br />
                I am motivated and curious to learn new things. I want to develop my knowledge and skills in order to put them into practice in various projects and accomplish my professional goals.
                </p>
            </div>
            <div className="Proceed">
                <div className="ProceedTop">
                <h3>How I proceed</h3>
                </div>

                {Proceed.map(({img, title, desc}) => {
                    return(
                        <ul>
                            <li>
                                <div className="ProceedTitle">
                                    <img src={img} width='50' alt="a title"></img>
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
    background-color : white;
}
.About p a{
    text-decoration : none;
    color : #FF9B6A;
}
.About h2{
    color : #FF5151;
    font-size : 4em;
    letter-spacing : 5px;

}
.About p{
    font-size : 1.1em;
    margin-top : 2em;
    text-align : justify;
    width : 50%;
    margin-bottom : 8em;
}
.Proceed{
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    padding-bottom : 5em;
    background : #161E54;
}
.ProceedTop{
    margin-top : 3em;
    text-align : center;
    margin-bottom : 2em;
}
.ProceedTop h3{
    color : #FF9B6A;
    font-weight : 500;
    margin-top : 1em;
    font-size : 3em;
    padding-bottom : 0.5em;
    border-bottom : 2px solid #FF9B6A;
}
.ProceedTitle{
    display : flex;
    align-items : center;
}
.ProceedTitle h3{
    margin-left : 1em;
    color : #FF9B6A;
}
.Proceed ul{
    background : white;
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
    background-color : white;
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
