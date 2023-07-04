import { Months } from './academicSemester.interface';

export const academicSemesterMonths: Months[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'October',
  'November',
  'December',
];
export const academicSemesters: string[] = ['Autumn', 'Summer', 'Fall'];

export const academicSemesterCode: string[] = ['01', '02', '03'];

//mapper
export const academicSemesterTitleCodeMapper: {
  [kay: string]: string;
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};
