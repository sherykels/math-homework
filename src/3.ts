import numpy as np
def get_random_ts(size):
    # Generate random time series data
    data = []
    for i in range(size):
        x = np.random.normal(0, 1)
        data.append(x)
    return data