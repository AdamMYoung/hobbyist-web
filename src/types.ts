export type WizardQuestion = {
    id: string;
    image: string;
    question: string;
    options: WizardOption[];
};

export type WizardOption = {
    title: string;
    description: string;
    personalizedResponse?: string;
    followUpQuestion?: WizardQuestion;
};

export type Meetup = {
    id: string;
    name: string;
    date: Date;
    description: string;
    address?: string;
    hobbyId: string;
    lat: number;
    lng: number;
};

export type HobbyCategory = {
    id: string;
    name: string;
    hobbies: Hobby[];
};

export type Hobby = {
    slug: string;
    name: string;
    description: string;
    profileSrc: string;
    bannerSrc: string;
};

export type HobbyDetail = Hobby & {
    admins: string[];
};

export type Profile = {
    username: string;
    profileSrc: string;
    bannerSrc: string;
    id: string;
};

type Post = {
    id: string;
    hobbyId: string;
    profile: Profile;
    created: Date;
    title: string;
    commentCount: number;
    likes: number;
    liked?: boolean;
};

export type TextPost = Post & {
    type: 'text';
    content: string;
};

export type ImagePost = Post & {
    type: 'image';
    images: string[];
};

export type PostTypes = TextPost | ImagePost;

export enum FeedSortType {
    Feed = 'Feed',
    New = 'New',
    Week = 'Week',
    Month = 'Month',
    Year = 'Year',
}

const EnjoySportsQuestion: WizardQuestion = {
    id: 'sports',
    image: 'https://via.placeholder.com/400',
    question: 'Do you enjoy sports?',
    options: [
        {
            title: 'I love playing sports',
            description: '',
        },
        {
            title: "I'd rather watch it than play",
            description: '',
        },
        {
            title: "Sports aren't really my thing",
            description: '',
        },
    ],
};

const EnjoyOutsideQuestion: WizardQuestion = {
    id: '1',
    image: 'https://via.placeholder.com/400',
    question: 'Would you rather enjoy nature, or enjoy your creature comforts at home?',
    options: [
        {
            title: 'Enjoy the outdoors',
            description: 'I love the freedom that being outdoors give me',
            followUpQuestion: EnjoySportsQuestion,
        },
        {
            title: 'Relax at home',
            description: 'I prefer the comfort of my own home.',
        },
    ],
};

const EnjoyCollectionQuestion: WizardQuestion = {
    id: '2',
    image: 'https://via.placeholder.com/400',
    question: 'Do you enjoy collecting things?',
    options: [
        {
            title: "I'm an avid collector",
            description: 'I love keeping and collecting anything I get my hands on',
        },
        {
            title: "It's not for me",
            description: "Collections isn't my kind of thing",
        },
    ],
};

const EnjoyEntertainmentQuestion: WizardQuestion = {
    id: 'entertainment',
    image: 'https://via.placeholder.com/400',
    question: 'Are you a fan of TV and Film?',
    options: [
        {
            title: "I'm always looking for new things to watch",
            description: '',
        },
        {
            title: "I'm not much of a TV and Film person",
            description: '',
        },
    ],
};

const EnjoyFoodQuestion: WizardQuestion = {
    id: '3',
    image: 'https://via.placeholder.com/400',
    question: 'Are you a foodie?',
    options: [
        {
            title: 'I love cooking!',
            description: 'Cooking is a passion of mine, I look forward to each and every meal.',
        },
        {
            title: "It's not something I particularly enjoy",
            description: "As long as it keeps me going I don't really care!",
        },
    ],
};

const CreativeQuestion: WizardQuestion = {
    id: 'creative',
    image: 'https://via.placeholder.com/400',
    question: 'Would you describe yourself as creative?',
    options: [
        {
            title: "I'm not a creative person",
            description: '',
        },
        {
            title: 'I love expressing myself',
            description: '',
        },
    ],
};

const BuildingQuestion: WizardQuestion = {
    id: 'building',
    image: 'https://via.placeholder.com/400',
    question: 'Do you enjoy making things?',
    options: [
        {
            title: "I'm always interested in making something new",
            description: '',
        },
        {
            title: "I'd rather have somebody else do it",
            description: '',
        },
    ],
};

const LogicalQuestion: WizardQuestion = {
    id: 'logical',
    image: 'https://via.placeholder.com/400',
    question: 'Are you a fan of puzzles and quizzes?',
    options: [
        {
            title: 'Anything that get me thinking is a bonus',
            description: '',
        },
        {
            title: "I'd rather relax than sit down to a puzzle",
            description: '',
        },
    ],
};

export const Questions: WizardQuestion[] = [
    EnjoySportsQuestion,
    EnjoyCollectionQuestion,
    EnjoyEntertainmentQuestion,
    EnjoyFoodQuestion,
    EnjoyOutsideQuestion,
    CreativeQuestion,
    BuildingQuestion,
    LogicalQuestion,
];
