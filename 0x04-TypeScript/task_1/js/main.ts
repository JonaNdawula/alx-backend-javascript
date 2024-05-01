export interface Teacher {
  private readonly firstName: string,
  private readonly lastName: string,
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: stirng]: any,  
}


export interface Directors extends Teacher {
  numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName}. ${lastName}`;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


export interface StudentConstructor {
  new (firstName: string, lastName: string): student;
}


export interface Student {
  workOnHomeWork(): string;
  displayName(): string;
}

export class StudentClass implements Student {
  private _fisrtName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = fistName;
    this._lastName = lastName;
  }


  workOnHomeWork(): string {
    return 'currently working';
  }

  displayName(): string {
    return this._firstName;
  }
}

const teacher3: Teacher {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: 'London'
  contract: false,
};
