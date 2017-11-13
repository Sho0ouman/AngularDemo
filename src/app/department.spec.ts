import { Department } from './department';

describe('Department', () => {
  it('should create an instance', () => {
    expect(new Department()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const dep = new Department({
      id: 1,
      name: 'IT',
      managerId: 2
    });
    expect(dep.id).toEqual(1);
    expect(dep.name).toEqual('IT');
    expect(dep.managerId).toEqual(2);
  });
});
