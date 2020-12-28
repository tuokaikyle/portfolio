import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Front from './pages/Front';
import Projects from './pages/Project';
import Resume from './pages/Resume';
import Information from './components/Information';
import Header from './components/Header';
import Demo from './utils/Demo';

function App() {
  return (
    <Router>
      <div className='App relative pb-5 min-h-screen bg-gray-100 font-body'>
        <Header />
        <div className='xl:flex w-11/12 2xl:w-4/5 mx-auto my-10 md:my-20 '>
          <div className='w-11/12 xl:w-3/4 bg-content lg:order-2 border mx-auto mb-10'>
            <Switch>
              <Route exact path='/' component={Front} />
              <Route path='/about' component={About} />
              <Route path='/project' component={Projects} />
              <Route path='/contact' component={Contact} />
              <Route path='/resume' component={Resume} />
              {/* <Route path='/demo' component={Demo} /> */}
            </Switch>
          </div>
          <div className='w-3/4 xl:w-1/4 text-center xl:text-left lg:order-1 mx-auto xl:pr-12'>
            <Information />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
