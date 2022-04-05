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
}
