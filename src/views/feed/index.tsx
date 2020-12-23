import React from 'react';
import LoadTransition from '../../components/load-transition';

import TextPostCard from '../../components/text-post-card';
import { useFeed } from '../../hooks/queries';
import PlaceholderFeed from '../placeholder-feed';

type Props = {
    type?: 'feed' | 'hobby' | 'user';
    slug?: string;
};

const Feed = (props: Props) => {
    const { type = 'feed', slug } = props;

    const { data, isLoading } = useFeed(type, slug);

    return (
        <>
            {!isLoading ? (
                <LoadTransition>
                    {data?.pages.map((page, i) => (
                        <React.Fragment key={i}>
                            {page.items.map((feedItem) => (
                                <div className="my-2" key={`${feedItem.hobbySlug}/${feedItem.token}`}>
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
