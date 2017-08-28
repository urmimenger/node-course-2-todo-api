// const Mongoclient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to mongodb server");
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').deleteMany({ text: "Eat lunch" }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     return console.log("Unable to delete todos", err);
    // });

    db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
        console.log(result);
    }, (err) => {
        return console.log("Unable to delete todos", err);
    });

    // db.close();
});