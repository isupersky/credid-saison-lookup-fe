import React, { Fragment } from "react"
import '../../css/cardDetails.css';

const CardDetails = (props) => {
    return (
        < Fragment >
            { console.log(props)}
            <div className='cardDetail'>
                <div className="cardDetail__first">
                    <ul className="cardDetail__row">
                        <li className="cardDetail__row--item">
                            <p className="cardDetail__row--heading">SCHEME / NETWORK</p>
                            <p className="cardDetail__row--value">{props.response.scheme}</p>
                        </li>
                        <li className="cardDetail__row--item">
                            <p className="cardDetail__row--heading">TYPE</p>
                            <p className="cardDetail__row--value">{props.response.type}</p>
                        </li>
                    </ul>
                    <ul className="cardDetail__row">
                        <li className="cardDetail__row--item">
                            <p className="cardDetail__row--heading">BRAND</p>
                            <p className="cardDetail__row--value">{props.response.brand}</p>
                        </li>
                        <li className="cardDetail__row--item">
                            <p className="cardDetail__row--heading">PREPAID</p>
                            <p className="cardDetail__row--value">
                                <span className="cardDetail__row--heading">{props.response.prepaid ? "Yes" : "No"}</span></p>
                        </li>
                    </ul>
                    <ul className="cardDetail__row">
                        <li className="cardDetail__row--item">
                            <p className="cardDetail__row--heading">CARD NUMBER</p>
                            <div className="cardDetail__row--segment">
                                <div className="cardDetail__row--subseg">
                                    <p className="cardDetail__row--subhead">LENGTH</p>
                                    <p className="cardDetail__row--value">{props.response.number.length}</p>
                                </div>
                                <div>
                                    <p className="cardDetail__row--subhead">LUHN</p>
                                    <p className="cardDetail__row--heading">{props.response.number.length ? "YES" : "NO"}
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="cardDetail__row--item">
                            <p className="cardDetail__row--heading">COUNTRY</p>
                            <p className="cardDetail__row--value">{props.response.country.name}</p>
                            <p className="cardDetail__row--heading">
                                (latitude:
    <span className="cardDetail__row--value">{props.response.country.latitude}</span>,longitude:
    <span className="cardDetail__row--value">{props.response.country.longitude}</span> )
    </p>
                        </li>
                    </ul>
                </div>
                <div className="cardDetail__second">
                    <div className="cardDetail__second__internal">
                        <p className="cardDetail__row--heading">BANK</p>
                        <p className="cardDetail__row--value">{props.response.bank.name}</p>
                        <p className="cardDetail__row--link">
                            {props.response.bank.url}
                        </p>
                        <p className="cardDetail__row--mobile">{props.response.bank.phone}</p>
                    </div>
                </div>
            </div>

        </Fragment >
    )
}
export default CardDetails;