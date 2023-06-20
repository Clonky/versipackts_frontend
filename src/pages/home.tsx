import { Component } from "solid-js";
import styles from "./home.module.scss"

export const Home: Component = () => {
    return (
    <div class={`${styles.homecontent}`}>
        <h1>Willkommen bei der VersiPack Systemplattform</h1>
        <p>Diese Plattform stellt die Schnittstelle der VersiPack-Abfüllanlagen mit den VersiPack Online-Diensten dar.
            Um die VersiPack Plattform zur Miete, bzw. Vermietung von Abfüllanlagen nutzen zu können, 
             <a href="/login">melden</a> sie sich bitte an,
            oder <a href="/register">registrieren</a> sich mit der Plattform.
        </p>
    </div>
    )
}
