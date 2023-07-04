import { Model } from 'mongoose';

export type Months =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type Semester = 'Autumn' | 'Summer' | 'Fall';
export type SemesterCode = '01' | '02' | '03';
export type IAcademicSemester = {
  title: Semester;
  year: number;
  code: SemesterCode;
  startMonth: Months;
  endMonth: Months;
};

export type AcademicSemesterModel = Model<
  IAcademicSemester,
  Record<string, unknown>
>;
// record <string unknown> just for taking space
