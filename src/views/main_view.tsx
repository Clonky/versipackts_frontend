import { Component, createSignal, JSXElement } from "solid-js"

enum View {
    Home = "home",
    Test = "test",
};

const HomeView = () => {
    return <div> HOME </div>;
}


export const MainView: Component = (_props) => {
    const [CurrView, setCurrView] = createSignal(HomeView)
    let View = CurrView();

    return (
        <View />
    );

}
