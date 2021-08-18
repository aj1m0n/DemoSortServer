from flask import Flask, render_template, request, redirect, url_for, send_from_directory, Response, jsonify
import flask
import json


app = flask.Flask(__name__)
data_path = "./data/"


@app.route('/images/<image_id>')
def send_image(image_id):
    f = open(data_path + 'images/' + str(image_id) + '.jpg', 'rb')
    image = f.read()
    return Response(response=image, content_type='image/png')

@app.route('/data')
def send_data():
    _i = 1 
    _j = 0
    id_list = []
    date_list = []
    direction_list = []
    json_data = {}
    while 1:
        try:
            json_open = json.load(open(data_path + 'json/' + str(_i) + '.json', 'r'))
            id_list.append(json_open["id"])
            date_list.append(json_open["date"])
            direction_list.append(json_open["direction"])
        except:
            _j += 1
            if _j >= 4:
                json_data["id_list"] = id_list
                json_data["date_list"] = date_list
                json_data["direction"] = direction_list
                return jsonify(json_data)
        _i += 1

@app.route('/')
def index():
    return render_template('index.html')
    
if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=5555)