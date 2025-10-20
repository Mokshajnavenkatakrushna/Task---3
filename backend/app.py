from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

# In-memory "database"
records = []

# CRUD routes
@app.route("/records", methods=["GET"])
def get_records():
    query = request.args.get("search", "").lower()
    filtered = [r for r in records if query in r["name"].lower()]
    return jsonify(filtered)

@app.route("/records", methods=["POST"])
def create_record():
    data = request.json
    record = {"id": len(records)+1, "name": data["name"]}
    records.append(record)
    return jsonify(record), 201

@app.route("/records/<int:record_id>", methods=["DELETE"])
def delete_record(record_id):
    global records
    records = [r for r in records if r["id"] != record_id]
    return jsonify({"message": "Deleted"})

# Command execution
@app.route("/run-command", methods=["POST"])
def run_command():
    data = request.json
    command = data.get("command")
    try:
        result = subprocess.check_output(command, shell=True, stderr=subprocess.STDOUT, text=True)
        return jsonify({"output": result})
    except subprocess.CalledProcessError as e:
        return jsonify({"output": e.output}), 400

if __name__ == "__main__":
    app.run(debug=True, port=5001)
