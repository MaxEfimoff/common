import { Subjects } from '../subjects';
export interface BlogPostCreatedEvent {
    subject: Subjects.BlogPostCreated;
    data: {
        id: string;
        title: string;
        text: string;
        image: string;
        profile_id: string;
        group_id: string;
        version: number;
    };
}
