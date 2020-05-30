import PropTypes from 'prop-types';
import PrivateRoutes from './PrivateRoutes';

PrivateRoutes.protoTypes = {
  session: PropTypes.bool.isRequired,
  routesSchema: PropTypes.object.isRequired,
};

PrivateRoutes.defaultProps = {
  session: false,
  routesSchema: {},
};

export default PrivateRoutes;
