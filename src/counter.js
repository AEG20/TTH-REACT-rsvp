import React from 'react';
import PropTypes from 'prop-types';

const Counter = props =>
  <table className="counter">
    <tbody>
      <tr>
        <td>Attending:</td>
        <td>{props.numbetAttending}</td>
      </tr>
      <tr>
        <td>{props.unconfirmed}</td>
        <td>1</td>
      </tr>
      <tr>
        <td>{props.totalInvited}</td>
        <td>3</td>
      </tr>
    </tbody>
  </table>;

Counter.propTypes = {
  numberAttending: PropTypes.number,
  numberUnconfirmed: PropTypes.number,
  totalInvited: PropTypes.number
}

export default Counter;