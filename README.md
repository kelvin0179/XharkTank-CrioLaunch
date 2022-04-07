
#  XharkTank 

This is backend for the application XharkTank, where entrepreneurs from all around can pitch their unique ideas and investors can offer them an investment in exchange of some equity of their company.

- Pitch your one in a million idea to the panel of sharks.
- Invest in the company which is going to be the next Big thing.

Live Deployed [here](https://xharktank-crio-do.herokuapp.com/).

## Stack



- [Node.js](https://nodejs.org/) - evented I/O for the backend
- [Express](https://www.npmjs.com/package/express) - fast node.js network app framework
- [MongoDB](https://www.mongodb.com) - cross-platform document-oriented database program


## Installation

* XharkTank requires [Node.js](https://nodejs.org/) v14+ and [MongoDB](https://www.mongodb.com) v4+ to run.

### Install the dependencies.
```sh
cd mohitjaiswal819-ME_BUILDOUT_XHARKTANK/
npm install
```
### Setup environments variables.
* Inside the config folder , set your enviroment variables (`PORT` and `MongoURI`) 

```sh
cd config/
```
### Start the server
```sh
npm run start
```
## File Structure
```sh
.
├── _CRIO_
			  ├── metadata.json
├── assessment
			  ├── main.py
			  ├── requirements.txt
├── config 
│             ├── config.env
│             ├── db.js
├── models                        
│             ├── investor.js
			  ├── pitch.js
├── routes                        
│             ├── index.js
├── server.js

├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── server_run.sh
├── setup.sh
```
## Features
### Endpoints 

```sh
GET /pitches
```
#### Response
* Returns `JSON` of all pitches in reverse chronological  order.

```javascript
[
   {
      "id":string,
      "entrepreneur":string,
      "pitchTitle":string,
      "pitchIdea":string,
      "askAmount":float,
      "equity":float,
      "offers":[
         {
            "id":string,
            "investor":string,
            "amount":float,
            "equity":float,
            "comment":string
         }
      ]
   }
]
```
| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 500 | `INTERNAL SERVER ERROR` |
---
```sh
GET /pitches/<pitch_id>
```
#### Response
* Returns `JSON` of a pitch.

```javascript
{
      "id":string,
      "entrepreneur":string,
      "pitchTitle":string,
      "pitchIdea":string,
      "askAmount":float,
      "equity":float,
      "offers":[
         {
            "id":string,
            "investor":string,
            "amount":float,
            "equity":float,
            "comment":string
         }
      ]
   }
```
| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |
---
```sh
POST /pitches
```
#### Response
* Returns `id` of the saved entry.
```javascript
{
  "id" : string
}
```
| Status Code | Description |
| :--- | :--- |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 500 | `INTERNAL SERVER ERROR` |
---
```sh
POST /pitches/<pitch_id>/makeOffer
```
#### Response
* Returns `id` of the saved entry.
```javascript
{
  "id" : string
}
```
| Status Code | Description |
| :--- | :--- |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |
---

## Deployment


### Heroku Deployment
```sh
heroku login -i
heroku git:remote -a <your-app-name>
git push heroku master
```
Set up environment variables 
```sh
heroku config:set ENV_VAR=<value>
```
## Authors
* **Mohit Jaiswal** - *Initial work* - [kelvin0179](https://github.com/kelvin0179)
