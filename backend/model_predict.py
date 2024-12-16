from flask import Flask, request, jsonify
import numpy as np
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import tensorflow as tf
import os

app = Flask(__name__)

def create_model():
    model = tf.keras.Sequential([
        tf.keras.layers.Input(shape=(224, 224, 3)),  # Input layer
        tf.keras.layers.Dense(128, activation='relu'),
        tf.keras.layers.Dense(10, activation='softmax')
    ])
    return model

# Load model weights
model = create_model()
weights_path = r"C:\Users\sairo\Downloads\model_weights33.h5"
model.load_weights(weights_path, by_name=True, skip_mismatch=True)

def preprocess_image(image_path):
    image = load_img(image_path, target_size=(224, 224))
    image = img_to_array(image) / 255.0  # Normalize the image to [0, 1]
    return np.expand_dims(image, axis=0)  # Add batch dimension

@app.route('/compare_images', methods=['POST'])
def compare_images():
    try:
        # Get the image files from the request
        image1 = request.files['image1']
        image2 = request.files['image2']

        # Save the uploaded images temporarily
        image1_path = './uploads/image1.jpg'
        image2_path = './uploads/image2.jpg'
        image1.save(image1_path)
        image2.save(image2_path)

        # Preprocess the images
        image1 = preprocess_image(image1_path)
        image2 = preprocess_image(image2_path)

        # Get features from the model
        feature1 = model.predict(image1).flatten()
        feature2 = model.predict(image2).flatten()

        # Calculate cosine similarity
        epsilon = 1e-8
        similarity = np.dot(feature1, feature2.T) / ((np.linalg.norm(feature1) * np.linalg.norm(feature2)) + epsilon)

        return jsonify({"similarity": float(similarity)})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)
