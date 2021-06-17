import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css } from './withStyles';

const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

class Heading extends PureComponent {
  render() {
    const {
      children,
      bold,
      light,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
      inverse,
      level,
    } = this.props;

    const HeadingTag = headingTags[level - 1];

    return (
      <HeadingTag
        {...css(
          styles.default,
          xsmall && styles.xsmall,
          small && styles.small,
          large && styles.large,
          xlarge && styles.xlarge,
          secondary && styles.secondary,
          primary && styles.primary,
          bold && styles.bold,
          light && styles.light,
          inverse && styles.inverse,
        )}
      >
        {children}
      </HeadingTag>
    );
  }
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  light: PropTypes.bool,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
  inverse: PropTypes.bool,
  level: PropTypes.number,
};

Heading.defaultProps = {
  level: 1,
};

export default withStyles(({ color, fontWeight, size, lineHeight, unit }) => ({
  default: {
    lineHeight: lineHeight.lg,
    fontWeight: fontWeight.bold,
  },
  xlarge: {
    fontSize: size.xg,
    lineHeight: lineHeight.xg,
  },
  large: {
    fontSize: size.lg,
    lineHeight: lineHeight.lg,
  },
  small: {
    fontSize: size.sm,
    lineHeight: lineHeight.sm,
  },
  xsmall: {
    fontSize: size.xs,
    lineHeight: lineHeight.xs,
  },
  primary: {
    color: color.primary,
  },
  secondary: {
    color: color.secondary,
  },
  light: {
    fontWeight: fontWeight.light,
  },
  bold: {
    fontWeight: fontWeight.bold,
  },
  inverse: {
    color: color.white,
  },
  level1: {
    fontSize: size.h1,
    marginTop: unit * 2,
    marginBottom: unit * 4,
  },
}))(Heading);
