import { Subjects } from '../subjects';
export interface GroupDeletedEvent {
    subject: Subjects.GroupDeleted;
    data: {
        id: string;
        title: null;
        profile_id: string;
        version: number;
    };
}
