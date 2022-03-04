import { useState } from "react";
import './PayReceive.css'

function PayReceive(){

    const [hisaab, setHisaab] = useState({
        ['toPay']: 0,
        ['toReceive']: 0
    })

    const setHisaabKitaab = (event) => {
        const name = event.target.name
        const value = event.target.value
        setHisaab(values => ({...values, [name]: value}))
    }

    return(
        <>
            <div className="PayReceive" id="PayReceive">
                <div className="box-container">
                    <div className="box toPay">
                        <span className="fa fa-arrow-up"></span>
                        <span>
                            <span>Rs. {hisaab.toPay}</span>
                            <span>To Pay</span>
                        </span>
                    </div>
                </div>
                <div className="box-container">
                    <div className="box toReceive">
                        <span className="fa fa-arrow-down"></span>
                        <span>
                            <span>Rs. {hisaab.toReceive}</span>
                            <span>To Receive</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PayReceive