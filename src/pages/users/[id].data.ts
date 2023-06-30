import { RouteDataFuncArgs } from "@solidjs/router";
import { createResource } from "solid-js";

export type PublicUserData = {
    company_name: String,
    company_address: String,
    company_email: String,
}

export async function fetchUser(id: string) {
    const response = await fetch(`http://192.168.178.41:8001/customers?id=${id}`);
    return (await response.json())
}

export function UserData({params, location, navigate, data}:RouteDataFuncArgs) {
    const [user] = createResource(() => params.id, fetchUser);
    return user;
}