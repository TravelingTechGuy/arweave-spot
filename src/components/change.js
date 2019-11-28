import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';

const Change = ({change, prefix, suffix}) => {
  const number = Number(change.replace(/[+%$]/g, ''));
  const formatted = `${prefix}${number.toFixed(2)}${suffix}`;
  const [color, direction] = number > 0 ? ['green', 'up'] : ['red', 'down'];
  return number === 0 ?
    <span>{formatted}</span>
    :
    <span style={{color}}>{formatted}<Icon name={`arrow ${direction}`} color={color} /></span>;
};

Change.propTypes = {
  change: PropTypes.any.isRequired,
  prefix: PropTypes.string,
  suffix: PropTypes.string
};

Change.defaultProps = {
  change: '0',
  prefix: '',
  suffix: ''
};

export default Change;
