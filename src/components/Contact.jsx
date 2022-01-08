
import styled from '@emotion/styled'


const Contact = () =>{
    return(
        <TextContent>
            <div className="Contact">
                <h2>Contact me</h2>
            </div>
        </TextContent>

    )
}


export default Contact


const TextContent = styled.div`
    .Contact {
        display : flex;
        align-items : center;
        justify-content : center;
    }
    .Contact h2{
        color : rgb(58,143,211);
        padding-bottom : 1em;
        border-bottom : 2px solid rgb(58,143,211);
    }
`
