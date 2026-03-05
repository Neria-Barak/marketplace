export class User {
    public id: number;
    static lastId = 0;

    constructor(private name: string) {
        this.id = ++User.lastId;
    }
}