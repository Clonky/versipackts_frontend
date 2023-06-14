import { Component } from "solid-js";

export const NavBar: Component = () => {

    return (
    <nav class="navbar">
        <h1> VersiPack </h1>
        <div class="navbutton-container">
            <a href="/">Home</a>
            <a href="/Login">Login</a>
            <a class="register-link" href="/Register">Register</a>
        </div>
    </nav>
    );
};
