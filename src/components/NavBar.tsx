import { NavLink } from "./NavLink"

export default () => {

    return (
    <nav class="navbar">
        <div class="container">
            <NavLink class="nav-link" route=""> Home </NavLink>
            <NavLink class="nav-link" route="signup"> Sign-Up </NavLink>
            <NavLink class="nav-link" route="abou"> About </NavLink>
        </div>
    </nav>
    );
};
