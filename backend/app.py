import pymongo
from pymongo import MongoClient
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
client = MongoClient('mongodb+srv://rauth:dapass@cluster0.ec1wg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

@app.route("/userExists", methods=['POST'])
def user_exist():
    user_info = request.get_json()
    db = client.userbase
    users = db["users"]
    if users.find_one({"netid": user_info["netid"]}) is not None:
        return True
    return False

@app.route("/addUser", methods=['POST'])
def add_user():
    user_info = request.get_json()
    db = client.userbase
    users = db["users"]
    if users.find_one({"netid": user_info["netid"]}) is not None:
        return "user exists"
    new_user = {
        "netid": user_info["netid"],
        "nonRutgersEmail": user_info["nonRutgersEmail"],
        "fullName": user_info["fullName"],
        "gradYear": user_info["gradYear"],
        "degreeType": user_info["degreeType"],
        "permissions": [

        ]
    }
    users.insert_one(new_user)
    return "success"

@app.route("/editUser", methods=['POST'])
def edit_user():
    user_info = request.get_json()
    db = client.userbase
    users = db["users"]
    details = {
        "nonRutgersEmail": user_info["nonRutgersEmail"],
        "fullName": user_info["fullName"],
        "gradYear": user_info["gradYear"],
        "degreeType": user_info["degreeType"],
        "permissions": user_info["permissions"]
    }
    user = users.find_one({"netid": user_info["netid"]})
    users.update_one(user, {"$set": details})
    return "success"

@app.route("/getUser", methods=['GET'])
def get_user():
    net_id = request.args.get("netid")
    db = client.userbase
    users = db["users"]
    user_info = users.find_one({"netid": net_id})
    if user_info is None:
        return jsonify({"success": False})
    return_data = {
        "success": True,
        "netid": user_info["netid"],
        "nonRutgersEmail": user_info["nonRutgersEmail"],
        "fullName": user_info["fullName"],
        "gradYear": user_info["gradYear"],
        "degreeType": user_info["degreeType"],
        "permissions": user_info["permissions"]
    }
    return jsonify(return_data)

if __name__ == "__main__":
    app.run()