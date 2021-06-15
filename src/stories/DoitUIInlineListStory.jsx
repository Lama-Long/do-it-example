import React from 'react';
import { css } from 'react-with-styles';
import { storiesOf } from '@storybook/react';
import InlineList from '../doit-ui/InlineList';

function RedBox({ child }) {
    return (
        <div {...css({ backgroundColor: 'red', padding: 30, height: Math.random() * 100 })}>
            {child}
        </div>
    );
}

storiesOf('Doit-UI/InlineList', module)
    .addWithJSX('기본 설정', () => (
        <InlineList>
            <RedBox>1</RedBox>
            <RedBox>2</RedBox>
            <RedBox>3</RedBox>
        </InlineList>
    ))
    .addWithJSX('align=center', () => (
        <InlineList align="center">
            <RedBox>1</RedBox>
            <RedBox>2</RedBox>
            <RedBox>3</RedBox>
        </InlineList>
    ))
    .addWithJSX('align=right', () => (
        <InlineList align="right">
            <RedBox>1</RedBox>
            <RedBox>2</RedBox>
            <RedBox>3</RedBox>
        </InlineList>
    ))
    .addWithJSX('verticalAlign=top', () => (
        <InlineList verticalAlign="top">
            <RedBox>1</RedBox>
            <RedBox>2</RedBox>
            <RedBox>3</RedBox>
        </InlineList>
    ))
    .addWithJSX('verticalAlign=bottom', () => (
        <InlineList verticalAlign="bottom">
            <RedBox>1</RedBox>
            <RedBox>2</RedBox>
            <RedBox>3</RedBox>
        </InlineList>
    ));
