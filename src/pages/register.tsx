import { Component } from "solid-js"
import { NavBar } from "../components/NavBar";

type RegisterFormElementInfo = { labelText: string, inputType: string, inputID: string, required: boolean };

const RegisterFormElement: Component<RegisterFormElementInfo> = (props) => {
    return (
        <div class="form-element">
            <label for={props.inputID}>{props.labelText}</label>
            <input id={props.inputID} type={props.inputType} required={props.required} />
        </div>
    );
}

export const RegisterPage: Component = () => {

    return (
        <>
        <NavBar />
        <form class="register-form" method="post" action="http://127.0.0.1:8000/customers">
            <RegisterFormElement labelText="Company Name: " inputType="text" inputID="id_company_name" required={true} />
            <RegisterFormElement labelText="Company Address: " inputType="text" inputID="id_company_address" required={true} />
            <RegisterFormElement labelText="Company Email: " inputType="email" inputID="id_company_email" required={true} />
            <RegisterFormElement labelText="Password: " inputType="password" inputID="id_company_password" required={true} />
            <RegisterFormElement labelText="Repeat Password: " inputType="password" inputID="id_company_password_repeat" required={true} />
            <p> Careful, this website is still work in progress. Do not enter actual credentials during this stage.</p>
            <input type="submit" />
        </form>
        </>
    );
}
