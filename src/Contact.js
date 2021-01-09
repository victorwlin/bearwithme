import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const onChangeHandler = event => {
        const { id, value } = event.currentTarget;

        if (id === "email") {
            setEmail(value);
        } else if (id === "message") {
            setMessage(value);
        }
    };

    const onFormSubmit = event => {
        event.preventDefault();

        if (email && message) {
            const data = { email, message };
            console.log(data);
            axios.post('https://us-central1-backtests-1f81f.cloudfunctions.net/submit', data)
                .catch(error => {
                    console.log(error);
                });
            
            setEmail("");
            setMessage("");

        } else {
            window.alert("Please enter an email and message before submission.")
        }
        
    };

    return (
        <form onSubmit={event => onFormSubmit(event)}>
            <TextField id="email" label="Email" variant="outlined" fullWidth value={email} onChange={event => onChangeHandler(event)} />
            <TextField id="message" label="Message" variant="outlined" multiline rows={4} fullWidth margin="normal" value={message} onChange={event => onChangeHandler(event)} />
            <Button type="submit" variant="contained">Submit</Button>
        </form>
    );
}

export default Contact;