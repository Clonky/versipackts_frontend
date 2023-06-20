import { Show, createResource, createSignal } from "solid-js";
import { NavBar } from "../../components/NavBar";
import { useRouteData } from "@solidjs/router";
import { UserData } from "./[id].data";
import  styles from "./userview.module.css";

const UserBasicCard = () => {
    const data = useRouteData<typeof UserData>();
    return (
    <Show when={!data.loading} fallback={<>Fetching user data...</>}>
        <div class={`${styles.userbasiccard}`}>
            <div>Firmenname: {(data().company_name)}</div>
            <div>Firmenadresse: {(data().company_address)}</div>
            <div>Firmen Email: {(data().company_email)}</div>
        </div>
    </Show>
    );
}

export const UserView = () => {
    return (
        <div>
            <NavBar/>
            <UserBasicCard />
        </div>
    )
}