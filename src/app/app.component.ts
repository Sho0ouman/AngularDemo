import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DepartmentDataService } from './department-data.service';
import { Department } from './department';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DepartmentDataService]
})
export class AppComponent {
  title = 'app';
  departments: Department[] = [];
  newDep: Department;
  showMsg = false;
  createMode = false;
  msg: string;
  displayedColumns = ['Id', 'Name', 'Actions'];
  dataSource: MatTableDataSource<Department>;
  constructor(private departmentDataService: DepartmentDataService) { this.newDep = new Department(); }

  public ngOnInit(): void {
    this.loadDepartments();
  }

  public create() {
    if (this.newDep === undefined) {
      this.newDep = new Department();
    }
    this.createMode = true;
  }

  public submitCreate() {
    if (this.newDep.Name && this.newDep.Name.length > 0) {
      this.departmentDataService.create(this.newDep).subscribe((data) => {
        console.log(data);
        if (data) {
          this.loadDepartments();
          this.createMode = false;
          this.newDep = new Department();
        }

      });
    } else {
      alert('Please enter the department name');
    }
  }

  public cancelCreate() {
    this.createMode = false;
    this.newDep = new Department();
  }

  public delete(dep: Department) {
    const deleteConfirmDialog = confirm('Do you really want to delete ' + dep.Name + ' department?');
    if (deleteConfirmDialog === true) {
      this.departmentDataService.delete(dep.Id).subscribe((isDelete) => {
        if (isDelete) {
          this.loadDepartments();
        } else {
          this.displayMsg('Failed to delete');
        }
      });
    }
  }

  public edit(dep: Department) {
    dep.mode = 'edit';
  }

  public cancel(dep: Department) {
    dep.mode = 'display';
  }

  public update(dep: Department) {
    this.departmentDataService.edit(dep).subscribe((isUpdated) => {
      if (isUpdated) {
        this.loadDepartments();
      } else {
        this.displayMsg('Failed to update');
      }
    });
  }

  private loadDepartments() {
    this.departmentDataService
      .getAll()
      .subscribe(
      (deps) => {
        this.departments = deps;
        this.dataSource = new MatTableDataSource<Department>(deps);
        if (this.departments.length === 0) {
          this.displayMsg('There is no any departments yet');
        }
      }
      );
  }

  private displayMsg(msg) {
    this.msg = msg;
    this.showMsg = true;
  }
}



