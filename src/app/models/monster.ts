import { Specie } from './specie';
import { Color } from './color';
import { Stat } from './stat';

export class Monster {
    specie: Specie;
    stats: Stat[];

    constructor(data: any) {
        this.specie = new Specie(data.species);
        this.stats = data.stats.map((s: any) => new Stat(s))
        this.adjustStats();
    }

    // apply base species stat values
    adjustStats(): void {
        this.life.dv += this.specie.life;
        this.energy.dv += this.specie.energy
        this.defense.dv += this.specie.defense
        this.special.dv += this.specie.special
    }

    getStat(name: string): Stat {
        return this.stats.filter((s: Stat) => s.name == name.toUpperCase())[0];
    }

    get life(): Stat {
        return this.getStat("life");
    }

    get energy(): Stat {
        return this.getStat("energy");
    }

    get defense(): Stat {
        return this.getStat("defense");
    }

    get special(): Stat {
        return this.getStat("special");
    }

    get color(): Color {
        return this.specie.color;
    }
}
