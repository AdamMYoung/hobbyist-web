import { DeltaStatic, Sources } from 'quill';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Button from '../../components/button';
import Input from '../../components/input';
import { Hobby } from '../../types';
import HobbiesDropdown from '../hobbies-dropdown';

const Hobbies: Hobby[] = [
    {
        id: 'one',
        title: 'Drawing',
        src: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        memberCount: 1500,
    },
    {
        id: 'one',
        title: 'Drawing',
        src: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        memberCount: 1500,
    },
    {
        id: 'one',
        title: 'Drawing',
        src: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        memberCount: 1500,
    },
    {
        id: 'one',
        title: 'Drawing',
        src: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        memberCount: 1500,
    },
    {
        id: 'one',
        title: 'Drawing',
        src: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        memberCount: 1500,
    },
    {
        id: 'one',
        title: 'Drawing',
        src: 'https://via.placeholder.com/400',
        description: 'A thing where you do a hobby',
        memberCount: 1500,
    },
];

type Props = {
    selectedHobby?: Hobby;
};

const TextPost = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [textLength, setTextLength] = useState(0);

    const handleChange = (text: string, _: DeltaStatic, __: Sources, editor: ReactQuill.UnprivilegedEditor) => {
        setText(text);

        if (editor.getLength() === 1) {
            setTextLength(0);
        } else {
            setTextLength(editor.getLength());
        }
    };

    textLength.toFixed();

    return (
        <div>
            <Input className="w-full" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <ReactQuill className="mt-2" theme="snow" value={text} onChange={handleChange} />
        </div>
    );
};

const CreatePost = (props: Props) => {
    const { selectedHobby } = props;

    const [hobby, setHobby] = useState<Hobby>(Hobbies[0]);

    return (
        <div className="mx-4 mb-8 sm:mx-0">
            {!selectedHobby && <HobbiesDropdown hobbies={Hobbies} selectedHobby={hobby} onHobbyChange={setHobby} />}

            <div className="mt-2">
                <TextPost />
            </div>

            <Button className="mt-4 ml-auto" variant="primary">
                Post
            </Button>
        </div>
    );
};

export default CreatePost;
