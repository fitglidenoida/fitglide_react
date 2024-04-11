import React, { useState, useEffect } from 'react';
import WeightLossQuiz from '../../src/component/weightlossquiz'; // Import the WeightLossQuiz component
import "../../src/styles/weightloss.css";

const WeightLoss = ({ visitorName }) => {
    const [showQuiz, setShowQuiz] = useState(false);

    const capitalizeName = (name) => {
        return name.replace(/\b\w/g, (char) => char.toUpperCase());
    };

    const handlePlayButtonClick = () => {
        setShowQuiz(true); // Set showQuiz state to true when the button is clicked
    };

    useEffect(() => {
        const lineTimeout1 = setTimeout(() => {
            document.getElementById('line1').classList.add('fade-in');
        }, 1000);

        const lineTimeout2 = setTimeout(() => {
            document.getElementById('line2').classList.add('fade-in');
        }, 2000);

        const lineTimeout3 = setTimeout(() => {
            document.getElementById('line3').classList.add('fade-in');
        }, 3000);

        const lineTimeout4 = setTimeout(() => {
            document.getElementById('line4').classList.add('fade-in');
        }, 4000);

        return () => {
            clearTimeout(lineTimeout1);
            clearTimeout(lineTimeout2);
            clearTimeout(lineTimeout3);
            clearTimeout(lineTimeout4);
        };
    }, []);

    return (
        <div className="weight-loss">
            {showQuiz ? (
                <WeightLossQuiz />
            ) : (
                <>
                    <p id="line1" className="weight-loss-text">Congratulations, {capitalizeName(visitorName)}! 🌟 Your fitness journey begins now!</p>
                    <p id="line2" className="weight-loss-text">By joining us, you're already on the path to success.</p>
                    <p id="line3" className="weight-loss-text">India's obesity rates are exploding, rivaling China for the world's #2 spot. Studies show a near-tripling of obesity since 1990, fueled by our changing lifestyles, unhealthy diets, and decreasing physical activity.</p>
                    <p id="line4" className="weight-loss-text">"Discover weight's impact, earn FitCoins! Play the game for rewards and start your wellness journey!"</p>
                    <button className="play-button" onClick={handlePlayButtonClick}>Let's Play!</button>
                </>
            )}
        </div>
    );
};

export default WeightLoss;
