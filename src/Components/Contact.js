import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

function Contact() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState("");
    
    const onChangeHandler = event => {
        const { id, value } = event.currentTarget;

        if (id === "email") {
            setEmail(value);
        } else if (id === "message") {
            setMessage(value);
        } else if (id === "subject") {
            setSubject(value);
        }
    };

    const onFormSubmit = event => {
        event.preventDefault();

        if (subject || message) {
            
            const data = { email, subject, message };
            
            axios.post('https://us-central1-backtests-1f81f.cloudfunctions.net/submit', data) // http://localhost:5001/backtests-1f81f/us-central1/submit
                .then(res => {
                    if (res.data.isEmailSend) {
                        setError(false);
                        setHelperText("Message sent successfully.");
                    } else {
                        setError(true);
                        setHelperText("Something went wrong. Please try again later.")
                    }
                })
                .catch(er => {
                    console.log(er);
                    setError(true);
                    setHelperText(`${er}`);
                });
            
            setEmail("");
            setSubject("");
            setMessage("");

        } else {
            setError(true);
            setHelperText("Subject & Message cannot both be blank.")
        }
        
    };

    return (
        <form onSubmit={event => onFormSubmit(event)}>
            <TextField id="email" label="Email (only required if you want a response)" variant="outlined" fullWidth value={email} onChange={event => onChangeHandler(event)} />
            <TextField id="subject" label="Subject" variant="outlined" fullWidth margin="normal" value={subject} onChange={event => onChangeHandler(event)} error={error} />
            <TextField
                id="message"
                label="Message"
                variant="outlined"
                multiline rows={8}
                fullWidth
                margin="normal"
                value={message}
                onChange={event => onChangeHandler(event)}
                error={error}
                helperText={helperText}
            />
            <Button type="submit" variant="contained">Submit</Button>
        </form>
    );
}

export default Contact;