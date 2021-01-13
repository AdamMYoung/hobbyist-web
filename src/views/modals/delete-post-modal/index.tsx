import React from 'react';

import Button from '../../../components/button';
import Modal from '../../../components/modal';
import { useMutateDeletePost } from '../../../hooks/mutations';

type Props = {
    hobbySlug: string;
    postToken: string;
    onClose: () => void;
};

const DeletePostModal = (props: Props) => {
    const { hobbySlug, postToken, onClose } = props;
    const { mutate: deletePost, isLoading } = useMutateDeletePost(hobbySlug, postToken);

    return (
        <Modal title="Delete Post">
            <p className="mb-4">Are you sure you want to delete this post? This cannot be undone.</p>
            <div className="flex">
                <Button variant="secondary" onClick={() => deletePost()} disabled={isLoading}>
                    Delete
                </Button>
                <Button className="ml-auto" variant="primary" onClick={() => onClose()} disabled={isLoading}>
                    Cancel
                </Button>
            </div>
        </Modal>
    );
};

export default DeletePostModal;
