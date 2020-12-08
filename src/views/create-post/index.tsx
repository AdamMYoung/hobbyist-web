import { DeltaStatic, Sources } from 'quill';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Button from '../../components/button';
import Card from '../../components/card';
import Input from '../../components/input';
import { Hobby } from '../../types';

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

    const [hobby, setHobby] = useState<Hobby | null>(selectedHobby ?? null);

    return (
        <div className="mx-2 mt-2 mb-8 sm:mx-0">
            <Card>
                {!selectedHobby && (
                    <label className="mt-4 text-lg font-semibold">
                        Select a hobby:
                        <select value={hobby?.title} onChange={() => setHobby(null)} className="ml-4">
                            <option>Hobby 1</option>
                            <option>Hobby 2</option>
                            <option>Hobby 3</option>
                        </select>
                    </label>
                )}

                <div className="mt-4">
                    <TextPost />
                </div>

                <Button className="mt-4 ml-auto" variant="primary">
                    Post
                </Button>
            </Card>
        </div>
    );
};

export default CreatePost;
