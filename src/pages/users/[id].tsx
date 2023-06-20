import { Show, createResource, createSignal } from "solid-js";
import { NavBar } from "../../components/NavBar";
import { RouteDataFuncArgs, useParams, useRouteData, useSearchParams } from "@solidjs/router";
import  styles from "./userview.module.css";
import { fetchUser } from "./[id].data";


export const UserView = () => {
    const params = useParams();
    const [data] = createResource(params.id, fetchUser)
    return (
        <div>
            <Show when={!data.loading} fallback={<>Fetching user data...</>}>
                Firmenname: {(data().company_name)}<br/>
                Firmenadresse: {(data().company_address)}<br/>
                Firmen Email: {(data().company_email)}
            </Show>
        </div>
    )
}