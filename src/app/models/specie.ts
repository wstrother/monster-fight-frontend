import { Color } from './color';

export class Specie {
    id: number;
    name: string;
    color: Color;

    life: number;
    energy: number;
    defense: number;
    special: number;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;

        this.color = new Color(data.color);

        this.life = data.base_life
        this.energy = data.base_energy
        this.defense = data.base_defense
        this.special = data.base_special
    }
}
