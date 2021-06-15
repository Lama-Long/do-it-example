import React from 'react';
import { storiesOf } from '@storybook/react';
import Toast from '../doit-ui/Toast';
import Modal from '../doit-ui/Modal';

storiesOf('Doit-UI/Toast', module)
    .addWithJSX('기본 예제', () => <Toast message="기본 예제" />)
    .addWithJSX('warning', () => <Toast message="warning" warning />);
