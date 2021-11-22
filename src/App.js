import "./App.css";
import Home1 from "./components/home1";
import Nav from "./components/nav";
import Login from "./components/login";
import Posts from "./components/posts";
import Register from "./components/register";
import PageNotFound from "./components/pagenotfound";

import { Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import Complaints from "./components/complaints";
import AddAdmin from "./components/addadmin";
import Admin from "./components/admin";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/admin/add" component={AddAdmin} />
        <Route path="/admin" component={Admin} />
        <Route path="/posts" component={Posts} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home1} />
        <Redirect from="/home1" to="/" />
        <Route path="/complaints" component={Complaints} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
