import React, { useState } from 'react';
import './LanguageSelector.css'; // CSS file for styles

const LanguageSelector = () => {
    const [language, setLanguage] = useState('');
    const [message, setMessage] = useState('');

    const fetchMessage = async () => {
        if (!language) {
            alert("Please select a language");
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/hello?language=${language}`);
            const text = await response.text();
            setMessage(text);
        } catch (error) {
            setMessage("Error fetching message");
        }
    };

    return (
        <div className="api-wrapper">
            <div className="api-card">
                <h1 className="api-header">Hello World API</h1>
                <label className="api-label">
                    Choose a Language:
                    <select 
                        value={language} 
                        onChange={(e) => setLanguage(e.target.value)} 
                        className="api-select">
                        <option value="">--Select--</option>
                        <option value="English">English</option>
                        <option value="French">French</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Spanish">Spanish</option>
                        <option value="German">German</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Chinese">Chinese</option>
                    </select>
                </label>
                <button onClick={fetchMessage} className="api-button">Get Message</button>
                {message && <p className="api-message">{message}</p>}
            </div>
        </div>
    );
};

export default LanguageSelector;