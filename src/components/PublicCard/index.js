import PropTypes from 'prop-types';
import PublicCard from './PublicCard';
import logo from '@/assets/images/logo.png';

PublicCard.propTypes = {
  loading: PropTypes.bool,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

PublicCard.defaultProps = {
  loading: false,
  avatar: logo,
  name: 'Default User',
  date: '1 hours ago',
  image:
    'https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512',
  description:
    "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:",
};

export default PublicCard;
