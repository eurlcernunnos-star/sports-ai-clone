import json
import time
import random
from datetime import datetime

# Configuration
OUTPUT_FILE = "data.json"
PAIRS = ["SOL/USDT", "BTC/USDT", "ETH/USDT", "JUP/USDT"]
TYPES = ["LONG", "SHORT", "NEUTRAL"]

def generate_signal():
    """Generates a random formatted signal."""
    pair = random.choice(PAIRS)
    signal_type = random.choice(TYPES)
    
    # Generate realistic prices
    if "BTC" in pair: price = random.uniform(42000, 45000)
    elif "ETH" in pair: price = random.uniform(2200, 2400)
    elif "SOL" in pair: price = random.uniform(90, 110)
    else: price = random.uniform(0.5, 2.0)

    return {
        "id": random.randint(1000, 9999),
        "pair": pair,
        "type": signal_type,
        "entry_price": round(price, 4),
        "confidence": random.randint(75, 99),
        "timestamp": datetime.now().strftime("%H:%M:%S")
    }

def main():
    print(f"Starting AlphaStream Data Feeder... Output: {OUTPUT_FILE}")
    
    history = []
    
    while True:
        # Create a new signal every cycle
        new_signal = generate_signal()
        
        # Keep last 5 signals
        history.insert(0, new_signal)
        history = history[:5]
        
        data = {
            "status": "ONLINE",
            "uptime": "99.9%",
            "next_cycle": "15s",
            "active_signals": history,
            "market_sentiment": random.choice(["BULLISH", "BEARISH", "NEUTRAL"]),
            "volatility_index": round(random.uniform(12, 25), 2)
        }
        
        try:
            with open(OUTPUT_FILE, "w") as f:
                json.dump(data, f, indent=4)
            print(f"Updated {OUTPUT_FILE} - Last Signal: {new_signal['pair']} {new_signal['type']}")
        except Exception as e:
            print(f"Error writing file: {e}")
            
        time.sleep(3) # Update every 3 seconds

if __name__ == "__main__":
    main()
