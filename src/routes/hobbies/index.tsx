import React from 'react';
import SEO from '../../components/seo';

import CuratedHobbies from '../../views/curated-hobbies';
import SplitPage from '../../views/split-page';
import Wizard from '../../views/wizard';

const Hobbies = () => {
    const title = 'Hobbies.';

    return (
        <>
            <SEO
                title="Hobbies"
                description="Find yourself a new community using our hobby wizard, or search for the hobbies you love."
            />
            <SplitPage title={title}>
                <SplitPage.Center>
                    <SplitPage.Center.Header title={title} />

                    <div className="p-2  sm:p-0">
                        <h1 className="text-4xl font-bold">Find yourself something new.</h1>
                        <p className="text-gray-400 mt-2">
                            Use our wizard below and we'll pick out some hobbies we think you'll love!
                        </p>

                        <div className="my-6">
                            <Wizard />
                        </div>
                    </div>

                    <hr className="mb-4 " />
                    <h2 className="text-2xl font-semibold mx-2 sm:mx-0 mb-2">Suggested.</h2>
                    <CuratedHobbies />
                </SplitPage.Center>
            </SplitPage>
        </>
    );
};

export default Hobbies;
