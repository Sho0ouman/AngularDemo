export class Department {
    id: number;
    name: string;
    managerId: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
