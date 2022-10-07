import React from "react";
import { NavLink } from "react-router-dom";

function ColorsList ({colors}) {

    return (
        <nav>
            {Object.keys(colors).map(color => <NavLink to={`/colors/${color}`} >{color}</NavLink>)}
        </nav>
    )
}

export default ColorsList;