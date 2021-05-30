import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import "../../css/statsPage.css";
import axios from "axios";

function StatsPage() {
    const [start, setStart] = useState(1);
    const [limit, setLimit] = useState(10);
    const [apiResponse, setApiResponse] = useState({});
    const onFormSubmit = (event) => {
        event.preventDefault();
        callApi(start, limit);
    }
    const callApi = (start, limit) => {
        console.log(start, limit);
        axios.get(`http://1cb03ce6e0c7.ngrok.io/card-scheme/stats?start=${start}&limit=${limit}`)
            .then((response) => {
                let data = response.data;
                setApiResponse(data)
                console.log(data);
            }).catch((error) => {
                console.log(error);
            });

    }
    const handleStartChange = (event) => {
        let input = event.target.value;
        setStart(input);
    }
    const handleLimitChange = (event) => {
        let input = event.target.value;
        setLimit(input);
    }
    return (
        <div>
            <form onSubmit={onFormSubmit} className="inputForm">
                <TextField
                    id="outlined-number"
                    label="Start from"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name="start"
                    variant="outlined"
                    className="inputField"
                    value={start}
                    onChange={handleStartChange}
                />
                <TextField
                    id="outlined-number"
                    label="Limit"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name="limit"
                    variant="outlined"
                    className="inputField"
                    value={limit}
                    onChange={handleLimitChange}
                />
                <input type="submit" value="get Stats" />
            </form>
            {apiResponse.success ?
                <table><tbody>{apiResponse.payload.map((load, key) => {
                    return (<div>
                        <tr key={key}>
                            <td>{load.bin}</td>
                            <td>{load.call_count}</td>
                        </tr>
                    </div>)

                })}</tbody> </table> :
                null
            }
        </div>
    )
}

export default StatsPage;