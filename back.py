# app.py
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin
from pdff import extract
from retrieval import get_info
import os
import json

app = Flask(__name__)

cors = CORS(app)

# Configure the upload folder
app.config["UPLOAD_FOLDER"] = "uploads"
os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)


@app.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file part"})

    file = request.files["file"]
    print(file)
    if file.filename == "":
        return jsonify({"error": "No selected file"})

    # Save the file to the upload folder
    file.save(os.path.join(app.config["UPLOAD_FOLDER"], file.filename))
    print("file saved")
    pp = os.listdir(r"uploads")
    os.rename(f"uploads/{pp[0]}", f"uploads/temp.pdf")
    pp = os.listdir(r"uploads")
    print("No issue till now")
    data = extract(f"uploads/{pp[0]}")

    # print(data)
    print("data extracted")
    details = get_info(data)
    # print(type(details))
    print("details retrieved")
    os.remove(f"uploads/{pp[0]}")
    try:
        print("Response message sent")
        return jsonify({"message": "File uploaded successfully", "info": details})
    except Exception as e:
        print(e)


if __name__ == "__main__":
    app.run(debug=True, port=6969)
