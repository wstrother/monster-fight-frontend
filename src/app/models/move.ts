import { Color } from './color';
import { Die } from './die';


export class Move {
    id: number;
    name: string;
    color: Color;
    dice: Die[];

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;

        this.color = new Color(data.color);
        this.dice = data.dice.map((d: any) => new Die(d));
    }
}
