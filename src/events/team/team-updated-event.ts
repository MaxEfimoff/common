import { Subjects } from '../subjects';
export interface TeamUpdatedEvent {
    subject: Subjects.TeamUpdated;
    data: {
        id: string;
        title: string;
        description?: string;
        avatar?: string;
        profile_id: string;
        members?: object[];
        groups?: object[];
        version: number;
    };
}
