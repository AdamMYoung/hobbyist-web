import React from 'react';

import Feed from '../../views/feed';
import SplitPage from '../../views/split-page';

// const WizardCard = () => {
//     return (
//         <>
//             <div className="text-center">
//                 <h1 className="text-4xl font-bold">Find yourself a new hobby.</h1>
//                 <p className="text-gray-400 mt-2">
//                     Use our wizard below and we'll pick out some hobbies we think you'll love!
//                 </p>
//             </div>
//             <div className="mt-6">
//                 <Wizard />
//             </div>
//         </>
//     );
// };

const Home = () => {
    const title = 'Feed.';

    return (
        <SplitPage title={title}>
            <SplitPage.Center>
                <SplitPage.Center.Header title={title} />
                <Feed />
            </SplitPage.Center>
        </SplitPage>
    );
};

export default Home;
