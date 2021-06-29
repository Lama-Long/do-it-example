import React, { PureComponent } from 'react';
import { css, withStyles, withStylesPropTypes } from '../../doit-ui/withStyles';
import Heading from '../../doit-ui/Heading';
import { Consumer as ModalConsumer } from '../../doit-ui/Modal/context';
import Button from '../../doit-ui/Button';
import { REGISTER_USER_MODAL } from '../constants/modals';

export const HEIGHT = 64;

class AppNav extends PureComponent {
  render() {
    const { styles } = this.props;
    return (
      <div {...css(styles.wrapper)}>
        <div {...css(styles.container)}>
          <div {...css(styles.title)}>
            <img {...css(styles.img)} src="logo.jpg" alt="logo" />
            <Heading level={3} inverse>
              두잇 코인 거래소
            </Heading>
          </div>
          <ModalConsumer>
            {({ openModal }) => (
              <Button
                inverse
                bold
                large
                onPress={() => openModal(REGISTER_USER_MODAL, { totalAmount: 0 })}
              >
                회원 가입
              </Button>
            )}
          </ModalConsumer>
        </div>
      </div>
    );
  }
}

AppNav.propTypes = {
  ...withStylesPropTypes,
};

export default withStyles(({ color, depth, unit }) => {
  return {
    wrapper: {
      ...depth.level1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: HEIGHT - 4,
      backgroundColor: color.primary,
      zIndex: 10,
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: unit * 2,
      paddingLeft: unit * 2,
    },
    title: {
      display: 'flex',
      alignItems: 'center',
    },
    img: {
      width: '30px',
      height: '30px',
      marginRight: '10px',
    },
  };
})(AppNav);
