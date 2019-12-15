
# accedo-vod-test

A simple Media App VOD (Video On-Demand) application that keeps track of a list of videos the user has watched.

## Getting Started

The landing page is a list of movies displaying in a horizontal carousel, which can play or display the movie information. It can be navigate using keyboard arrow keys (left, right, enter) and mouse click.

A movie player page will be routed when a user select a movie to play. If the movie is never watched before, it will start at the beginning otherwise it will start base on the last watch progress. Once the user is finished, it will automatically navigate back to the home page.

A view history is used to keep track of the user watching progress, which stored the date watched and played time. User can also delete its watch history.

### Installing
```
npm install
npm run client-install
```
```
npm run dev
```
Goto [http://localhost:3000/](http://localhost:3000/)

## Deployment

Heroku is used to host the application.

```
git push heroku master
```
Goto [https://accedo-vod-test.herokuapp.com/](https://accedo-vod-test.herokuapp.com/)

MongoDB
MongoDB Atlas is used for MongoDB cloud hosting. 

Collection : histories
```
| Key           | Value                                 | Type          |
| ------------- | ------------------------------------- | ------------- |
| _id           | ObjectId("5df254d042094e1257afd99e")  | Object        |  
| name          | a-million-ways-to-die-in-the-west     | String        |
| playSeconds   | 1592.215463                           | Double        |
| date          | 2019-12-14T14:24:57.799+00:00         | Date          |
```
