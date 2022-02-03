import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <div>
      <button style={{ backgroundColor: props.color }} className="btn"
        onClick={props.onClick}>{props.label}</button>
    </div>
  )
}

Button.defaultProps = {
  label: 'Button text',
  color: 'steelblue'
}

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  onClic: PropTypes.func
}

export default Button
