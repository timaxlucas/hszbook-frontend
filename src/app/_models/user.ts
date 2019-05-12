import { Role } from ".";

export class User {
    email: string;
    roles: Array<Role>;
    token: string;
}