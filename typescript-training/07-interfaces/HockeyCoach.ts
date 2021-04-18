import { Coach } from "./Coach";

export class HockeyCoach implements Coach {

    getDailyWorkout(): string {
        return "Practice breakouts!";
    }

}