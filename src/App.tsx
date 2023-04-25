import { Component } from 'solid-js';
import NavBar from './components/NavBar';


const App: Component = () => {
    { match, getParams } = useRouter();
  return (
    <NavBar />
    <Switch>
        <Match when={match("", /^?$/}> <Home /> </Match>
    </Switch>
    );
};

export default App;
