import Card from '../card';

type Props = {
    title: string;
    onClick: () => void;
    color?: 'green' | 'red' | 'blue' | 'yellow';
};

const WizardCard: React.FC<Props> = (props) => {
    const { color, title, onClick, children } = props;
    const colors = {
        green: 'bg-green-100',
        red: 'bg-red-100',
        blue: 'bg-blue-100',
        yellow: 'bg-yellow-100',
    };

    return (
        <Card active onClick={onClick} className={`${color ? colors[color] : 'bg-gray-100'} w-full m-1`}>
            <p className="text-3xl font-semibold text-center">{title}</p>
            <p className="text-center text-lg my-6">{children}</p>
        </Card>
    );
};

export default WizardCard;
