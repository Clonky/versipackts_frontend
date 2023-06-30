import { Component } from "solid-js"
import { NavBar } from "../components/NavBar";

type RegisterFormElementInfo = { labelText: string, inputType: string, inputID: string, required: boolean };

const RegisterFormElement: Component<RegisterFormElementInfo> = (props) => {
    return (
        <div class="form-element">
            <label for={props.inputID}>{props.labelText}</label>
            <input id={props.inputID} name={props.inputID} type={props.inputType} required={props.required} />
        </div>
    );
}

export const RegisterPage: Component = () => {

    return (
        <>
        <NavBar />
        <form class="register-form" method="post" action="http://192.168.178.41:8001/customers">
            <RegisterFormElement labelText="Company Name: " inputType="text" inputID="companyname" required={true} />
            <RegisterFormElement labelText="Company Address: " inputType="text" inputID="companyaddress" required={true} />
            <RegisterFormElement labelText="Company Email: " inputType="email" inputID="companyemail" required={true} />
            <RegisterFormElement labelText="Password: " inputType="password" inputID="password" required={true} />
            <p> Careful, this website is still work in progress. Do not enter actual credentials during this stage.</p>
            <input type="submit" formEnctype="application/x-www-form-urlencoded" />
        </form>
        </>
    );
}
