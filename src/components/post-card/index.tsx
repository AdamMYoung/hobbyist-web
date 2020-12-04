import React from 'react';
import { Profile } from '../../types';
import Card from '../card';
import SocialControls from '../social-controls';
import UserProfile from '../user-profile';

type Props = {
    title: string;
    profile: Profile;
};

const PostCard: React.FC<Props> = (props) => {
    const { title, profile, children } = props;

    return (
        <Card active>
            <article className="min-h-32 max-h-92">
                <p className="mt-2 text-xl font-bold">{title}</p>
                <div className="flex mt-2 w-full">{children}</div>
                <hr className="mt-2" />

                <div className="flex flex-wrap mt-4">
                    <div className="mt-2 sm:mt-0">
                        <UserProfile name={profile.name} src={profile.src} onClick={console.log} />
                    </div>
                    <div className="flex-grow" />
                    <div className="mt-2 sm:mt-0">
                        <SocialControls likeCount={0} commentCount={0} />
                    </div>
                </div>
            </article>
        </Card>
    );
};

export default PostCard;
