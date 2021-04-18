import { Coach } from "./Coach";

export class PingPongCoach implements Coach {

    getDailyWorkout(): string {
        return "Practice your spin serve!";
    }

}