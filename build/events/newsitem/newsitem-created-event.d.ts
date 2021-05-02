import { Subjects } from '../subjects';
export interface NewsItemCreatedEvent {
    subject: Subjects.NewsItemCreated;
    data: {
        id: string;
        title: string;
        text: string;
        image: string;
        profile_id: string;
        version: number;
    };
}
