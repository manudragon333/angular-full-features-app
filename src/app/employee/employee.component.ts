import { Component, OnInit, Input } from '@angular/core';
import { EmployeeModel, Gender } from '../models/employee.model';
import { AppData } from '../app.data';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit{

  editMode:boolean;
  appData: AppData;
  departments: any[];
  departmentsChkbx: any[] = [];
  // employee : EmployeeModel;

  @Input() employeeDetails:EmployeeModel;
 

  constructor(
        
  ){
    this.appData = new AppData();
    this.editMode = false;
    console.log(this.appData.departments)
    this.departments = this.appData.departments;
    // this.employee = new EmployeeModel(1, 'Alexa', Gender.female, 100, ['support', 'testing']);
    console.log(this.employee);
    // Try to remove mutation of this.employee.departments && this.departmentsChkbx
    this.departments.forEach( v => {
      v.isChecked = this.employee.departments.indexOf(v.value) >=0;
      this.departmentsChkbx.push(v);
    });
  }
  

  employee : EmployeeModel = {
    empId: 1,
    name: 'Alexa',
    gender: Gender.female,
    departments: ['support', 'testing'],
    salary: 100
  };

  
  

  gender = Gender;

  construct(){

  }

  ngOnInit(){
    //alert('OnInit');
  }
}
