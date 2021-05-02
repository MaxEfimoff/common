import { Subjects } from '../subjects';
export interface ProfileDeletedEvent {
    subject: Subjects.ProfileDeleted;
    data: {
        id: string;
        version: number;
        user_id: string;
    };
}
