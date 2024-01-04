from flask_cors import CORS
from flask import Flask, jsonify, request
import json
import math

app = Flask(__name__)
CORS(app)

# Load data from JSON files
def load_json_data(file_path):
    try:
        with open(file_path) as file:
            return json.load(file)
    except Exception as e:
        print(f"Error loading {file_path}: {e}")
        return None

@app.route("/")
def home():
    return jsonify({})

@app.route("/matching_projects/<investor_id>")
def matching_projects(investor_id):
    investors = load_json_data('./data/investors.json')
    if not investors:
        return jsonify(error="unable to load investors"), 500

    projects = load_json_data('./data/projects.json')
    if not projects:
        return jsonify(error="unable to load projects"), 500

    investor = next((inv for inv in investors if inv['id'] == investor_id), None)
    if not investor:
        return jsonify(error="not found"), 404

    return jsonify({})

if __name__ == '__main__':
    app.run()
