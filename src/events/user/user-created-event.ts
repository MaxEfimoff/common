import { Subjects } from '../subjects';
export interface UserCreatedEvent {
    subject: Subjects.UserCreated;
    data: {
        id: string;
        email: string;
        name: string;
        version: number;
    };
}
