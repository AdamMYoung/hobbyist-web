import Card from '../../components/card';
import WizardCard from '../../components/wizard-card';
import Wizard from '../../views/wizard';

const Home = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-3xl font-bold">Find yourself a new hobby.</h1>
                <p className="text-gray-400 mt-2">
                    Use our wizard below and we'll pick out some communities we think you'll love!
                </p>
            </div>

            <Wizard />
        </div>
    );
};

export default Home;
