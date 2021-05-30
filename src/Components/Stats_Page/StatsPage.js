import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import "../../css/statsPage.css";
import axios from "axios";
import DataTable from './DataTable'
import Button from '@material-ui/core/Button';

function StatsPage() {
    const [start, setStart] = useState(1);
    const [limit, setLimit] = useState(10);
    const [apiResponse, setApiResponse] = useState({});
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (start < 0 || limit < 0) {
            window.alert("values of start and limit must be greater than 0")
        } else {
            callApi(start, limit);
        }
    }
    const callApi = (start, limit) => {
        console.log(start, limit);
        axios.get(`http://34.70.30.55:8080/card-scheme/stats?start=${start}&limit=${limit}`)
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
            <form onSubmit={onFormSubmit} >
                <div className="inputForm">
                    <div className="inputField">
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
                    </div>
                    <div className="inputField">
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
                    </div>
                    <div className="inputField">
                        <Button variant="contained" type="submit" color="primary" >
                            get Stats
        </Button>
                    </div>
                </div>
            </form><DataTable data={apiResponse.payload} />
        </div>
    )
}

export default StatsPage;