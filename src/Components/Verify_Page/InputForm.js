import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "../../css/inputForm.css"

function InputForm(props) {
    const [input, setInput] = useState("");
    const handleChange = (event) => {
        let input = event.target.value;
        setInput(input);
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (input === "") {
            return window.alert("Please Enter a BIN/INN number first");
        }
        props.callAPI(input);
    }
    return (
        <form onSubmit={onFormSubmit} noValidate autoComplete="off" className="root" >
            <div className="input-css">
                <TextField
                    id="standard-search"
                    label="Enter BIN number"
                    type="number"
                    margin="dense"
                    value={input}
                    onChange={handleChange}

                />
            </div>
            <Button variant="contained" type="submit" color="primary" >
                get details
        </Button>
        </form >
    );
}

export default InputForm;