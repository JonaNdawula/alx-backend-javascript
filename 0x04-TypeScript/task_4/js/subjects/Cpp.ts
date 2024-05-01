namespace Subjects {
  exports interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of Requirements for CPP';
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingC) {
        return 'No available teacher';
      }
    
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
