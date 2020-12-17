import { ProfileContainer } from '../profile-icon/styles';

type Props = {
    headerSrc?: string;
    profileSrc?: string;
    title?: string;
    description?: string;

    onTitleChanged: (title: string) => void;
    onDescriptionChanged: (title: string) => void;
};

const EditableProfileHead = (props: Props) => {
    const { title, description, onTitleChanged, onDescriptionChanged } = props;

    return (
        <div>
            <div className="relative h-36 w-full">
                <div className="absolute t-0 h-36 w-full">
                    <div className="relative h-36 w-full cursor-pointer bg-blue-100 transition hover:bg-gray-400 active:bg-gray-500" />
                </div>
                <hr className="absolute top-36 w-full border-gray-300" />
                <div className="absolute top-36 left-1/2 sm:left-1/4 transform -translate-y-1/2 -translate-x-1/2">
                    <ProfileContainer active size="lg" className="bg-blue-100" />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap items-center text-center sm:text-left sm:w-2/3 sm:ml-auto w-auto mt-20 sm:mt-2">
                <div className="sm:ml-8 xl:ml-8 w-full sm:mx-none">
                    <input
                        className="text-5xl font-bold w-full bg-transparent"
                        placeholder="Hobby Name"
                        size={1}
                        value={title}
                        onChange={(e) => onTitleChanged(e.target.value)}
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
