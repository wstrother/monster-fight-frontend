export class Stat {
    name: string;
    increment: number;
    base: number;

    constructor(data: any) {
        this.name = data.name;
        this.increment = data.increment;
        this.base = data.base;
    }

    get value(): number {
        return this.increment * this.base;
    }
}
