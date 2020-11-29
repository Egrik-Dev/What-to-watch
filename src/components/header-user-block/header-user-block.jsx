import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute, AuthStatus} from '../../const';

const HeaderUserBlock = (props) => {
  const {authorizationStatus, avatar} = props;

  return (
    <div className="user-block">
      {authorizationStatus === AuthStatus.AUTH
        &&
        <Link to={`/mylist`}>
          <div className="user-block__avatar">
            <img src={avatar} alt="User avatar" width="63" height="63" />
          </div>
        </Link>
        ||
        <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

HeaderUserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  avatar: USER.avatar
});

export {HeaderUserBlock};
export default connect(mapStateToProps)(HeaderUserBlock);
