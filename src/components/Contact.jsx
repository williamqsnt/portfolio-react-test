
import styled from '@emotion/styled'
import { useState } from 'react'
import correct from '../assets/images/correct.png'

const Contact = () =>{

    
   
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'keyG3mWvlLfFyCAkc'}).base('appLonkibDKT9LuDB');
  
  
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const createData = async (Email,Message, Name) => {
      
  
      base('Portfolio_Contact').create([
        {
          "fields": {
            Name,
            Email,
            Message
    
          }
        },
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      });
   
    }
  
    
    const [Forms, updateForms] = useState(false)


    return Forms ? (
        <FormsMessage>
             <div class="FormsSuccess">
             
            <div class="Message">
                <h2>Your message has been sent.<br/> Thanks, see you soon ! <img src={correct} width='20px' alt="correct" /></h2>
                <h3>Do you want to contact me once more? This is my email :</h3>
                <a href="mailto:quesnot.william@hotmail.com">quesnot.william@hotmail.com</a>
            </div>
        </div>
        </FormsMessage>
       
    ) : (

    <TextContent>
                <div className="Contact">
                    <h2>Contact me</h2>

                    <h3>
                    Are you looking for an ideal web developer for a mission?<br></br> Do not hesitate to send me a message, I am at your disposal for more information.
                    </h3>
                
                    <div className="Forms">
                        <form>
                            <label>Name</label>
                            <input type='text' placeholder={name} onChange={e => setName(e.target.value)}/><br/>
                            <label>Email</label>
                            <input type='text' placeholder={email} onChange={e => setEmail(e.target.value)}/><br/>
                            <label>Message</label>
                            <input type='text' placeholder={message} onChange={e => setMessage(e.target.value)} style={{height : '150px'}}/> 
                            <div className="btn">
                            <button onClick={()=> {createData(name,email,message); updateForms(true)}}>Send</button></div>
                        </form>
                        
                    </div>

                </div>
            </TextContent>

    )
    
}

export default Contact

const FormsMessage = styled.div`
    .FormsSuccess{
       display : flex;
       justify-content :center;
       align-items : center;
       height : 100%;
       width : 100%;
       margin-bottom : 10em;
    }
    .Message h3{
        font-weight : 400;
        margin-left : 1em;
        margin-right : 1em;
    }
    .Message{
        text-align : center;
    }
    .Message a{
        color : rgb(58,143,211);
    }
    .Message h2{
        position : fixed;
        right : 20px;
        top : 100px;
        z-index : 99099;
        text-align : center;
        font-weight : 400;
        padding : 0.5em;
        opacity : 0.8;
        color : white;
        animation : goodmsg 3s forwards;
        background-color : rgb(58,143,211);
        border-radius : 10px;
       
        
    }
   
    @keyframes goodmsg{
        0%{opacity : 0}
        30%{opacity : 0.7}
        50%{opacity : 0.7}
        90%{opacity : 0.7}
        100%{opacity : 0}
    }
`

const TextContent = styled.div`
    .Contact h3{
        margin-left : 1em;
        margin-right : 1em;
        text-align : center;
        font-weight : 400;
        margin-bottom : 3em;
    }
    .Forms{
        width : 70%;
        height : 300px;
    }
    form{
        height : 100%;
    }
    form label{
        font-size : 1.5em;
        font-weight : 500;
        color : rgb(58,143,211);
    }
    form input{
        width : 100%;
        height : 30px;
        margin-bottom : 0.5em;
        font-size : 1.5em;
    }
    .btn{
        text-align : center;   
    }
    .btn button{
        margin : 1em;
        font-size : 1.5em;
        padding : 0.5em 3em 0.5em 3em;
        background-color : rgb(58,143,211);
        color : white;
        border : none;
        box-shadow : 4px 4px 8px grey;
    }
    .btn button:hover{
        transform : scale(1.15);
        transition : 0.2s;
        cursor : pointer;
    }
    .Contact {
        display : flex;
        align-items : center;
        flex-direction : column;
        justify-content : center;
        padding : 0 0 10em 0;
    }
    .Contact h2{
        color : rgb(58,143,211);
        font-size : 4em;
        letter-spacing : 5px;
    }
    @media (max-width : 600px){
        
    }
    input{
        width : 80%;
    }
`
