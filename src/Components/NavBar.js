function NavBar() {

    function handleClickEvents() {
        
    }

    return (
        <div className="nav">
            <h1 className="nav--title">Dana Cafe</h1>
            <h2 className="nav--events" onClick={handleClickEvents}>Events</h2> 
        </div>
    )
}

export default NavBar

// OnClick