import { Subjects } from '../subjects';
export interface UserUpdatedEvent {
    subject: Subjects.UserUpdated;
    data: {
        id: number;
        email: string;
        name: string;
        version: number;
    };
}
