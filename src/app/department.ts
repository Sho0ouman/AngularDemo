export class Department {
    Id: number;
    Name: string;
    ManagerId: number;
    mode: string;

    constructor(values: Object = {}) {
        this.mode = 'display';
        Object.assign(this, values);
    }
}
