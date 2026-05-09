
import {Routes,Route} from 'react-router-dom';

import Home from './pages/Home';
import Project from './pages/Project'
import Contact from './pages/Contact';
import Skill from './pages/Skill'
import Navbar from './components/Navbar';
import Messages from './pages/Messages';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
                <Route path="/message" element={<Messages />} />
      </Routes>
    </div>
  );
};

export default App;
