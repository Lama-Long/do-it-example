import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css, withStyles, withStylesPropTypes } from './withStyles';
import Spacing, { propTypes as SpacingPropTypes } from './Spacing';

class Card extends PureComponent {
  render() {
    const { children, styles, ...spacingProps } = this.props;
    return (
      <div {...css(styles.wrapper)}>
        <Spacing {...spacingProps}>{children}</Spacing>
      </div>
    );
  }
}

Card.propTypes = {
  ...SpacingPropTypes,
  ...withStylesPropTypes,
  children: PropTypes.node,
};

export default withStyles(({ depth, unit, color }) => ({
  wrapper: {
    ...depth.level1,
    borderRadius: unit,
    backgroundColor: color.white,
    display: 'flex',
    overflow: 'hidden',
    marginBottom: unit * 4,
  },
}))(Card);
