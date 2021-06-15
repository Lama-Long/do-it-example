import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../doit-ui/Text';

storiesOf('Doit-UI/Text', module).addWithJSX('Text 예제', () => (
    <div>
        <Text xlarge>Xlarge</Text>
        <Text xlarge primary>
            Xlarge primary
        </Text>
        <Text xlarge secondary>
            Xlarge secondary
        </Text>
        <Text xlarge bold>
            Xlarge bold
        </Text>
        <Text xlarge light>
            Xlarge light
        </Text>
        <br />
        <Text large>large</Text>
        <Text large primary>
            large primary
        </Text>
        <Text large secondary>
            large secondary
        </Text>
        <Text large bold>
            large bold
        </Text>
        <Text large light>
            large light
        </Text>
        <br />
        <Text small>small</Text>
        <Text small primary>
            small primary
        </Text>
        <Text small secondary>
            small secondary
        </Text>
        <Text small bold>
            small bold
        </Text>
        <Text small light>
            small light
        </Text>
        <br />
        <Text xsmall>xsmall</Text>
        <Text xsmall primary>
            xsmall primary
        </Text>
        <Text xsmall secondary>
            xsmall secondary
        </Text>
        <Text xsmall bold>
            xsmall bold
        </Text>
        <Text xsmall light>
            xsmall light
        </Text>
    </div>
));
