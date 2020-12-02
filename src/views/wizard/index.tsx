import React, { useState } from 'react';
import WizardCard from '../../components/wizard-card';
import { Questions } from '../../types';

const Wizard = () => {
    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [answers, setAnswers] = useState<{ [id: string]: number }>({});
    const question = questionNumber > answers.length - 1 ? null : Questions[questionNumber];

    console.log(answers);

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

    return (
        <div>
            <p className="mt-8 text-xl font-bold text-center">{`${questionNumber + 1}. ${question.question}`}</p>
            <div className="my-2 flex">
                <WizardCard
                    onClick={() => answerQuestion(0)}
                    color={questionNumber % 2 === 0 ? 'blue' : 'yellow'}
                    title={question.optionOne.title}
                >
                    {question.optionOne.description}
                </WizardCard>
                <WizardCard
                    onClick={() => answerQuestion(0)}
                    color={questionNumber % 2 === 0 ? 'green' : 'red'}
                    title={question.optionTwo.title}
                >
                    {question.optionTwo.description}
                </WizardCard>
            </div>
            {question.optionThree && (
                <WizardCard onClick={() => answerQuestion(0)} title={question.optionThree.title}>
                    {question.optionThree.description}
                </WizardCard>
            )}
        </div>
    );
};

export default Wizard;
