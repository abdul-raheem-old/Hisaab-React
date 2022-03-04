import {useState} from 'react'
import './AddParty.css'
import UpdateCash from './UpdateCash'

function AddParty(){

    const [inputs, setInputs] = useState({})

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
        setInputs(values => ({...values, ["status"]: `Name: ${inputs.name}`}))
        
    }

    const cancelForm = () => {
        let x = document.getElementById('AddParty');
        x.style.display = "none"
        setInputs({})
    }
  
    const showAddParty = () => {
      let x = document.getElementById('AddParty');
      x.style.display = "flex"
    }
  
    const showUpdateCash = () => {
      let x = document.getElementById('UpdateCash');
      x.style.display = "flex"
    }

    return(
        <>
            <div className='actionBtns'>
                <button onClick={showAddParty}><span className='fa fa-plus'></span> <span>Add Party</span></button>
                <button onClick={showUpdateCash}><span className='fa fa-edit'></span> <span>Update Cash</span></button>
            </div>
            <div className='AddParty' id="AddParty">
                <form onSubmit={handleForm}>
                    <h1>Add Party</h1>
                    <input name='name' value={inputs.name || ""} placeholder="Enter Full Name" onChange={handleInputs} required />
                    <input type={'submit'} value="Add Party" />
                    <input type={'button'} value="Go Back" onClick={cancelForm} />
                    {inputs.status && <p><code>{inputs.status || ""}</code></p>}
                </form>
            </div>
            <UpdateCash />
        </>
    )
}

export default AddParty