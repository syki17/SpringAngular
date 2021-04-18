import { Coach } from "./Coach";
import { HockeyCoach } from "./HockeyCoach";
import { PingPongCoach } from "./PingPongCoach";

let myHockeyCoach = new HockeyCoach();
let myPingPongCoach = new PingPongCoach();

// declare array for coaches
let theCoaches: Coach[] = [];

// add the coaches to the array
theCoaches.push(myHockeyCoach);
theCoaches.push(myPingPongCoach);

for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
