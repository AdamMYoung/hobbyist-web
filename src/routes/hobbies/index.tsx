import React from 'react';
import SplitPage from '../../views/split-page';
import Trending from '../../views/trending';

const Hobbies = () => {
    const title = 'Hobbies.';
    const description = "Find what's trending, or disover something new.";

    return (
        <SplitPage title={title}>
            <SplitPage.Center title={title} description={description}>
                <p className="mt-4 text-3xl font-semibold">Trending.</p>
                <div className="mt-2">
                    <Trending />
                </div>
            </SplitPage.Center>
        </SplitPage>
    );
};

export default Hobbies;
