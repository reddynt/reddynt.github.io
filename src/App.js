import Header from './header';
import Timeline from './Timeline/timeline.js';
import { SocialBar } from './SocialBar/social-bar.js';
import { Skills } from './Skills/skills.js';
import { Projects } from './Projects/projects';
import './App.css';

function App() {
  return (
    <div class="App">
      <Header />
      <Timeline />
      <SocialBar />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
