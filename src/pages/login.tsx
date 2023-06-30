import { Component } from "solid-js"
import { NavBar } from "../components/NavBar";


type FormFieldInfo = { inputId: string, inputType: string, labelText: string };
const FormField: Component<FormFieldInfo> = (props) => {
    return (
        <div class="form-element">
            <label for={props.inputId}>{props.labelText}</label>
            <input type={props.inputType} name={props.inputId} id={props.inputId}/>
        </div>
    );
}

export const Login: Component<any> = () => {
    return (
        <>
        <NavBar />
        <div class="login-container">
            <form class="login-form" action="http://192.168.178.41:8001/login" method="post">
                <FormField inputId="email" inputType="text" labelText="Email: " />
                <FormField inputId="password" inputType="text" labelText="Password: " />
                <input type="submit"/>
            </form>
        </div>
        </>
    );
}

