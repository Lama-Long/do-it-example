import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../doit-ui/Card';
import Spacing from '../doit-ui/Spacing';

storiesOf('Doit-UI/Card', module).addWithJSX('기본 예제', () => (
    <Spacing top={5}>
        <Card top={1}>Card</Card>
        <Card bottom={2}>Card</Card>
        <Card left={3}>Card</Card>
        <Card right={4}>Card</Card>
        <Card vertical={5}>Card</Card>
        <Card horizontal={6}>Card</Card>
    </Spacing>
));
