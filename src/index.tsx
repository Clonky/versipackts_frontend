/* @refresh reload */
import { render } from 'solid-js/web';
import { lazy } from "solid-js";

import './index.css';
import App from './App';
import { Router, Routes, Route } from "@solidjs/router";
import { Login } from './pages/login';
import { RegisterPage } from './pages/register';
import { UserData } from './pages/users/[id].data.ts';
import { UserView } from './pages/users/[id].tsx';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}


render(() => (
<Router>
  <Routes>
   <Route path="/" component={App} />
   <Route path="/login" component={Login} />
   <Route path="/register" component={RegisterPage} />
   <Route path="/users/:id" component={UserView} data={UserData} />
  </Routes>
</Router>
),
 root!);
