from flask import Flask, render_template, request, redirect, url_for, send_from_directory, Response, jsonify
import flask
import json
import os

app = flask.Flask(__name__)
data_path = "./data/"

@app.route('/data')
def send_data():
    json_list = []
    files = os.listdir(data_path + 'json/')
    for _file in files:
        json_open = json.load(open(data_path + 'json/' + _file, 'r'))
        json_list.append(json_open)
    return jsonify(json_list)


@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=5555)