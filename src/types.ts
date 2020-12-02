export type WizardQuestion = {
    id: string;
    question: string;
    optionOne: WizardOption;
    optionTwo: WizardOption;
    optionThree?: WizardOption;
};

export type WizardOption = {
    title: string;
    description: string;
    personalizedResponse?: string;
    followUpQuestion?: WizardQuestion;
};

const EnjoySportsQuestion: WizardQuestion = {
    id: 'sports',
    question: 'Do you enjoy sports?',
    optionOne: {
        title: 'I love playing sports',
        description: '',
    },
    optionTwo: {
        title: "I'd rather watch it than play",
        description: '',
    },
    optionThree: {
        title: "Sports aren't really my thing",
        description: '',
    },
};

const EnjoyOutsideQuestion: WizardQuestion = {
    id: '1',
    question: 'Would you rather enjoy nature, or enjoy your creature comforts at home?',
    optionOne: {
        title: 'Enjoy the outdoors',
        description: 'I love the freedom that being outdoors give me',
        followUpQuestion: EnjoySportsQuestion,
    },
    optionTwo: {
        title: 'Relax at home',
        description: 'I prefer the comfort of my own home.',
    },
};

const EnjoyCollectionQuestion: WizardQuestion = {
    id: '2',
    question: 'Do you enjoy collecting things?',
    optionOne: {
        title: "I'm an avid collector",
        description: 'I love keeping and collecting anything I get my hands on',
    },
    optionTwo: {
        title: "It's not for me",
        description: "Collections isn't my kind of thing",
    },
};

const EnjoyEntertainmentQuestion: WizardQuestion = {
    id: 'entertainment',
    question: 'Are you a fan of TV and Film?',
    optionOne: {
        title: "I'm always looking for new things to watch",
        description: '',
    },
    optionTwo: {
        title: "I'm not much of a TV and Film person",
        description: '',
    },
};

const EnjoyFoodQuestion: WizardQuestion = {
    id: '3',
    question: 'Are you a foodie?',
    optionOne: {
        title: 'I love cooking!',
        description: 'Cooking is a passion of mine, I look forward to each and every meal.',
    },
    optionTwo: {
        title: "It's not something I particularly enjoy",
        description: "As long as it keeps me going I don't really care!",
    },
};

const CreativeQuestion: WizardQuestion = {
    id: 'creative',
    question: 'Would you describe yourself as creative?',
    optionOne: {
        title: "I'm not a creative person",
        description: '',
    },
    optionTwo: {
        title: 'I love expressing myself',
        description: '',
    },
};

const BuildingQuestion: WizardQuestion = {
    id: 'building',
    question: 'Do you enjoy making things?',
    optionOne: {
        title: "I'm always interested in making something new",
        description: '',
    },
    optionTwo: {
        title: "I'd rather have somebody else do it",
        description: '',
    },
};

const LogicalQuestion: WizardQuestion = {
    id: 'logical',
    question: 'Are you a fan of puzzles and quizzes?',
    optionOne: {
        title: 'Anything that get me thinking is a bonus',
        description: '',
    },
    optionTwo: {
        title: "I'd rather relax than sit down to a puzzle",
        description: '',
    },
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
