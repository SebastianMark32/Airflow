/**
 * This models the functions and data format to be
 * used by the flightReserve controller and route files
 * @author Zach East
 */
const db = require('../util/database');

//Export all functions of this class 
module.exports = class FlightReserve {

    //Constructor for object
    constructor(user, tripname, flight1, cost1, time1, flight2, cost2, time2){
        this.user = user;
        this.tripname = tripname;
        this.flight1 = flight1;
        this.cost1 = cost1;
        this.time1 = time1;
        this.flight2 = flight2;
        this.cost2 = cost2;
        this.time2 = time2;
    }

    //Function to pass pull specific entries in database by user
    static fetchAll(user)
    {
        return db.execute(
            `SELECT * FROM Airflow.flights WHERE user = ${user}`
        );
    }

    //Function to insert new entry into database using values from passed objects
    static save(post){
        return db.execute(
            'INSERT INTO Airflow.flights (user, tripname, flight1, cost1, time1, flight2, cost2, time2) VALUES (?,?,?,?,?, ?,?,?)',
            [post.user, post.tripname, post.flight1, post.cost1, post.time1, post.flight2, post.cost2, post.time2]
        );
    }
}