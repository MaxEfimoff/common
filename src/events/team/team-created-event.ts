import { Subjects } from '../subjects';
export interface TeamCreatedEvent {
  subject: Subjects.TeamCreated;
  data: {
    id: string;
    title: string;
    profile_id: string;
    members: [];
    version: number;
  };
}
