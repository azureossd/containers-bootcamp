from flask import Flask, request, jsonify
import os, sys, platform, json
app = Flask(__name__)

@app.route("/")
def home():
    if os.name == 'nt':
        hostname = platform.uname()[1]
    else: 
        hostname = os.uname()[1]

    response =  { 
            'Message': 'My Python container is running', 
            'Hostname': hostname, 
            'Python version':sys.version, 
            'Request Headers':dict(request.headers)
            }

    return jsonify(response)

if __name__ == '__main__':
    app.run()