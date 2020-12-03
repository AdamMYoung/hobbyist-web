import React, { useState } from 'react';
import WizardCard from '../../components/wizard-card';
import { Questions } from '../../types';

const Wizard = () => {
    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [answers, setAnswers] = useState<{ [id: string]: number }>({});
    const question = questionNumber > answers.length - 1 ? null : Questions[questionNumber];

    const answerQuestion = (answer: number) => {
        setAnswers({ ...answers, questionNumber: answer });
        setQuestionNumber(questionNumber + 1);
    };

    if (!question) {
        return (
            <div>
                <p className="text-2xl mt-4 font-bold text-center">Thank you for completing the questions!</p>
            </div>
        );
    }

    return <WizardCard onAnswerSelected={() => answerQuestion(0)} question={question} />;
};

export default Wizard;
