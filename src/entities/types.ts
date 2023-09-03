export interface Image {
    id: string;
    title: string | null;
    description: string | null;
    datetime: string;
    type: string;
    images: Array<{
        link: string;
        type: 'video/mp4' | 'image/jpeg' | 'image/png',
        animated: boolean;
    }>;
    width: number;
    height: number;
    size: number;
    views: number;
    bandwidth: number;
    vote: string | null;
    favorite: boolean;
    nsfw: string | null;
    section: string | null;
    account_url: string | null;
    account_id: string | null;
    is_ad: boolean;
    in_most_viral: boolean;
    has_sound: boolean;
    tags: string[];
    ad_type: number;
    ad_url: string;
    edited: string;
    in_gallery: boolean;
    link: string;
    comment_count: number | null;
    favorite_count: number | null;
    ups: number | null;
    downs: number | null;
    points: number | null;
    score: number | null;
}


export interface Suggestion {
    type: string;
    text:  string;
    images: number;
}