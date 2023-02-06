export interface IUserModel extends Document {
  email: string;
  password: string;
  role: number;
  first_name: string;
  last_name: string;
}
