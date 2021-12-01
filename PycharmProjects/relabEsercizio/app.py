import certifi as certifi
from flask import Flask
from flask import jsonify
from flask import request
import pymongo
from flask_cors import CORS

app = Flask(__name__)

# Stringa di connessione al DB
client = pymongo.MongoClient(
    "mongodb+srv://user_spiegazioni:2xR9laRHWUaSUDhi@cluster0.7ftto.mongodb.net/relab?retryWrites=true&w=majority", tlsCAFile=certifi.where())

# Per rispondere alle chiamate cross origin
CORS(app)

# Annotation that allows the function to be hit at the specific URL.
@app.route("/")
# Generic Python functino that returns "Hello world!"
def index():
    return "Hello ciao"

# Questa route effettua una find() su tutto il DB (si limita ai primi 100 risultati)
@app.route('/addresses', methods=['GET'])
def get_all_addresses():
    collection = client.relab.Mil4326WKT
    query = collection.find({"SEZ" : "1062"}).limit(10)
    return jsonify({'result': list(query)})

# Checks to see if the name of the package is the run as the main package.
if __name__ == "__main__":
    # Runs the Flask application only if the main.py file is being run.
    app.run()
