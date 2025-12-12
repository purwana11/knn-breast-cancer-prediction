from flask import Flask, render_template, request
import numpy as np
import pickle

app = Flask(__name__)

model = pickle.load(open("model_knn.pkl", "rb"))
scaler = pickle.load(open("scaler.pkl", "rb"))

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    # Ambil nilai dari form
    features = []
    for i in range(30):
        features.append(float(request.form.get(f"f{i}")))

    arr = np.array(features).reshape(1, -1)
    arr_scaled = scaler.transform(arr)

    prediction = model.predict(arr_scaled)[0]
    result = "Benign (Jinak)" if prediction == 1 else "Malignant (Ganas)"

    # Kirim ke halaman baru
    return render_template("result.html", hasil=result)

if __name__ == "__main__":
    app.run(debug=True)
