import { Subjects } from '../subjects';
export interface ProfileUpdatedEvent {
  subject: Subjects.ProfileUpdated;
  data: {
    id: string;
    user_id?: string;
    subscribers?: any[];
    subscribedProfiles?: any[];
    subscribedBlogs?: any[];
    joinedGroups?: any[];
    joinedTeams?: any[];
    handle?: string;
    avatar?: string;
    background?: string;
    status?: string;
    karma?: number;
    date?: number;
    version: number;
  };
}
