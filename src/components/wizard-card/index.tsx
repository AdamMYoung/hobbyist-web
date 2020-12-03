import { WizardQuestion } from '../../types';
import List from '../list';

type Props = {
    onAnswerSelected: (index: number) => void;
    question: WizardQuestion;
};

const WizardCard = (props: Props) => {
    const { question, onAnswerSelected } = props;

    return (
        <div className=" shadow w-full">
            <div className="flex">
                <div className="mr-4 flex-1">
                    <img className="w-auto h-auto mx-auto" src={question.image} alt="" />
                </div>

                <div className="p-4 flex-1">
                    <p className="text-xl font-bold text-center mb-4">{question.question}</p>
                    <List active>
                        {question.options.map((option, index) => (
                            <List.Item key={option.title} onClick={() => onAnswerSelected(index)}>
                                {option.title}
                            </List.Item>
                        ))}
                    </List>
                </div>
            </div>
        </div>
    );
};

export default WizardCard;
