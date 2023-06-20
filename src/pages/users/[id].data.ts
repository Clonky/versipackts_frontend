import { RouteDataFuncArgs } from "@solidjs/router";
import { createResource } from "solid-js";

export async function fetchUser(id: string) {
    const response = await fetch(`http://localhost:8001/customers?id=${id}`);
    return (await response.json())
}

export function UserData({params, location, navigate, data}:RouteDataFuncArgs) {
    const [user] = createResource(() => params.id, fetchUser);
    return user;
}