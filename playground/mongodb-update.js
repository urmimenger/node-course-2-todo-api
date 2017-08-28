// const Mongoclient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to mongodb server");
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').findOneAndUpdate({ text: "Eat lunch" }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     return console.log("Unable to update todos", err);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59a3c09d80a0210e24f2f719')
    }, {
        $set: {
            name: "Andrew"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }, (err) => {
        return console.log("Unable to update todos", err);
    });

    // db.close();
});

// "59a3c09d80a0210e24f2f719"