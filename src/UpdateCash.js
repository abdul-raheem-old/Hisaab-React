import {useState} from 'react'
import './UpdateCash.css'

function UpdateCash(){

    const [inputs, setInputs] = useState({})
    const names = [{}]

    const handleInputs = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleForm = (event) => {
        event.preventDefault()
        let fullname = inputs.name
        /* 
            Operations to perform
        */

        setInputs(values => ({...values, ["status"]: `ID: ${inputs.name} Desc: ${inputs.description} Amount: ${inputs.amount}`}))
        
    }

    const cancelForm = () => {
        let x = document.getElementById('UpdateCash');
        x.style.display = "none"
        setInputs({})
    }

    return(
        <>
            <div className='UpdateCash' id="UpdateCash">
                <form onSubmit={handleForm}>
                    <h1>Update Cash</h1>
                    <select value={inputs.name || ""} name="name" onChange={handleInputs} required>
                        <option value="">Select Party...</option>
                        {names.map((i) => (
                            <option key={i.id} value={i.id}>{i.name}</option>
                        ))}
                    </select>
                    <input name='description' onChange={handleInputs} type={'text'} value={inputs.description || ""} placeholder="Description" required />
                    <input name='amount' onChange={handleInputs} type={'number'} value={inputs.amount || ""} placeholder="Amount" required />
                    <div className='updateBtns'>
                        <input name='cout' type={'submit'} value="Cash Out" />
                        <input name='cin' type={'submit'} value="Cash In" />
                    </div>
                    <input type={'button'} value="Go Back" onClick={cancelForm} />
                    {inputs.status && <p><code>{inputs.status || ""}</code></p>}
                </form>
            </div>
        </>
    )
}

export default UpdateCash