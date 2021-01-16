export class Color {
    id: number;
    name: string;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;

        console.log(this);
        return this
    }
}
