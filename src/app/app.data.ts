import { EmployeeModel, Gender } from './models/employee.model';

export class AppData{

  departments = [
    {label: 'I.T', value: 'it'},
    {label: 'Support', value: 'support'},
    {label: 'Development', value: 'development'},
    {label: 'Testing', value: 'testing'}
  ]

  employeesList: EmployeeModel[] = [{
    empId: 1,
    name: 'Alexa',
    gender: Gender.female,
    departments: ['support', 'testing'],
    salary: 100
  }]


}