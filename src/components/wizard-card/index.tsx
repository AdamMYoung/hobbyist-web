import { WizardQuestion } from '../../types';
import Image from '../image';
import List from '../list';

type Props = {
    onAnswerSelected: (index: number) => void;
    question: WizardQuestion;
};

const WizardCard = (props: Props) => {
    const { question, onAnswerSelected } = props;

    return (
        <div className="shadow w-full bg-white">
            <div className="block sm:flex">
                <div className="mr-0 sm:mr-4 flex-1 relative h-32 sm:h-auto">
                    <Image className="absolute inset-0 w-full h-full object-cover" src={question.image} alt="" />
                </div>

                <div className="p-4 flex-1">
                    <p className="text-xl font-bold mb-4 px-1">{question.question}</p>
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
