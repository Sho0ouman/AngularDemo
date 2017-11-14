import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Department } from './department';
import { environment } from '../environments/environment';

const BASE_API_URL = environment.apiUrl;
const API_URL = BASE_API_URL + 'departments';

@Injectable()
export class DepartmentApiService {
  constructor(private http: Http) { }

  public getAll(): Observable<Department[]> {
    return this.http
      .get(API_URL)
      .map(response => {
        const deps = response.json();
        return deps.map((dep) => new Department(dep));
      })
      .catch(this.handleError);
  }

  public create(dep: Department) {
    return this.http
      .post(API_URL + '/add', dep)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public getById(id: number) {
    return this.http
      .get(API_URL + '/' + id)
      .map(response => {
        return new Department(response.json());
      })
      .catch(this.handleError);
  }

  public update(dep: Department) {
    return this.http
      .post(API_URL + '/update', dep)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public delete(id: number) {
    return this.http
      .post(API_URL + '/delete/' + id, null)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('DepartmentApiService::handleError', error);
    return Observable.throw(error);
  }
}
