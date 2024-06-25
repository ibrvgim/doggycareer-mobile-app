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

// USER LOGIN TYPE
export interface LoginType {
  email: string;
  password: string;
}

// USER SIGNUP TYPE
export interface SignupType {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

// FILTERS TYPE
export interface FiltersType {
  sortBy: string;
  publicationDate: string;
  jobType: string;
  officeType: string;
}

// QUESTIONNAIRE TYPE
export interface QuestionnaireType {
  jobType: string;
  officeType: string;
  location: string[];
  industry: string[];
  email: string;
}
