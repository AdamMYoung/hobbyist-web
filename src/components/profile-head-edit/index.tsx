import React from 'react';
import useFileUpload from '../../hooks/useImageUpload';
import ProfileIcon from '../profile-icon';
import { ProfileContainer } from '../profile-icon/styles';

type Props = {
    bannerImgBase64?: string;
    profileImgBase64?: string;
    name?: string;
    description?: string;

    onNameChanged: (name: string) => void;
    onDescriptionChanged: (title: string) => void;
    onProfileImgChanged: (file: File) => void;
    onBannerImgChanged: (file: File) => void;
};

const uploadOptions = { fileTypes: ['.jpg', '.png'] };

const EditableProfileHead = (props: Props) => {
    const {
        name,
        description,
        bannerImgBase64,
        profileImgBase64,
        onNameChanged,
        onDescriptionChanged,
        onProfileImgChanged,
        onBannerImgChanged,
    } = props;

    const onUploadProfileImg = useFileUpload((files) => onProfileImgChanged(files[0]), uploadOptions);
    const onUploadBannerImg = useFileUpload((files) => onBannerImgChanged(files[0]), uploadOptions);

    return (
        <div>
            <div className="relative h-36 w-full">
                <div className="absolute t-0 h-36 w-full">
                    <div
                        className="relative h-36 w-full cursor-pointer bg-blue-100 transition hover:bg-gray-400 active:bg-gray-500"
                        onClick={onUploadBannerImg}
                    >
                        {bannerImgBase64 && (
                            <img
                                className="rounded-t-lg absolute inset-0 w-full h-full object-cover transition hover:opacity-60"
                                src={bannerImgBase64}
                                alt=""
                            />
                        )}
                    </div>
                </div>
                <hr className="absolute top-36 w-full border-gray-300" />
                <div className="absolute top-36 left-1/2 sm:left-1/4 transform -translate-y-1/2 -translate-x-1/2">
                    {!profileImgBase64 ? (
                        <ProfileContainer active size="lg" className="bg-blue-100" onClick={onUploadProfileImg} />
                    ) : (
                        <ProfileIcon
                            active
                            className="cursor-pointer"
                            onClick={onUploadProfileImg}
                            size="lg"
                            src={profileImgBase64}
                            alt=""
                        />
                    )}
                </div>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap items-center text-center sm:text-left sm:w-2/3 sm:ml-auto w-auto mt-20 sm:mt-2">
                <div className="sm:ml-8 xl:ml-8 w-full sm:mx-none">
                    <input
                        className="text-5xl font-bold w-full bg-transparent"
                        placeholder="Hobby Name"
                        size={1}
                        value={name}
                        onChange={(e) => onNameChanged(e.target.value)}
                    />
                    <input
                        className="mt-1 text-gray-400 w-full bg-transparent"
                        placeholder="Description"
                        size={1}
                        value={description}
                        onChange={(e) => onDescriptionChanged(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default EditableProfileHead;
