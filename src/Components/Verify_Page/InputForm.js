import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

function InputForm(props) {
    const [input, setInput] = useState("");
    const handleChange = (event) => {
        let input = event.target.value;
        setInput(input);
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        props.callAPI(input);
    }
    return (
        <form onSubmit={onFormSubmit} noValidate autoComplete="off">
            <TextField
                id="standard-search"
                label="Enter BIN number"
                type="search"
                margin="dense"
                value={input}
                onChange={handleChange}
            />
        </form>
    );
}

export default InputForm;