

import './Navbar.css'
import '../../Fun'
import { useState } from 'react'
import { HamburgerButton } from '../../HamburgerButton'





export const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <div className='upperPart'>
            <h2 className='title'>Surf Shop</h2>
            <HamburgerButton onClick={function (): void {
                throw new Error('Function not implemented.')
            }} />
            < div className="Navbar">
                <a className="NavItem" href="" target="" rel="">Contact Us</a>
                <a className="NavItem" href="http://" target="" rel="">Prods</a>
                <a className="NavItem" href="App.tsx" target="" rel="">Home Page</a>
                <a className="NavItem" href="http://" target="" rel="">Sign Up</a>
                <a className="NavItem" href="http://" target="" rel="">Log In</a>
            </div>
        </div>
    )
}

