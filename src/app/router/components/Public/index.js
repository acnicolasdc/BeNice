import PropTypes from 'prop-types';
import PublicRoutes from './PublicRoutes';

PublicRoutes.protoTypes = {
  session: PropTypes.bool.isRequired,
  routesSchema: PropTypes.object.isRequired,
};

PublicRoutes.defaultProps = {
  session: false,
  routesSchema: {},
};

export default PublicRoutes;
