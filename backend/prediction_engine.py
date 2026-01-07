import random
import datetime
import json

class PredictionEngine:
    def __init__(self):
        self.sports = {
            "Football": ["Premier League", "La Liga", "Serie A", "Champions League"],
            "Basketball": ["NBA", "EuroLeague"],
            "Tennis": ["ATP", "WTA"]
        }
        self.teams = {
            "Premier League": ["Arsenal", "Man City", "Liverpool", "Chelsea", "Man Utd", "Tottenham", "Newcastle", "Aston Villa"],
            "NBA": ["Lakers", "Celtics", "Warriors", "Nuggets", "Bucks", "Suns", "Heat", "Bulls"],
            "ATP": ["Alcaraz", "Djokovic", "Sinner", "Medvedev", "Zverev"]
        }

    def _generate_odds(self, win_prob):
        """Generates realistic bookmaker odds based on win probability + margin."""
        fair_odds = 1 / win_prob
        # Bookmaker margin between 3% and 7%
        margin = random.uniform(1.03, 1.07) 
        return round(fair_odds / margin, 2)

    def _calculate_roi(self, prob, odds):
        """Calculates expected Value/ROI."""
        # Value = (Probability * Odds) - 1
        expected_value = (prob * odds) - 1
        return round(expected_value * 100, 2)

    def generate_prediction(self):
        sport_type = random.choice(list(self.sports.keys()))
        league = random.choice(self.sports[sport_type])
        
        if sport_type == "Tennis":
            home, away = random.sample(self.teams["ATP"], 2)
        elif sport_type == "Basketball":
            home, away = random.sample(self.teams["NBA"], 2)
        else:
            home, away = random.sample(self.teams["Premier League"], 2)

        # AI "True" Probability (simulated)
        ai_home_prob = random.uniform(0.35, 0.85)
        ai_away_prob = 1.0 - ai_home_prob
        
        # Bookmaker "Market" Probability (slightly different to create value)
        market_bias = random.uniform(-0.15, 0.15)
        bookie_home_prob = max(0.1, min(0.9, ai_home_prob + market_bias))
        
        # Generate Odds
        home_odds = self._generate_odds(bookie_home_prob)
        
        # Calculate Value
        roi = self._calculate_roi(ai_home_prob, home_odds)
        
        # Determine confidence level
        confidence = "High" if roi > 5 else "Medium" if roi > 0 else "Low"
        
        match_time = datetime.datetime.now() + datetime.timedelta(hours=random.randint(1, 48))

        return {
            "id": f"{random.randint(1000, 9999)}",
            "sport": sport_type,
            "league": league,
            "match": f"{home} vs {away}",
            "date": match_time.strftime("%Y-%m-%d %H:%M"),
            "prediction": f"{home} Win",
            "ai_probability": round(ai_home_prob * 100, 1),
            "bookmaker_odds": home_odds,
            "value_roi": roi,
            "confidence": confidence
        }

    def get_predictions(self, count=10):
        # Generate a mix of predictions, ensuring some have positive value
        predictions = []
        for _ in range(count):
            pred = self.generate_prediction()
            # Artificially boost some to be "Value Bets" for the demo
            if len(predictions) < count / 2 and pred["value_roi"] < 2:
                 while pred["value_roi"] < 5:
                     pred = self.generate_prediction()
            predictions.append(pred)
        
        # Sort by ROI descending
        predictions.sort(key=lambda x: x["value_roi"], reverse=True)
        return predictions

if __name__ == "__main__":
    engine = PredictionEngine()
    preds = engine.get_predictions(5)
    print(json.dumps(preds, indent=2))
