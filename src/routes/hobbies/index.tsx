import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import CuratedHobbies from '../../views/curated-hobbies';
import SplitPage, { RenderProps } from '../../views/split-page';
import Trending from '../../views/trending';

const Hobbies = () => {
    const title = 'Hobbies.';
    const description = 'Check below for our curated list of hobbies.';

    return (
        <SplitPage title={title} leftIcon={faChartLine}>
            {({ leftDrawer, closeLeftDrawer }: RenderProps) => (
                <>
                    <SplitPage.Left isDrawerOpen={leftDrawer} onCloseDrawer={closeLeftDrawer}>
                        <SplitPage.Header
                            title="Trending."
                            description="Here are some communities that are gaining popularity."
                        />

                        <Trending vertical />
                    </SplitPage.Left>
                    <SplitPage.Center>
                        <SplitPage.Center.Header title={title} description={description} />
                        <CuratedHobbies />
                    </SplitPage.Center>
                </>
            )}
        </SplitPage>
    );
};

export default Hobbies;
