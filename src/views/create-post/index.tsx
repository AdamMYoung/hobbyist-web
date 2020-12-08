import { DeltaStatic, Sources } from 'quill';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Button from '../../components/button';
import Card from '../../components/card';
import Input from '../../components/input';

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

const CreatePost = () => {
    return (
        <div className="m-2 sm:m-0">
            <Card>
                <label className="mt-4 text-lg font-semibold">
                    Select a hobby:
                    <select className="ml-4">
                        <option>Hobby 1</option>
                        <option>Hobby 2</option>
                        <option>Hobby 3</option>
                    </select>
                </label>

                <div className="mt-4">
                    <TextPost />
                </div>
            </Card>
            <div className="mt-4">
                <Button className="ml-auto" variant="primary">
                    Post
                </Button>
            </div>
        </div>
    );
};

export default CreatePost;
