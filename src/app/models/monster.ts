import { Specie } from './specie';
import { Color } from './color';
import { Stat } from './stat';

export class Monster {
    specie: Specie;
    stats: Stat[];

    constructor(data: any) {
        this.specie = new Specie(data.species);
        this.stats = data.stats.map((s: any) => new Stat(s))
    }

    get life(): Stat {
        return this.stats.filter((s: Stat) => s.name == "LIFE")[0];
    }

    get energy(): Stat {
        return this.stats.filter((s: Stat) => s.name == "ENERGY")[0];
    }

    get defense(): Stat {
        return this.stats.filter((s: Stat) => s.name == "DEFENSE")[0];
    }

    get special(): Stat {
        return this.stats.filter((s: Stat) => s.name == "SPECIAL")[0];
    }

    get color(): Color {
        return this.specie.color;
    }
}
