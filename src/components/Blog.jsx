import styled from '@emotion/styled'
import js from '../assets/icons/js.svg'
import blog1 from '../assets/images/blog1.jpg'
import blog2 from '../assets/images/blog2.jpg'

const Blog = ()=> {



    const elementsBlog = [
        {
            title : 'JAVASCRIPT',
            desc : 'How to create and use an Array?',
            img : blog1,
            url : 'https://hashnode.com/post/how-to-create-and-use-an-array-ckyh5sxhy05gq24s174iuc4mo'
        },
        {
            title : 'JAVASCRIPT',
            desc : 'How to make a simple API calls with the fetch() method',
            img : blog2,
            url : 'https://hashnode.com/post/here-is-a-course-that-shows-how-to-make-a-simple-api-calls-with-the-fetch-method-in-javascript-ckyh617jm05je24s11u1p4dsw'
        }
    ]




    return(
       <Content>
           <div className="Blogs">
               <h2>Blog</h2>
           </div>

           <div className="contentBlog">
                {elementsBlog.map(({title,desc,img,url})=>{
                    return(
                        <Content>

                        <a href={url} target='_blank' rel="noreferrer">
                            <div className="contentBlock">
                            <div className="topBlock">
                                <img src={js} width='50px' alt="a coder"/>
                            <h2>{title}</h2>
                            </div>
                            <div className="bodyBlock">
                                <h3>{desc}</h3>
                                <img src={img} width='100%' height='60%' alt="the coding" />
                            </div>
                            </div>
                        </a>
                        
                        
                        </Content>
                    )
                })}
           </div>
           
       </Content>
    )



}

export default Blog



const Content = styled.div`
.Blogs{
    display : flex;
    align-items : center;
    justify-content : center;
 
}
.Blogs h2{
    color : #FF5151;
    font-size : 4em;
    letter-spacing : 5px;
}
.contentBlog{
    display : flex;
    align-items : center;
    justify-content : center;
    flex-wrap : wrap;
}
.contentBlock{
    width : 350px;
    height : 400px;
    box-shadow : 2px 2px 4px grey;
    margin : 1em;
}
.topBlock{
    height : 20%;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : rgb(30,30,30);
}

a{
    text-decoration : none;
}
.bodyBlock{
    height : 80%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : space-between;
    background-color : rgb(30,30,30);
}

.contentBlock:hover{
    transform : scale(1.01);
    transition : 0.2s;
}
.bodyBlock h3{
    text-align : center;
    font-size: 27px;
    letter-spacing: 0px;
    color: #fff;
    font-weight: 200;
    text-decoration: none;
}
.bodyBlock h3:hover{
    color : #FF9B6A;
}
.contentBlock h2{
    text-align : center;
    padding : 0.5em;
    color : white;


}

`
