import { Subjects } from '../subjects';
export interface GroupCreatedEvent {
    subject: Subjects.GroupCreated;
    data: {
        id: string;
        title: string;
        profile_id: string;
        version: number;
    };
}
