import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderUserBlock = (props) => {
  const {authorizationStatus, avatar} = props;

  return (
    <div className="user-block">
      {authorizationStatus === `AUTH`
        &&
        <Link to={`/mylist`}>
          <div className="user-block__avatar">
            <img src={avatar} alt="User avatar" width="63" height="63" />
          </div>
        </Link>
        ||
        <Link to={`/login`} className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  avatar: USER.avatar
});

HeaderUserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

export {HeaderUserBlock};
export default connect(mapStateToProps)(HeaderUserBlock);
