"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HockeyCoach_1 = require("./HockeyCoach");
var PingPongCoach_1 = require("./PingPongCoach");
var myHockeyCoach = new HockeyCoach_1.HockeyCoach();
var myPingPongCoach = new PingPongCoach_1.PingPongCoach();
// declare array for coaches
var theCoaches = [];
// add the coaches to the array
theCoaches.push(myHockeyCoach);
theCoaches.push(myPingPongCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var tempCoach = theCoaches_1[_i];
    console.log(tempCoach.getDailyWorkout());
}
