import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css, withStyles } from './withStyles';

class Button extends PureComponent {
  render() {
    const {
      type,
      children,
      disabled,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
      onPress,
    } = this.props;

    return (
      <button
        {...css(
          styles.default,
          xsmall && styles.xsmall,
          small && styles.small,
          large && styles.large,
          xlarge && styles.xlarge,
          secondary && styles.secondary,
          primary && styles.primary,
          disabled && styles.disabled,
        )}
        type={type}
        onClick={onPress}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
  onPress: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
};

Button.defaultProps = {
  onPress: () => {},
  xsmall: false,
  small: false,
  large: false,
  xlarge: false,
  secondary: false,
  primary: false,
};

export default withStyles(({ color, size, unit, depth, fontWeight }) => ({
  default: {
    ...depth.level1,
    border: 1,
    borderStyle: 'solid',
    borderColor: color.default,
    borderRadius: unit,
    color: color.default,
    fontSize: size.md,
    fontWeight: fontWeight.bold,
    padding: unit * 2,
    paddingLeft: unit * 4,
    paddingRight: unit * 4,
    outline: 0,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: color.grayLight,
    },
    ':focus': {
      boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.3)',
    },
  },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
    padding: unit,
  },
  small: {
    fontSize: size.sm,
    padding: unit,
  },
  xsmall: {
    fontSize: size.xs,
    padding: unit,
  },
  primary: {
    borderColor: color.primary,
    color: color.white,
    backgroundColor: color.primary,
    ':hover': {
      backgroundColor: color.primaryDark,
    },
  },
  secondary: {
    borderColor: color.secondary,
    color: color.secondary,
  },
  disabled: {
    borderColor: color.grayDark,
    color: color.grayLight,
    cursor: 'default',
    opacity: 0.5,
    backgroundColor: color.gray,
    ':hover': {
      backgroundColor: color.gray,
    },
  },
}))(Button);
