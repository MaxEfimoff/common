import { Subjects } from '../subjects';
export interface BlogPostUpdatedEvent {
    subject: Subjects.BlogPostUpdated;
    data: {
        id: string;
        title: string;
        text: string;
        image: string;
        profile_id: string;
        group_id?: string;
        likes?: object[];
        dislikes?: object[];
        rating?: number;
        threads?: [
            {
                profile_id: string;
                text: string;
                likes?: object[];
                dislikes?: object[];
                rating?: number;
                comments?: [
                    {
                        profile_id: string;
                        text: string;
                        likes?: object[];
                        dislikes?: object[];
                        rating?: number;
                        createdAt: number;
                        updatedAt?: number;
                    }
                ];
                createdAt: number;
                updatedAt?: number;
            }
        ];
        tags?: string[];
        createdAt: number;
        updatedAt?: number;
        version: number;
    };
}
