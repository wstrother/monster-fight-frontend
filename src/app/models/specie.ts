import { Color } from '../models/color';

export class Specie {
    id: number;
    name: string;
    color: Color;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;

        this.color = new Color(data.color);
    }

    // deserialize(data: any) {
    //     this.id = data.id;
    //     this.name = data.name;

    //     console.log(this);
    //     this.color = new Color().deserialize(data.color);

    //     return this
    // }
}
