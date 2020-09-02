import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'


const Home = () => <h1>Strona startowa</h1>;
const News = () => <h1>Aktualnosci</h1>;
const Contact = () => <h1>Kontakt do nas</h1>;

const ErrorPage = () => <h1>Strona nie instnieje</h1>;


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <nav>
              {/* <ul>
              <li> <a href="/">Start</a> </li>
              <li> <a href="/news">Aktualnosci</a> </li>
              <li> <a href="/contact">Kontakt</a> </li>
            </ul> */}
              <ul>
                <li> <NavLink to="/" exact>Start</NavLink> </li>
                <li> <NavLink to="/news">Aktualnosci</NavLink> </li>
                <li> <NavLink to="/contact">Kontakt</NavLink> </li>
              </ul>
            </nav>

          </header>
          <section>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/News" component={News} />
              <Route path="/contact" component={Contact} />
              <Route component={ErrorPage} />
            </Switch>

          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
