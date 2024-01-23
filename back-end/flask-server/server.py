# server.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import chatgpt  # Import your custom module (chatgpt.py)

app = Flask(__name__)
CORS(app)

@app.route("/members", methods=["GET"])
def get_members():
    # Call the GPT module to get the processed result
    processed_result = chatgpt.process_text("This text came from Backend localhost:5000/members")

    # Include the processed result in the JSON response
    return jsonify({"members": [processed_result]})

@app.route("/send-text", methods=["POST"])
def receive_text():
    data = request.get_json()
    received_text = data.get("text", "")

    # Get the current timestamp
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # Print or log the received text and timestamp
    print(f"Received text '{received_text}' at {timestamp}")

    # Save the received text and timestamp to a text file
    save_text_to_file(received_text, timestamp)

    # Process the received text using the gpt module
    processed_result = chatgpt.process_text(received_text)
    print("Processed Result in server.py:", processed_result)

    return jsonify({"status": "success", "received_text": received_text, "timestamp": timestamp, "processed_result": processed_result})

def save_text_to_file(text, timestamp):
    try:
        with open("received_text_with_timestamp.txt", "a") as file:
            file.write(f"{timestamp}: {text}\n")
        print("Text and timestamp saved to file successfully.")
    except Exception as e:
        print("Error saving text and timestamp to file:", str(e))

if __name__ == "__main__":
    app.run(debug=True)
