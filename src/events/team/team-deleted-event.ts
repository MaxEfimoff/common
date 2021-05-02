import { Subjects } from '../subjects';
export interface TeamDeletedEvent {
    subject: Subjects.TeamDeleted;
    data: {
        id: string;
        title: null;
        profile_id: string;
        version: number;
    };
}
