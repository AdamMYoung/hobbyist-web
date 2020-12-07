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

    const handleChange = (text: string, delta: DeltaStatic, source: Sources, editor: ReactQuill.UnprivilegedEditor) => {
        setText(text);

        if (editor.getLength() === 1) {
            setTextLength(0);
        } else {
            setTextLength(editor.getLength());
        }
    };

    return (
        <div>
            <Input className="w-full" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <ReactQuill className="mt-2" theme="snow" value={text} onChange={handleChange} />
            <div className="mt-4">
                <Button disabled={title.length === 0 || textLength === 0} className="ml-auto" variant="primary">
                    Post
                </Button>
            </div>
        </div>
    );
};

const NewPost = () => {
    return (
        <div className="pt-4">
            <h1 className="text-3xl font-bold mb-4">Create Post</h1>
            <label className="mt-4 text-lg font-semibold">
                Select a hobby:
                <select className="ml-4">
                    <option>Hobby 1</option>
                    <option>Hobby 2</option>
                    <option>Hobby 3</option>
                </select>
            </label>

            <Card className="mt-4">
                <TextPost />
            </Card>
        </div>
    );
};

export default NewPost;
