import Card from '../card';

type Props = {
    title: string;
    onClick: () => void;
    color?: 'green' | 'red' | 'blue' | 'yellow';
};

const WizardCard: React.FC<Props> = (props) => {
    const { color, title, onClick, children } = props;
    const colors = {
        green: 'bg-green-200',
        red: 'bg-red-200',
        blue: 'bg-blue-200',
        yellow: 'bg-yellow-200',
    };

    return (
        <Card active onClick={onClick} className={`${color ? colors[color] : 'bg-gray-100'} w-full m-1`}>
            <p className="text-2xl font-semibold text-center">{title}</p>
            {children && <p className="text-center text-lg my-6">{children}</p>}
        </Card>
    );
};

export default WizardCard;
