// React
import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import Route from 'react-router-dom/Route';
import Router from 'react-router-dom/Router';
import createBrowserHistory from 'history/createBrowserHistory';
import Switch from 'react-router-dom/Switch';

// Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// WebFont Loader
import WebfontLoader from '@dr-kobros/react-webfont-loader';

// Redux
import Provider from 'react-redux/lib/components/Provider';
import applyMiddleware from 'redux/lib/applyMiddleware';
import createStore from 'redux/lib/createStore';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

// Views
import Index from './views/Index/Index';
import Home from './views/Home/Home';
import Offers from './views/Offers/Offers';
import Offer from './views/Offer/Offer';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Volunteer from './views/VolunteerProfile/Volunteer';
import OrganizationRegister from './views/OrganizationRegister/OrganizationRegister';
import PersonRegister from './views/PersonRegister/PersonRegister';
import OrgProfile from './views/OrgProfile/OrgProfile';
import About from './views/About/About';

// Main styles import.
import './scss/global.scss';

// Color palette import.
import { colorPalette } from './utils/constants/styles';

// Middleware
/* eslint-disable no-underscore-dangle */
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

// Needed for onTouchTap (Material UI)
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: colorPalette,
  button: {
    height: 50,
    minwidth: 190,
  },
});

// WebFont Loader configuration.
const config = {
  google: {
    families: ['Roboto:300,400,700:latin,latin-ext'],
  },
};

const customHistory = createBrowserHistory();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <WebfontLoader config={config}>
      <Provider store={store}>
        <Router history={customHistory}>
          <Index>
            <Switch>
              <Route path="/offers/:id" component={Offer} />
              <Route path="/offers" component={Offers} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/volunteer" component={Volunteer} />              
              <Route path="/personregister" component={PersonRegister} />
              <Route path="/organizationregister" component={OrganizationRegister} />
              <Route path="/orgprofile" component={OrgProfile} />
              <Route path="/" component={Home} />
            </Switch>
          </Index>
        </Router>
      </Provider>
    </WebfontLoader>
  </MuiThemeProvider>,
  document.querySelector('.container'),
);
