import styled from '@emotion/styled'



const Blog = () => { 

    const elementsBlog = [
        { title : 'Javascript', desc : 'How to create and use an Array?', date : '16/01', url : 'https://hashnode.com/post/how-to-create-and-use-an-array-ckyh5sxhy05gq24s174iuc4mo'},
        { title : 'Javascript', desc : 'How to make a simple API calls with the fetch() method', date : '16/01', url : 'https://hashnode.com/post/here-is-a-course-that-shows-how-to-make-a-simple-api-calls-with-the-fetch-method-in-javascript-ckyh617jm05je24s11u1p4dsw'}
    ]

    return(
        <Content>
            <h2 style={{marginBottom : '1em', color : 'lightgrey', fontSize : '1.5em', marginLeft : '1em'}}>2022</h2>
            <div className='contentBlog'>

            <div className='content'>

           
            {elementsBlog.map(({title, desc, url, date})=>{
                return(
                    <a href={url} target="_blank" rel="noreferrer">

                    <div style={{display : 'flex', justifyContent : 'space-between'}}>
                        <div>
                            <p>{title} : {desc}</p>
                        </div>
                        
                        <div style={{display : 'flex'}}>
                            <p style={{color : 'lightgrey'}}>{date}</p>
                        </div>

                    </div>

                    </a>
                   
                )
            })}
                </div>

            </div>
        </Content>
    )

}

export default Blog 


const Content = styled.div`
    .content{
        margin : 1em;
        width : 100%;
    }

    .contentBlog{
    
        color : #49F2CA;
        width : 100%;

        a{
            text-decoration : none;
            color : #49F2CA;
        }


        div{
            margin-bottom : 0.5em;
        }

        .eachblog{
            :hover{
                color : white;
            }
        }
        
    }

`
