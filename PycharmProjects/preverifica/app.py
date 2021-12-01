from flask import Flask
import json, os
app = Flask(__name__)

f=open(os.path.dirname(os.path.realpath(__file__))+"\\pokemon\\tokyo.json")
coordinate = json.load(f)
@app.route('/all')
def getall():  # put application's code here
    return coordinate


if __name__ == '__main__':
    app.run()
