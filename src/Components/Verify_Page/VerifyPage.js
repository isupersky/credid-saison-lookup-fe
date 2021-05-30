import InputForm from './InputForm';
import CardDetails from './CardDetails';
import React, { useState } from 'react';
import axios from "axios";
import "../../css/verifyPage.css"

function VerifyPage() {
    const [response, setResponse] = useState({});

    const callAPI = (bin) => {
        axios.get(`http://34.70.30.55:8080/card-scheme/verify/${bin}`)
            .then((response) => {
                let data = response.data;
                setResponse(data)
                return console.log(data);
            }).catch(() => {
                window.alert("Invalid BIN/INN")
            });

    }
    return (
        <div>
            <InputForm className='root' callAPI={callAPI} />
            {response.success ?
                <CardDetails response={response.payload} /> :
                null
            }
        </div>
    )
}

export default VerifyPage;