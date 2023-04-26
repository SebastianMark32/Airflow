/**
 * Model for the Flight data to be sent and recieved
 * @author Zach East
 */
export interface Flight{
    id:Number,
    userid: Number,
    tripname: String,

    flight1: String,
    cost1: Number,
    time1: Date,
    time12:String,

    flight2: String,
    cost2: Number,
    time2: Date,
    time22:String
}