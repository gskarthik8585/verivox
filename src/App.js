
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './sections/header';
import Content from './sections/content';
import { routesListFn } from './routes';
import { TariffListProvider } from './context/tariffListContext';

const App = () => {
  return (
    <TariffListProvider>
      <Router>
      <div className="App">
        <Header />
        <Content>
          <Switch>
            {
              routesListFn().map((route, index) => (
                <Route key={`route_${index}`} {...route} />
              ))
            }
          </Switch>
        </Content>
      </div>
      </Router>
    </TariffListProvider>
  );
}

export default App;
