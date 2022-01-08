import styled from '@emotion/styled'


const Header = ()=>{ 


    const navigations = [
        { link : '.About', text : 'About'},
        { link : '/skills', text : 'Skills'},
        { link : '/projects', text : 'Projects'},
        { link : '/contact', text : 'Contact'}
    ]

  

    return(
        <Menus>
            <div className="Navigations">
                <div className="Menu">
                    <h2>
                        myPortfolio<span>(&nbsp;)</span>
                    </h2>
                </div>
                <div className="Navbar">
                    <nav>
                        <ul>          
                            {navigations.map(({link, text})=>{
                                return(
                                    <li>
                                        <a href={link}>{text}</a>
                                    </li>
                                )
                            })}    
                        </ul>
                    </nav>
                </div>
            </div>
            
        </Menus>
    )
}


export default Header




const Menus = styled.div`
    .Navigations{
        display : flex;
        justify-content : space-around;
        box-shadow : 2px 2px 5px rgb(230, 230, 230);
    }
    .Menu{
        display : flex;
        align-items : center;
        color : rgb(58,143,211);
        font-style : italic;
    }
    .Menu span{
        color : black;
        font-style : unset;
        font-weight : lighter;
    }
    .Navbar{
        display : flex;
    }
    ul{
        display : flex;
    }
    li{
        margin : 1em;
        list-style-type : none;    
        -webkit-transition: all 0.2s ease; 
        -moz-transition: all 0.2s ease; 
        -ms-transition: all 0.2s ease; 
        -o-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }
    a{ 
        color : black;
        text-decoration : none;   
    }
    li:hover{
        -webkit-transform:scale(1.25); 
        -moz-transform:scale(1.25); 
        -ms-transform:scale(1.25);
        -o-transform:scale(1.25);
        transform:scale(1.25);


    }



`
