import React from 'react';
import Header from './components/Header';
import './styles.css'
import LeftBar from './components/Leftbar';
import Skills from './components/Skills';
import SkillsHeader from './components/Skills/skillsHeader';


const App = () => (
    <div className="App">
      <Header />
      <LeftBar />
      <SkillsHeader />
      <Skills />
    </div>
)

export default App;
