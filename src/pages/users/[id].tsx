import { Show, createResource, createSignal } from "solid-js";
import { NavBar } from "../../components/NavBar";
import { useRouteData } from "@solidjs/router";
import { UserData } from "./[id].data";
import  styles from "./userview.module.scss";

const UserBasicCard = () => {
    const data = useRouteData<typeof UserData>();
    return (
    <Show when={!data.loading} fallback={<>Fetching user data...</>}>
        <ul class={styles.userbasiccard}>
            <li class={styles.entry}>
                <div class={styles.descriptor}>Firmenname:</div>
                <div class={styles.descfield}>{(data().company_name)}</div>
            </li>
            <li class={styles.entry}>
                <div class={styles.descriptor}>Firmenadresse:</div>
                <div class={styles.descfield}>{(data().company_address)}</div>
            </li>
            <li class={styles.entry}>
                <div class={styles.descriptor}>Firmen Email:</div>
                <div class={styles.descfield}>{(data().company_email)}</div>
            </li>
        </ul>
    </Show>
    );
}

export const UserView = () => {
    return (
        <div>
            <NavBar/>
            <div class={styles.content}>
                <UserBasicCard />
            </div>
        </div>
    )
}