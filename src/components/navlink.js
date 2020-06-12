
import React from 'react';


const NavLink = ()=> {
    return (
    <div>
          
    <ul className ="navbar-nav ml-auto">
        <li class="nav-item active"><a class="nav-link" href="home">Home <span class="sr-only">(current)</span></a></li>
        <li class="nav-item"><a class="nav-link" href="about">About</a></li>
        <li class="nav-item"><a class="nav-link" href="chapters">Chapters</a></li>
        <li class="nav-item"><a class="nav-link" href="conclusion">Conclusion</a></li>
        <li class="nav-item"><a class="nav-link" href="extrablessing">ExtraBlessing</a></li>
        <li class="nav-item"><a class="nav-link" href="donate">Donate</a></li>
    </ul>
</div>)
}

export default NavLink;