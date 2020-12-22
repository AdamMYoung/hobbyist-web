import React from 'react';
import { FeedEntry } from '../../types';
import TextEditor from '../../views/text-editor';
import PostCard from '../post-card';
import { OverflowWrapper } from './styles';

type Props = FeedEntry;

const TextPostCard = (props: Props) => {
    const { content } = props;

    return (
        <PostCard {...props}>
            <OverflowWrapper>
                <TextEditor readOnly initialValue={content} className={'w-full'} />
            </OverflowWrapper>
        </PostCard>
    );
};

export default TextPostCard;
