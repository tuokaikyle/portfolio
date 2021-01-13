import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Contact from './pages/Contact';
import Front from './pages/Front';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Information from './components/Information';
import Header from './components/Header';
import Demo from './utils/Demo';

const { PUBLIC_URL } = process.env;

function App() {
  return (
    <Router basename={PUBLIC_URL}>
      <div className='App relative pb-5 min-h-screen bg-cool'>
        <Header />
        <div className='xl:flex md:w-11/12 2xl:w-4/5 mx-auto my-10 2xl:my-20'>
          <div className='md:w-11/12 xl:w-3/4 bg-content lg:order-2 border mx-auto mb-10 font-body'>
            <Switch>
              <Route exact path='/' component={Front} />
              <Route path='/projects' component={Projects} />
              <Route path='/contact' component={Contact} />
              <Route path='/resume' component={Resume} />
              {/* <Route path='/demo' component={Demo} /> */}
            </Switch>
          </div>
          <div className='w-11/12 xl:w-1/4 text-center xl:text-left lg:order-1 mx-auto xl:pr-12 font-header'>
            <Information />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
