import { Helmet } from 'react-helmet';

type Props = {
    title?: string;
    description?: string;
};

const SEO: React.FC<Props> = (props) => {
    const { title, description } = props;

    return (
        <Helmet>
            {title ? <title>{title} - hobbyist.</title> : <title>hobbyist.</title>}
            {description && <meta name="description" content={description} />}
        </Helmet>
    );
};

export default SEO;
