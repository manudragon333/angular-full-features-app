export enum Gender {male = 'm',female = 'f'}

export class EmployeeModel {

  constructor(
    empId: number,
    name: string,
    gender: Gender,
    salary: number,
    departments?: string[]
  ){

  }

  empId: number
  name: string
  gender: Gender
  salary: number
  departments?: string[]
}