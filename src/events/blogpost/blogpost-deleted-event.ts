import { Subjects } from '../subjects';
export interface BlogPostDeletedEvent {
    subject: Subjects.BlogPostDeleted;
    data: {
        id: string;
        title: null;
        text: null;
        image: null;
        profile_id: string;
        group_id: string;
        version: number;
    };
}
