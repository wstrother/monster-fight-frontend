import { Move } from './move';

export class MovePool {
    slot1: Move[] = [];
    slot2: Move[] = [];

    constructor(data: any) {
        data.first.forEach((m: any) => this.slot1.push(new Move(m)));
        data.second.forEach((m: any) => this.slot2.push(new Move(m)));
    }
}
