import { Component, createResource } from "solid-js";
import { NavBar } from "../components/NavBar";
import { RouteDataFunc, RouteDataFuncArgs, useRouteData } from "@solidjs/router";
import  styles from "./userview.module.css";

async function fetchUser(id: string) {
    const response = await fetch(`http://localhost:8001/customers?id=${id}`)
    const result = await response.json();
    return result
}

export function UserData({params, location, navigate, data}:RouteDataFuncArgs) {
    console.log(params.id)
    const [user, {mutate, refetch}] = createResource(params.id, fetchUser)
    return user
}

const UserIdentityInfo = (payload: any) => {
    const user = useRouteData<typeof UserData>();
    console.log(user())
    return (
        <div class={`${styles.useridentityinfo}`}>
            <div class="name">Name: {user().company_name}</div>
            <div class="address">Adresse: {user().company_address}</div>
            <div class="email">Email: {user().company_email}</div>
        </div>
    )
}

export const UserView = (payload: any) => {

    return (
        <div>
            <UserIdentityInfo payload={payload}/>
        </div>
    )
}