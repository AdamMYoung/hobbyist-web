import { WizardQuestion } from '../../types';
import Card from '../card';
import List from '../list';

type Props = {
    onAnswerSelected: (index: number) => void;
    question: WizardQuestion;
};

const WizardCard = (props: Props) => {
    const { question, onAnswerSelected } = props;

    return (
        <Card className="w-full lg:w-1/2 lg:mx-auto">
            <div className="flex">
                <div className="mr-4 flex-1">
                    <img className="rounded w-48 h-48 mx-auto" src={question.image} />
                </div>

                <div className="flex-1">
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
        </Card>
    );
};

export default WizardCard;
