import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderUserBlock = (props) => {
  const {authorizationStatus} = props;

  return (
    <div className="user-block">
      {authorizationStatus === `AUTH`
        &&
        <div className="user-block__avatar">
          <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
        ||
        <Link to={`/login`} className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus
});

HeaderUserBlock.propTypes = {
  authorizationStatus: PropTypes.bool.isRequired,
};

export {HeaderUserBlock};
export default connect(mapStateToProps)(HeaderUserBlock);
