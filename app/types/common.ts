export interface Page {
  name: string
}

export interface THead {
  title?: string;
  description?: string;
  language?: string;
}

export interface loginInfo {
  email: string;
  password: string;
}

export interface userInfo {
  first_name: string;
  company_name: string;
  email: string;
  country: string;
  state: string;
  status: string;
}