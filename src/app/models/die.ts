import { Color } from './color';


export class Die {
    color: Color;
    value: number;

    constructor(data: any) {
        this.value = data.value;
        this.color = new Color(data.color)
    }
}
