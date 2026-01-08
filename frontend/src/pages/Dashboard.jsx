import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import PredictionCard from '../components/PredictionCard';

const Dashboard = () => {
    const [predictions, setPredictions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/predictions.json')
            .then(res => res.json())
            .then(data => {
                setPredictions(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Hero />

            <main className="container" style={{ paddingBottom: '80px' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '30px'
                }}>
                    <h2 id="predictions" style={{ fontSize: '2em', scrollMarginTop: '20px' }}>Live Value Bets</h2>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <span className="glass-card" style={{ padding: '8px 16px', fontSize: '0.9em' }}>Football</span>
                        <span className="glass-card" style={{ padding: '8px 16px', fontSize: '0.9em' }}>Tennis</span>
                        <span className="glass-card" style={{ padding: '8px 16px', fontSize: '0.9em' }}>NBA</span>
                    </div>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '50px' }}>Loading AI Models...</div>
                ) : (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '20px'
                    }}>
                        {predictions.map(pred => (
                            <PredictionCard key={pred.id} prediction={pred} />
                        ))}
                    </div>
                )}
            </main>

            <footer style={{
                textAlign: 'center',
                padding: '40px',
                borderTop: '1px solid var(--border)',
                color: 'var(--text-muted)'
            }}>
                <p>&copy; 2026 SportsAI Clone. All rights reserved.</p>
                <p style={{ fontSize: '0.8em', marginTop: '10px' }}>
                    Disclaimer: Betting involves risk. Please gamble responsibly.
                </p>
            </footer>
        </div>
    );
};

export default Dashboard;
