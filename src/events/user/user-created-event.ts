import { Subjects } from '../subjects';
export interface UserCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    id: number;
    email: string;
    name: string;
    version: number;
  };
}
