import { Subjects } from '../subjects';
export interface UserActivatedEvent {
  subject: Subjects.UserActivated;
  data: {
    id: number;
    email: string;
    name: string;
    role: string;
  };
}
