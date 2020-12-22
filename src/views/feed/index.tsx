import React from 'react';
import LoadTransition from '../../components/load-transition';

import TextPostCard from '../../components/text-post-card';
import { useFeed } from '../../hooks/queries';
import PlaceholderFeed from '../placeholder-feed';

const Feed = () => {
    const { data, isLoading } = useFeed();

    return (
        <>
            {!isLoading ? (
                <LoadTransition>
                    {data?.pages.map((page, i) => (
                        <React.Fragment key={i}>
                            {page.items.map((feedItem) => (
                                <div className="my-2" key={`${feedItem.slug}/${feedItem.token}`}>
                                    <TextPostCard {...feedItem} />
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </LoadTransition>
            ) : (
                <LoadTransition>
                    <PlaceholderFeed count={10} animated />
                </LoadTransition>
            )}
        </>
    );
};

export default Feed;
