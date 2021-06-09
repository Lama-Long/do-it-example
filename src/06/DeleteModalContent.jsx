import React from 'react';
import Text from '../04/Text';
import Button from '../04/Button';
import { Consumer } from './ModalContext';

export default function DeleteModalContent({ id, name }) {
    return (
        <Consumer>
            {({ closeModal }) => (
                <div>
                    <div>
                        <Text>{name}을 정말 삭제하시겠습니까?</Text>
                    </div>
                    <Button primary>예</Button>
                    <Button onPress={closeModal}>닫기</Button>
                </div>
            )}
        </Consumer>
    );
}
