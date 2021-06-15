import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import Modal from './Modal';

export default function createModalProvider(ContentMap = {}) {
    return class ModalProvider extends PureComponent {
        state = {
            showModal: false,
        };

        constructor(props) {
            super(props);
        }

        handleOpen = (contentId, modalProps) => {
            this.contentId = contentId;
            this.modalProps = modalProps;
            this.setState({ showModal: true });
        };

        handleClose = () => {
            this.setState({ showModal: false });
        };

        render() {
            const { children } = this.props;
            const { showModal } = this.state;
            const ModalContent = ContentMap[this.contentId];

            return (
                <Provider value={{ openModal: this.handleOpen, closeModal: this.handleClose }}>
                    {children}
                    {showModal && ModalContent && (
                        <Modal>
                            <ModalContent {...this.modalProps} />
                        </Modal>
                    )}
                </Provider>
            );
        }
    };
}
