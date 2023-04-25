import { Component } from "solid-js"

type homeProps = { username: string }

export const Home: Component<homeProps> = (props) => {
    return (
    <div> Hello {props.username} </div>
    )
}
