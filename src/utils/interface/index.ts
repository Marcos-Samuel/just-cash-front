export interface IFormLogin {
    email: string;
    password: string;
};
 
export interface IFormRegister{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface IFormLead {
    name: string;
    email: string;
    phone: string;
    opportunities: string[]; 
  }