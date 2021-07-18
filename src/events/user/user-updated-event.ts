import { Subjects } from '../subjects';
export interface UserUpdatedEvent {
  subject: Subjects.UserUpdated;
  data: {
    id: number;
    name: string;
    version: number;
    role: string;
  };
}
