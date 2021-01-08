import { useMemo } from 'react';
import Select, { components } from 'react-select';
import ProfileIcon from '../../components/profile-icon';
import { Hobby } from '../../types';

const { Option, SingleValue } = components;

type IconOptionProps = React.ComponentPropsWithoutRef<typeof Option>;

const IconOption = (props: IconOptionProps) => {
    const hobby = props.data.value as Hobby;

    return (
        <Option {...props}>
            <div className="flex items-center">
                <ProfileIcon size="xs" src={hobby.profileSrc} alt={hobby.name} />
                <div className="ml-2">{props.data.label}</div>
            </div>
        </Option>
    );
};

type ValueOptionsProps = React.ComponentPropsWithoutRef<typeof SingleValue>;

const ValueOptions = (props: ValueOptionsProps) => {
    const hobby = props.data.value as Hobby;

    return (
        <SingleValue {...props}>
            <div className="flex items-center">
                <ProfileIcon size="xs" src={hobby.profileSrc} alt={hobby.name} />
                <div className="ml-2">{props.data.label}</div>
            </div>
        </SingleValue>
    );
};

type Props = {
    onHobbyChange?: (hobby: Hobby) => void;
    selectedHobby?: Hobby;
    hobbies: Hobby[];
    readOnly?: boolean;
};

const HobbiesDropdown = (props: Props) => {
    const { onHobbyChange, selectedHobby, hobbies, readOnly } = props;

    const options = useMemo(() => hobbies.map((hobby) => ({ value: hobby, label: hobby.name })), [hobbies]);
    const currentValue = useMemo(() => {
        if (!selectedHobby) return null;

        return options.filter((o) => o.value === selectedHobby)[0];
    }, [options, selectedHobby]);

    return (
        <Select
            isDisabled={readOnly}
            options={options}
            value={currentValue}
            components={{ Option: IconOption, SingleValue: ValueOptions }}
            onChange={(entry) => entry && onHobbyChange && onHobbyChange(entry.value)}
        />
    );
};

export default HobbiesDropdown;
