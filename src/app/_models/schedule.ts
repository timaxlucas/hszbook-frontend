
export class Schedule {
    date: Date;
    link: string;
    running: boolean;
    kid: string;
    email: string;
    data: object;
    day: string;
    time: string;
    price: string;
    status: string;
    result: Result;
    sport: string;
    user: string;
}

class Result {
    message: string;
    success: boolean;
}
