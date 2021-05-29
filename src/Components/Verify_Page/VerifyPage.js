import InputForm from './InputForm';
import React, { useState } from 'react';


function VerifyPage (){
    const [cardDetails, setCardDetails] = useState({});
    return (
    <div>
        <InputForm/>
    </div>
    )
}

export default VerifyPage;