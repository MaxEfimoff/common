import { Subjects } from '../subjects';
export interface ProfileCreatedEvent {
    subject: Subjects.ProfileCreated;
    data: {
        id: string;
        handle: string;
        version: number;
        user_id: string;
    };
}
