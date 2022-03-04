import './SearchParty.css'

function SearchParty(){
    return(
        <>
            <div className='SearchParty' id='SearchParty'>
                <div className='search-container'>
                    <span className='fa fa-search'></span>
                    <input name='search' type={'search'} placeholder='Search' />
                </div>
            </div>
        </>
    )
}

export default SearchParty