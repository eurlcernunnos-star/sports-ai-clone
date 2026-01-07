import json
import os
from prediction_engine import PredictionEngine

def main():
    print("Initializing AI Prediction Engine...")
    engine = PredictionEngine()
    
    print("Analyzing markets...")
    predictions = engine.get_predictions(count=12)
    
    output_path = "../frontend/public/predictions.json"
    
    # Ensure directory exists
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    with open(output_path, "w") as f:
        json.dump(predictions, f, indent=2)
    
    print(f"Generated {len(predictions)} predictions to {output_path}")

if __name__ == "__main__":
    main()
