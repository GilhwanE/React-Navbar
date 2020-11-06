import React , {Compoents} from'react';
import { Menuitems } from "./MenuItems";

class Navbar extends React.Component {
    render()
    {
        return(
            <nav className="NabarItems">
                <h1 className="Navbar-logo">React<i className="fab fa-react"></i></h1>
                <div className="menu-icon">
                </div>
                <ul>
                    {Menuitems.map((item, index) => 
                    {
                        return (
                            <li key={index}> 
                                <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }

}

export default Navbar