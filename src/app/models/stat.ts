export class Stat {
    name: string;
    increment: number;
    dv: number;
    charDv: number = 0;

    constructor(data: any) {
        this.name = data.name;
        this.increment = data.increment;
        this.dv = data.base;
    }

    get value(): number {
        return this.increment * this.dv;
    }

    applyCharDv(value: number) {
        let newValue: number = this.charDv + value;
        if (newValue < 0) {
            throw "Can't lower this.charDv below 0";
        } else {
            this.charDv += value;
            this.dv += value;
        }
    }
}
