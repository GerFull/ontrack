import React from 'react';
import HomePage from '../pages/homepage/homepage';
import Profile from '../pages/profile/profile';
import { BrowserRouter, Route, Switch ,Redirect} from 'react-router-dom';
import './App.css';
import Trip from '../pages/trip/trip';
import City from '../pages/city/city';
import Place from '../pages/place/place';
import FavoritesPlace from '../pages/favoritesPlace/favoritesPlace';
import ErrorPage from '../pages/errorPage/errorPage';
import CityAttraction from '../pages/cityAttraction/cityAttraction';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/profile/' component={Profile} />
        <Route path='/trip/' component={Trip} />
        <Route exact path='/city/:id' component={City} />
        <Route path='/place/' component={Place} />
        <Route path='/FavoritesPlace/' component={FavoritesPlace} />
        <Route path='/erorr' component={ErrorPage} />
        <Route path='/cityattraction/' component={CityAttraction} />
        <Redirect to='/erorr'/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
