

export interface UserProps {
    login: { uuid: string };
    picture: { medium: string};
    name: { first: string; last: string };
    gender: string;
    location: { country: string; city: string };
    email: string;
    dob: {age: number; date: string};
  }

export interface UserContextType {
  users: UserProps[];
  loading: boolean;
  error: string | null;
}
