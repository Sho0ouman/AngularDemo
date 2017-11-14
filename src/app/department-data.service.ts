import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Department } from './department';
import { DepartmentApiService } from './department-api.service';

@Injectable()
export class DepartmentDataService {

  constructor(private api: DepartmentApiService) { }

  getAll(): Observable<Department[]> {
    return this.api.getAll();
  }

  create(dep: Department): Observable<any> {
    return this.api.create(dep);
  }

  edit(dep: Department): Observable<any> {
    return this.api.update(dep);
  }

  delete(id: number): Observable<any> {
    return this.api.delete(id);
  }
}
