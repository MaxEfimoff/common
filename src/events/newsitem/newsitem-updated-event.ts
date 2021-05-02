import { Subjects } from '../subjects';
export interface NewsItemUpdatedEvent {
    subject: Subjects.NewsItemUpdated;
    data: {
        id: string;
        title: string;
        text: string;
        image: string;
        profile_id: string;
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
                    }
                ];
            }
        ];
        tags?: string[];
        version: number;
    };
}
