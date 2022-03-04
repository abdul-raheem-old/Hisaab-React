import './Ledger.css'

function Ledger(props){

    const ledgers = []

    const hideLedger = () => {
        document.getElementById('Ledger').style.display = 'none';
    }

    return(
        <>
            <div className='Ledger' id='Ledger'>
                <div className='heading'>
                    <span onClick={hideLedger} className='fa fa-arrow-left'></span>
                    <span>{props.name}</span>
                    <span>Rs. {props.amount}</span>
                </div>
                <div className='table'>
                    <table>
                        <tr>
                            <th>Description</th>
                            <th>Dr</th>
                            <th>Cr</th>
                        </tr>
                        {ledgers.map((i) => (
                        <tr>
                            <td>{i.desc}</td>
                            <td>{i.dr}</td>
                            <td>{i.cr}</td>
                        </tr>
                        ))}
                    </table>
                </div>
            </div>
        </>
    )
}

export default Ledger