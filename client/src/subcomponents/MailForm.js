import React, { Component } from "react";
import styled from "styled-components";
/* AS A FUNCTIONAL COMPONENT*/
import axios from 'axios';



const StyledMailForm = styled.form`
    background: grey;
    width: 100%;
    height: 100%;
    display: grid;
        fieldset {
            margin: auto;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, 1fr);
            width: 80%;
        }
        & input {
            width: 100%;
            height: 5vh;
            &.name {
                font-size: 2rem;
            }
            &.email {
                font-size: 1.8rem;
            }
            &.message {
                height: 15vh;
                font-size: 2rem;
            }
        }
    & button {
        width: 22vw;
        height: 3vh;
        margin: auto;
        background: #269e6c;
        color: #fff;
        font-size: 0.8rem;
    }
`;


    // const MailForm =  () => {
class MailForm extends Component{        
constructor(props) {
    super(props);
    this.state = {
        email: "",
        name: "",
        message: ""
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
}

changeHandler(e) {
    this.setState({[e.target.name]: e.target.value})
}

    async submitHandler(e) {
        e.preventDefault();
        const { email, name, message } = this.state;
        // console.log(`
        // {name: ${name},
        // email: ${email},
        // msg: ${message}}`)
        // console.log("state:", this.state);
        try {
            // eslint-disable-next-line 
            const form = await axios.post("/api/form",
                {
                    name,
                    email,
                    message
                }
            )
            
        } catch (error) {
            console.log(error);
        }
    }

       render() {
           const {email, name, message} = this.state;
           return (
               <StyledMailForm onSubmit={this.submitHandler} >
            <fieldset>
                <legend>Test Mail Form</legend>
                <label htmlFor="name">name</label>
                <input
                onChange={this.changeHandler}
                className="name"
                name="name"
                type="text"
                placeholder="name"
                value={name}
                />
                <label htmlFor="email">email</label>
                <input
                onChange={this.changeHandler}
                className="email"
                name="email"
                type="email"
                placeholder="email"
                value={email}
                />
                <label htmlFor="message">message</label>
                <input
                onChange={this.changeHandler}
                className="message"
                name="message"
                type="textarea"
                placeholder="message"
                value={message}
                />
                </fieldset>
                <button type="submit">Send Email</button>

               
            </StyledMailForm>
        )
    }
}


export default MailForm;
