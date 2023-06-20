import { Component } from "solid-js";
import { A } from "@solidjs/router"

export const NavBar: Component = () => {

    return (
    <nav class="navbar sticky">
        <div class="navbutton-container">
            <A href="/" activeClass="underlined">Home</A>
            <A href="/Login" activeClass="underlined">Login</A>
            <A class="register-link" href="/Register" activeClass="underlined">Register</A>
        </div>
    </nav>
    );
};
