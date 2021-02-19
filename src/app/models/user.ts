export class User {
    username: String;
    id: Number;

    constructor(data: any) {
        this.username = data.username;
        this.id = data.id;
    }
}
