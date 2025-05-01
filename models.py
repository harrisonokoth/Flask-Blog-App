# models.py

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Post(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(150), nullable=False)

    content = db.Column(db.Text, nullable=False)

    author = db.Column(db.String(80), nullable=False)

    date = db.Column(db.String(50), nullable=False)

    image = db.Column(db.String(120), nullable=True)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    username = db.Column(db.String(80), unique=True, nullable=False)

    email = db.Column(db.String(120), unique=True, nullable=False)

    password = db.Column(db.String(200), nullable=False)




