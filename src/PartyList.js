import './PartyList.css'
import Ledger from './Ledger'
import { useState } from 'react'

function PartyList(){
    const [props, setProps] = useState({
        ['id']: 0,
        ['name']: 'UNDEFINED',
        ['amount']: 0
    })
    const names = []
    const showLedger = () => {
        document.getElementById('Ledger').style.display = 'block'
    }
    return(
        <>
        <Ledger id={props.id} name={props.name} amount={props.amount}/>
        <div className='PartyList'>
            <div className='items-container'>
            {names.map((i) => (
                <div key={i.id} className='item' onClick={() => {
                    setProps(values => ({...values, ['id']: i.id, ['name']: i.name, ['amount']: i.amount}))
                    showLedger()
                }}>
                    <span>{i.name}</span>
                    <span>Rs. {i.amount}</span>
                </div>
            ))}
            </div>
        </div>
        </>
    )
}


export default PartyList