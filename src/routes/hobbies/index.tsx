import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import CuratedHobbies from '../../views/curated-hobbies';
import SplitPage, { RenderProps } from '../../views/split-page';
import Trending from '../../views/trending';

const Hobbies = () => {
    const title = 'Hobbies.';

    return (
        <SplitPage title={title} leftIcon={faChartLine}>
            <SplitPage.Center>
                <SplitPage.Center.Header title={title} />
                <CuratedHobbies />
            </SplitPage.Center>
        </SplitPage>
    );
};

export default Hobbies;
