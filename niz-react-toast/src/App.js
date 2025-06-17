import './App.css';
import {ToastCenter} from  "niz-react-toast"
import Hero from './Components/Hero';
import Features from './Components/Features';
import Playground from './Components/Playground';
import { useState } from 'react';
import Visit, { Footer } from './Components/Visit';
import ToastCount from './Components/ToastCount';

function App() {

    const [position, setPosition] = useState('top-center'); // Default position
    const [theme, setTheme] = useState('solid'); // Default theme

    return (
        <div className="App">
            <ToastCenter position={position} theme={theme} autoClose={false} autoCloseDuration={2} />
            
            <Hero />
            <Features />
            <Playground setPosition={setPosition} setTheme={setTheme} />
            <Visit/>
            <ToastCount/>
            <Footer/>
        </div>
    );
}

export default App;



// jsx

// j