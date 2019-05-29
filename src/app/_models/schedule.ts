
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
}

class Result {
    message: string;
    success: boolean;
}