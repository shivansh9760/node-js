# Node DevOps Project

This project demonstrates containerizing a Node.js application using Docker Compose with MongoDB and Redis.

## Tech Stack

Node.js
Docker
Docker Compose
MongoDB
Redis

## Project Setup

Clone repository

git clone https://github.com/Abhisheksaini23/node-devops-project.git

cd node-devops-project

Create .env file

PORT=8090
MONGO_URI=mongodb://mongo:27017/devopsdb
REDIS_HOST=redis
REDIS_PORT=6379

Run the application

docker compose up --build

## Access Application

http://localhost:8090

## Health Check

http://localhost:8090/health

## Services

Node.js Application
MongoDB Database
Redis Cache
