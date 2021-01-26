import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import Button from '../../../components/button';
import Modal from '../../../components/modal';

type Props = {
    imageSrc: File;
    onFinish: (file: File) => void;
    onClose: () => void;
    aspectRatio: number;
};

const getCroppedImg = (image: HTMLImageElement, crop: ReactCrop.Crop): Promise<File> => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width as number;
    canvas.height = crop.height as number;
    const ctx = canvas.getContext('2d');

    ctx?.drawImage(
        image,
        (crop.x as number) * scaleX,
        (crop.y as number) * scaleY,
        (crop.width as number) * scaleX,
        (crop.height as number) * scaleY,
        0,
        0,
        crop.width as number,
        crop.height as number
    );

    // As Base64 string
    // const base64Image = canvas.toDataURL('image/jpeg');

    // As a blob
    return new Promise((resolve, reject) => {
        canvas.toBlob(
            (blob) => {
                if (blob) {
                    resolve(blob as File);
                } else {
                    reject();
                }
            },
            'image/jpeg',
            1
        );
    });
};

const ImageCropModal = (props: Props) => {
    const { imageSrc, aspectRatio, onClose, onFinish } = props;
    const [image, setImage] = useState<string>();
    const [crop, setCrop] = useState<ReactCrop.Crop>({ unit: '%', width: 30, aspect: aspectRatio ?? 16 / 9 });
    const imgRef = useRef<HTMLImageElement>();

    useEffect(() => {
        if (imageSrc) {
            const reader = new FileReader();
            reader.addEventListener('load', () => reader.result && setImage(reader.result as string));
            reader.readAsDataURL(imageSrc);
        }
    }, [imageSrc]);

    const onLoad = useCallback((img) => {
        imgRef.current = img;
    }, []);

    const handleFinish = async () => {
        if (imgRef.current) onFinish(await getCroppedImg(imgRef.current, crop));
    };

    return (
        <Modal title="Crop Image">
            {image && (
                <ReactCrop
                    className="rounded mt-2"
                    src={image}
                    crop={crop}
                    onImageLoaded={onLoad}
                    onChange={(c) => setCrop(c)}
                />
            )}
            <div className="flex mt-2">
                <Button
                    className="ml-auto mr-4"
                    variant="secondary"
                    onClick={() => onClose()}
                    disabled={!imgRef.current}
                >
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => handleFinish()} disabled={!imgRef.current}>
                    Finish
                </Button>
            </div>
        </Modal>
    );
};

export default ImageCropModal;
