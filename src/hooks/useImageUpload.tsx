import { useCallback, useRef, useState } from 'react';

type InputOptions = {
    multiple: boolean;
    fileTypes: string[];
};

const defaultInputOptions: InputOptions = {
    multiple: false,
    fileTypes: [],
};

const useFileUpload = (options?: Partial<InputOptions>) => {
    const [files, setFiles] = useState<File[]>();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const { fileTypes, multiple } = { ...defaultInputOptions, ...options };

    const handleChange = useCallback(
        (event: Event) => {
            const target = event?.target as any;

            if (target && target.files) {
                setFiles(target.files);
            }
        },
        [setFiles]
    );

    if (!inputRef.current) {
        inputRef.current = document.createElement('input');
        inputRef.current.type = 'file';
        inputRef.current.onclick = (e) => ((e.target as any).value = '');
        inputRef.current.onchange = handleChange;
        inputRef.current.multiple = multiple;

        if (fileTypes.length > 0) {
            inputRef.current.accept = fileTypes.join(',');
        }
    }

    return { files, selectFiles: () => inputRef.current?.click() };
};

export default useFileUpload;
