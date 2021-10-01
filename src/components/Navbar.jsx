import React from 'react'

const Navbar = (props) => {
    return (
        <div>
            <nav class="navbar navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Coingecko App</a>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={ props.handleChange} />
                    </form>
                </div>
            </nav>  
        </div>
    )
}

export default Navbar
