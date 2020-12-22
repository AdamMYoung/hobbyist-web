import React from 'react';

import TextPostCard from '../../components/text-post-card';
import { useFeed } from '../../hooks/queries';

const Feed = () => {
    const { data } = useFeed();

    return (
        <div>
            {data?.pages.map((page, i) => (
                <React.Fragment key={i}>
                    {page.items.map((feedItem) => (
                        <div className="my-2" key={`${feedItem.slug}/${feedItem.token}`}>
                            <TextPostCard {...feedItem} />
                        </div>
                    ))}
                </React.Fragment>
            ))}
            <div />
        </div>
    );
};

export default Feed;
