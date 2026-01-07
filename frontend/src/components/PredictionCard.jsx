import React from 'react';

const PredictionCard = ({ prediction }) => {
    const isValueBet = prediction.value_roi > 2;

    return (
        <div className="glass-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9em' }}>{prediction.sport} • {prediction.league}</span>
                {isValueBet && <span className="value-badge">+{prediction.value_roi}% ROI</span>}
            </div>

            <div style={{ textAlign: 'center', margin: '10px 0' }}>
                <h3 style={{ fontSize: '1.2em', marginBottom: '8px' }}>{prediction.match}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9em' }}>{prediction.date}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '8px' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.8em', color: 'var(--text-muted)' }}>Prediction</div>
                    <div style={{ fontWeight: 'bold', color: 'var(--primary)' }}>{prediction.prediction}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.8em', color: 'var(--text-muted)' }}>AI Prob</div>
                    <div style={{ fontWeight: 'bold' }}>{prediction.ai_probability}%</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.8em', color: 'var(--text-muted)' }}>Odds</div>
                    <div style={{ fontWeight: 'bold', color: isValueBet ? 'var(--accent)' : 'white' }}>{prediction.bookmaker_odds}</div>
                </div>
            </div>

            <button className="btn-primary" style={{ width: '100%', marginTop: 'auto', padding: '10px' }}>
                Bet Now
            </button>
        </div>
    );
};

export default PredictionCard;
