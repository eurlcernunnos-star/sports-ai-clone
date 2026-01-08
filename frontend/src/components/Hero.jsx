import React from 'react';

const Hero = () => {
    return (
        <section style={{
            padding: '100px 20px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%)',
                zIndex: -1
            }}></div>

            <div className="container">
                <h1 className="text-gradient" style={{
                    fontSize: '4em',
                    marginBottom: '20px',
                    lineHeight: '1.1',
                    letterSpacing: '-1px'
                }}>
                    Beat the Bookmakers<br />with AI Precision
                </h1>
                <p style={{
                    fontSize: '1.2em',
                    color: 'var(--text-muted)',
                    maxWidth: '600px',
                    margin: '0 auto 40px'
                }}>
                    Our advanced machine learning models analyze thousands of data points to find value bets with positive expected return.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <button
                        className="btn-primary"
                        onClick={() => document.getElementById('predictions')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Get Free Predictions
                    </button>
                    <button className="glass-card" style={{
                        padding: '12px 24px',
                        color: 'white',
                        fontWeight: '600',
                        cursor: 'pointer'
                    }}
                        onClick={() => window.alert("ROI Performance: +124% Last Month\n(This is a demo feature)")}
                    >
                        View ROI Performance
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
