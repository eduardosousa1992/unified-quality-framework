class DriftDetector:
    @staticmethod
    def calculate_delta(current, previous):
        if previous is None or current is None: return 0
        return current - previous
    @staticmethod
    def has_regression(delta, threshold=-5.0):
        return delta <= threshold