import json
import os
class MetricsStore:
    def __init__(self, file_path='quality-history.json'):
        self.file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', file_path))
    def get_last_two_scores(self):
        if not os.path.exists(self.file_path): return None, None
        with open(self.file_path, 'r', encoding='utf-8') as f:
            hist = json.load(f)
            return (hist[-2]['score'], hist[-1]['score']) if len(hist) >= 2 else (None, None)