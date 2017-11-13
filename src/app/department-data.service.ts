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
}
