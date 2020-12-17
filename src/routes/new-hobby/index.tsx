import React, { useState } from 'react';
import { paramCase } from 'param-case';
import { useHistory } from 'react-router-dom';

import Input from '../../components/input';
import Button from '../../components/button';
import SplitPage from '../../views/split-page';
import EditableProfileHead from '../../components/profile-head-edit';

const NewHobby = () => {
    const history = useHistory();

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [profileBase64, setProfileBase64] = useState<string>('');
    const [bannerBase64, setBannerBase64] = useState<string>('');

    return (
        <SplitPage title="New Hobby.">
            <SplitPage.Center>
                <EditableProfileHead
                    title={title}
                    description={description}
                    onTitleChanged={setTitle}
                    onDescriptionChanged={setDescription}
                />

                <div className="mt-4 flex">
                    <Button className="ml-auto mr-4" variant="link" onClick={() => history.push('/')}>
                        Cancel
                    </Button>
                    <Button variant="primary">Create</Button>
                </div>
            </SplitPage.Center>
        </SplitPage>
    );
};

export default NewHobby;
