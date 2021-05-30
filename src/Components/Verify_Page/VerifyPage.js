import InputForm from './InputForm';
import CardDetails from './CardDetails';
import React, { useState } from 'react';
import axios from "axios";
import "../../css/verifyPage.css"

function VerifyPage() {
    const [response, setResponse] = useState({});

    const callAPI = (bin) => {
        axios.get(`http://1cb03ce6e0c7.ngrok.io/card-scheme/verify/${bin}`)
            .then((response) => {
                let data = response.data;
                setResponse(data)
                return console.log(data);
            }).catch(() => {
                setResponse(...response,)
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