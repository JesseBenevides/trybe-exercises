class Student {
  private registry: string;
  private name: string;
  private examGrades: number[];
  private workGrades: number[];

  constructor(registry: string, name: string, examGrades: number[], workGrades: number[]) {
    this.registry = registry;
    this.name = name;
    this.examGrades = examGrades;
    this.workGrades = workGrades;
  }

  getGradesSum(): number {
    const examGradesSum = this.examGrades.reduce((acc, cur) => acc + cur);
    const workGradesSum = this.examGrades.reduce((acc, cur) => acc + cur);
    
    return examGradesSum + workGradesSum;
  }
}
