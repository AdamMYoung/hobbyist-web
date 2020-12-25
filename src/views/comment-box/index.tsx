import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { Node } from 'slate';

import Button from '../../components/button';
import ProfileIcon from '../../components/profile-icon';
import { useMutateCreateComment } from '../../hooks/mutations';
import TextEditor from '../text-editor';

type Props = {
    hobbySlug: string;
    postToken: string;
};

const CommentBox = (props: Props) => {
    const { hobbySlug, postToken } = props;
    const { user, isAuthenticated } = useAuth0();

    const { mutate, isLoading, isSuccess } = useMutateCreateComment(hobbySlug, postToken);
    const [content, setContent] = useState<Node[]>();

    useEffect(() => {
        if (isSuccess) setContent(undefined);
    }, [isSuccess]);

    const handleSubmit = () => {
        if (content) mutate({ content });
    };

    if (!isAuthenticated) return null;

    return (
        <div className="w-full mt-4">
            <div className="flex">
                <ProfileIcon src={user.picture} alt={user.name} />
                <TextEditor disableToolbar className="ml-2 w-full" onChange={setContent} />
            </div>
            <Button variant="primary" className="mt-4 ml-auto" disabled={isLoading} onClick={handleSubmit}>
                Submit
            </Button>
        </div>
    );
};

export default CommentBox;
