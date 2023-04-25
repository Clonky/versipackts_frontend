import { Component } from "solid-js";
import { pageList } from "../pages/pagelist";
import { Setter } from "solid-js";


type NavLinkInfo = { pageStateSetter: Setter<pageList>, route: pageList, buttonText: string, class: string };
const NavLink: Component<NavLinkInfo> = (props) => {
    return (
        <div class="nav-button-container">
            <button onClick={() => {props.pageStateSetter(props.route)}}>{props.buttonText}</button>
        </div>
        );
};

type NavBarInfo = { setter: Setter<pageList> };
export const NavBar: Component<NavBarInfo> = (props) => {

    return (
    <nav class="navbar">
        <h1> VersiPack </h1>
        <div class="navbutton-container">
            <NavLink class="nav-link" route={pageList.Home} buttonText="Home" pageStateSetter={props.setter} />
            <NavLink class="nav-link" route={pageList.Login} buttonText="Login" pageStateSetter={props.setter} />
            <NavLink class="nav-link" route={pageList.Register} buttonText="Register" pageStateSetter={props.setter} />
        </div>
    </nav>
    );
};
