import sys
import os
sys.path.append(os.getcwd())
from metrics_store import MetricsStore
from drift_detector import DriftDetector
from observability.alert_manager import AlertManager

def run_gate():
    store = MetricsStore()
    prev, curr = store.get_last_two_scores()
    if prev is None or curr is None: return
    delta = DriftDetector.calculate_delta(curr, prev)
    print(f"\n--- UQF QUALITY GATE ---\nScore: {curr}% | Delta: {delta:.2f}%")
    
    if DriftDetector.has_regression(delta):
        print("❌ [FAIL] Regressão detectada!")
        am = AlertManager()
        am.send_slack_alert("Bradesco_Production", prev, curr, delta)
        sys.exit(1)
    else:
        print("✅ [PASS] Qualidade estável.")
        sys.exit(0)
run_gate()