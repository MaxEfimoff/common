import { Subjects } from '../subjects';
export interface GroupUpdatedEvent {
    subject: Subjects.GroupUpdated;
    data: {
        id: string;
        title: string;
        description?: string;
        avatar?: string;
        backgroundImage?: string;
        profile_id: string;
        members?: object[];
        posts?: object[];
        createdAt: number;
        updatedAt?: number;
        version: number;
    };
}
