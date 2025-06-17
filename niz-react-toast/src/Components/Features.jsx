import React from 'react'
import '../App.css'

const Features = () => {
    return (
        <div className='features-section'>
            <div className="feature-points">
                <p className='point'><i class="material-symbols-outlined">priority</i> Ready to toast</p>
                <p className='point'><i class="material-symbols-outlined">priority</i> Ease of Use</p>
                <p className='point'><i class="material-symbols-outlined">priority</i> Inclusive</p>
                <p className='point'><i class="material-symbols-outlined">priority</i> Customizable</p>
                <p className='point'><i class="material-symbols-outlined">priority</i> Promise API</p>
            </div>

            <div className="install-steps">
                <div className="step">
                    <p className="num">1</p>
                    <p className="stepline">Install Package</p>
                    <code><span className='step1-word1'>npm</span> i <span className="step1-word2">niz-react-toast</span></code>
                </div>
                <div className="step">
                    <p className="num">2</p>
                    <p className="stepline">Add ToastCenter to your App</p>
                    <code>{"<div>"}<span className='step2-word1'>{"<ToastCenter/>"}</span>{"</div>"}</code>
                </div>
                <div className="step">
                    <p className="num">3</p>
                    <p className="stepline">Start toasting!</p>
                    <code><span className='step3-word1'>Toast</span>("Hello World")</code>
                </div>
                
            </div>
        </div>
    )
}

export default Features
