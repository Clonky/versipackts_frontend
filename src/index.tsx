/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { Router, Routes, Route } from "@solidjs/router";
import { pageList } from './pages/pagelist';
import { Login } from './pages/login';
import { RegisterPage } from './pages/register';

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
  </Routes>
</Router>
),
 root!);
