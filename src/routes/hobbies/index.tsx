import React from 'react';

import CuratedHobbies from '../../views/curated-hobbies';
import SplitPage from '../../views/split-page';
import Wizard from '../../views/wizard';

const Hobbies = () => {
    const title = 'Hobbies.';

    return (
        <SplitPage title={title}>
            <SplitPage.Center>
                <SplitPage.Center.Header title={title} />

                <div className="p-2 sm:p-0">
                    <h1 className="text-4xl font-bold">Find yourself something new.</h1>
                    <p className="text-gray-400 mt-2">
                        Use our wizard below and we'll pick out some hobbies we think you'll love!
                    </p>

                    <div className="my-6">
                        <Wizard />
                    </div>
                </div>

                <hr className="mb-4" />
                <CuratedHobbies />
            </SplitPage.Center>
        </SplitPage>
    );
};

export default Hobbies;
