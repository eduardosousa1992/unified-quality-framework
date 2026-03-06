import requests
import json
class AlertManager:
    def __init__(self, url="https://hooks.slack.com/services/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"):
        self.url = url
    def send_slack_alert(self, dataset, prev, curr, drift):
        payload = {
            "text": "🚨 *UQF QUALITY ALERT*",
            "attachments": [{
                "color": "#ff0000",
                "fields": [
                    {"title": "Dataset", "value": dataset, "short": True},
                    {"title": "Drift", "value": f"{drift:.2f}%", "short": True},
                    {"title": "Anterior", "value": f"{prev}%", "short": True},
                    {"title": "Atual", "value": f"{curr}%", "short": True}
                ]
            }]
        }
        requests.post(self.url, json=payload)
        print("🚀 [SUCCESS] Alerta disparado para o Slack!")