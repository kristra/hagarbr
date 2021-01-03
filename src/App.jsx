import { Route, Switch } from 'react-router-dom';

import Header from './components/common/Header';
import Resume from './components/resume/Resume';
import Post from './components/post/Post';

import './App.css';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route path="/post/:slug/:id" component={Post} />
        <Route component={Resume} />
      </Switch>
    </div>
  );
};

export default App;
