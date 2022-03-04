import './Header.css'

function Header(){
    const closeWindow = () => {
        window.close()
    }
    return(
        <header>
            <code>ARHEX LABS</code>
            <span className='fa fa-sign-out' onClick={closeWindow}></span>
        </header>
    )
}

export default Header