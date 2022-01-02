import './header.scss'
import riotLogo from '../../../img/icons/Riot-logo.svg'
import valorantlogo from '../../../img/icons/logo-valorant.svg'

function Header() {
    return(
        <div className="main__header">
            <div className="header__logotypes">
                <img src={riotLogo}/>
                <span></span>
                <img src={valorantlogo}/>
                </div>
            <nav className="header__navbar">
                <ul className='header__nav'>
                    <li className='nav_item'><a>ANDREY</a></li>
                    <li className='nav_item'><a>GAME</a></li>
                    <li className='nav_item'><a>GAME</a></li>
                    <li className='nav_item'><a>GAME</a></li>
                    <li className='nav_item'><a>GAME</a></li>
                    <li className='nav_item'><a>GAME</a></li>
                </ul>
            </nav>
            <div className="header__user"></div>
        </div>
    )
}

export default Header