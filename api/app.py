import os

from flask import Flask, flash, jsonify, redirect, render_template, request, session

app = Flask(__name__)
assignments = {}

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        message = ""
        assignment = request.form.get("assignment")
        time = request.form.get("time")
        if not assignment:
            message = "Missing assignment"
        elif not time:
            message = "Missing time"
        else:
            assignments.update({assignment: time})


@app.route("/review", methods=["GET", "POST"]) 
def review():
    if request.method == "POST":
        message = ""
        assignment = request.form.get("assignment")
        time = request.form.get("time")
        if not assignment:
            message = "Missing assignment"
        elif not time:
            message = "Missing time"
        else:
            assignments.update({assignment: time})

@app.route("/getassignments", methods=["GET", "POST"])
def getassignments():
    if request.method == "POST":
        json_object = json.dumps(assignments, indent = 4) 
        return json_object