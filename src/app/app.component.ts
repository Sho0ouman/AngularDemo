import { Component } from '@angular/core';
import { DepartmentDataService } from './department-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DepartmentDataService]
})
export class AppComponent {
  title = 'app';

  constructor(private departmentDataService: DepartmentDataService) { }

  get departments() {
    return this.departmentDataService.getAll();
  }
}
