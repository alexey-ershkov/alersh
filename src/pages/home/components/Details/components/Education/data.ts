interface EducationData {
  yearFrom: number;
  yearTo: number | 'Current';
  educationName: string;
  educationProgram: string;
}

export const educationData: EducationData[] = [
  {
    yearFrom: 2018,
    yearTo: 'Current',
    educationName: 'Bauman Moscow State Technical University',
    educationProgram: 'Robotics and Complex Automation (CAD developer)',
  },
  {
    yearFrom: 2019,
    yearTo: 2021,
    educationName: 'Mail.ru Group Programming Course at Technopark',
    educationProgram: 'System Architecture',
  },
];
