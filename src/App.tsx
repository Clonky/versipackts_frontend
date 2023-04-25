import { Component, createSignal, Switch, Match } from 'solid-js';
import { NavBar } from './components/NavBar';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { RegisterPage } from './pages/register';
import { pageList } from './pages/pagelist';


const App: Component = () => {
    const [pageState, setPageState] = createSignal<pageList>(pageList.Home);

    return(
        <>
        <NavBar setter={setPageState} />
        <Switch>
            <Match when={(pageState() === pageList.Home)}>
                <Home username="Test"/>
            </Match>
            <Match when={pageState() == pageList.Login}>
                <Login />
            </Match>
            <Match when={pageState() == pageList.Register}>
                <RegisterPage />
            </Match>
        </Switch>
        </>
    );
};

export default App;
