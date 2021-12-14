from random import random
from flask import Flask
import json, os
app = Flask(__name__)

f=open(os.path.dirname(os.path.realpath(__file__))+"\\Cleverland.json")
coordinate = json.load(f)
@app.route('/all')
def getall():  # put application's code here
    return str(coordinate['coordinates'])

def return_random():
    coordinate.find({})
    return {'coordinates': [random.choice(list(coordinate.find({}, {'_id': 0, 'coordinates': 1}))[0]["coordinates"])]}


if __name__ == '__main__':
    app.run()