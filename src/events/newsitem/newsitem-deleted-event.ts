import { Subjects } from '../subjects';
export interface NewsItemDeletedEvent {
    subject: Subjects.NewsItemDeleted;
    data: {
        id: string;
        title: null;
        text: null;
        image: null;
        profile_id: string;
        version: number;
    };
}
