import { useCallback, useMemo, useState } from 'react';
import { Editor, Transforms, Node, Element as SlateElement, createEditor } from 'slate';
import { Slate, Editable, withReact, useSlate } from 'slate-react';
import isHotkey from 'is-hotkey';
import { withHistory } from 'slate-history';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
    faBold,
    faHeading,
    faItalic,
    faListOl,
    faListUl,
    faQuoteLeft,
    faUnderline,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ToolbarButton } from './styles';
import Typography from '../../components/typography';

const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
    'mod+`': 'code',
};

const LIST_TYPES = ['numbered-list', 'bulleted-list'];

type EditorButtonProps = {
    format: any;
    icon: IconProp;
};

type Props = {
    className?: string;
    readOnly?: boolean;
    value?: Node[];
    disableToolbar?: boolean;
    initialValue?: Node[];
    onChange?: (result: Node[]) => void;
};

const TextEditor = (props: Props) => {
    const { className, onChange, readOnly, disableToolbar, initialValue, value: controlledValue } = props;

    const [value, setValue] = useState<Node[]>(initialValue ?? [{ type: 'paragraph', children: [{ text: '' }] }]);
    const renderElement = useCallback((props) => <Element {...props} />, []);
    const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);

    const handleChange = (change: Node[]) => {
        setValue(change);
        onChange && onChange(change);
    };

    return (
        <Typography className={`${className}`}>
            <Slate editor={editor} value={controlledValue ?? value} onChange={(value) => handleChange(value)}>
                {!(readOnly || disableToolbar) && (
                    <div className="flex items-center bg-white border ">
                        <MarkButton format="bold" icon={faBold} />
                        <MarkButton format="italic" icon={faItalic} />
                        <MarkButton format="underline" icon={faUnderline} />

                        <div className="mx-2" />
                        <BlockButton format="heading-one" icon={faHeading} />
                        <BlockButton format="heading-two" icon={faHeading} />
                        <BlockButton format="block-quote" icon={faQuoteLeft} />
                        <BlockButton format="numbered-list" icon={faListOl} />
                        <BlockButton format="bulleted-list" icon={faListUl} />
                    </div>
                )}
                <Editable
                    readOnly={readOnly}
                    style={{ minHeight: `${!readOnly ? (disableToolbar ? '5rem' : '10rem') : '1rem'}` }}
                    className={!readOnly ? `bg-white border rounded p-2` : ''}
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    spellCheck
                    onKeyDown={(event) => {
                        for (const hotkey in HOTKEYS) {
                            if (isHotkey(hotkey, event as any)) {
                                event.preventDefault();
                                const mark = (HOTKEYS as any)[hotkey];
                                toggleMark(editor, mark);
                            }
                        }
                    }}
                />
            </Slate>
        </Typography>
    );
};

const toggleBlock = (editor: any, format: any) => {
    const isActive = isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(editor, {
        match: (n) => LIST_TYPES.includes(!Editor.isEditor(n) && SlateElement.isElement(n) && (n.type as any)),
        split: true,
    });
    const newProperties: Partial<SlateElement> = {
        type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    };
    Transforms.setNodes(editor, newProperties);

    if (!isActive && isList) {
        const block = { type: format, children: [] };
        Transforms.wrapNodes(editor, block);
    }
};

const toggleMark = (editor: any, format: any) => {
    const isActive = isMarkActive(editor, format);

    if (isActive) {
        Editor.removeMark(editor, format);
    } else {
        Editor.addMark(editor, format, true);
    }
};

const isBlockActive = (editor: any, format: any) => {
    const [match] = Editor.nodes(editor, {
        match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    });

    return !!match;
};

const isMarkActive = (editor: any, format: any) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
};

const Element = ({ attributes, children, element }: any) => {
    switch (element.type) {
        case 'block-quote':
            return <blockquote {...attributes}>{children}</blockquote>;
        case 'bulleted-list':
            return <ul {...attributes}>{children}</ul>;
        case 'heading-one':
            return <h1 {...attributes}>{children}</h1>;
        case 'heading-two':
            return <h2 {...attributes}>{children}</h2>;
        case 'list-item':
            return <li {...attributes}>{children}</li>;
        case 'numbered-list':
            return <ol {...attributes}>{children}</ol>;
        default:
            return <p {...attributes}>{children}</p>;
    }
};

const Leaf = ({ attributes, children, leaf }: any) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>;
    }

    if (leaf.italic) {
        children = <em>{children}</em>;
    }

    if (leaf.underline) {
        children = <u>{children}</u>;
    }

    return <span {...attributes}>{children}</span>;
};

const BlockButton = ({ format, icon }: EditorButtonProps) => {
    const editor = useSlate();
    return (
        <ToolbarButton
            active={isBlockActive(editor, format)}
            onMouseDown={(event) => {
                event.preventDefault();
                toggleBlock(editor, format);
            }}
        >
            <FontAwesomeIcon icon={icon} size="1x" />
        </ToolbarButton>
    );
};

const MarkButton = ({ format, icon }: EditorButtonProps) => {
    const editor = useSlate();
    return (
        <ToolbarButton
            active={isMarkActive(editor, format)}
            onMouseDown={(event) => {
                event.preventDefault();
                toggleMark(editor, format);
            }}
        >
            <FontAwesomeIcon icon={icon} size={format === 'heading-two' ? 'xs' : '1x'} />
        </ToolbarButton>
    );
};

export default TextEditor;
