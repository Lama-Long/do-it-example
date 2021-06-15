import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { unit } from './Theme';
import { css } from '../04/withStyles';

export const propTypes = {
    top: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    vertical: PropTypes.number,
    horizontal: PropTypes.number,
};

class Spacing extends PureComponent {
    render() {
        const { children, top, left, right, bottom, vertical, horizontal } = this.props;
        const computedTop = top ? top : vertical;
        const computedBottom = bottom ? bottom : vertical;
        const computedLeft = left ? left : horizontal;
        const computedRight = right ? right : horizontal;

        const computedStyle = {
            flex: 1,
            ...(computedTop && { marginTop: computedTop * unit }),
            ...(computedBottom && { marginTop: computedBottom * unit }),
            ...(computedLeft && { marginTop: computedLeft * unit }),
            ...(computedRight && { marginTop: computedRight * unit }),
        };
        return <div {...css(computedStyle)}>{children}</div>;
    }
}

Spacing.propTypes = propTypes;

export default Spacing;
