// JOBS TYPE
export interface JobType {
  id: number;
  postedAt: string;
  companyName: string;
  logo: string;
  jobTitle: string;
  location: string;
  jobType: string;
  officeType: string;
  website: string | undefined;
  employeesNumber: string;
  jobDescription: string;
  responsibilities: string;
  qualifications: string;
  industry: string;
  postAuthor?: string;
  active?: boolean;
}
