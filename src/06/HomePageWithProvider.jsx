import React, { Component } from 'react';
import ButtonWithLoadingContext from './ButtonWithLoadingContext';
import LoadingProvider from './LoadingProvider';

function RowBComponent() {
    return <button>버튼</button>;
}

function RowCComponent() {
    return <ButtonWithLoadingContext>버튼</ButtonWithLoadingContext>;
}

function TableComponent() {
    return (
        <table>
            <RowBComponent />
            <RowCComponent />
        </table>
    );
}

class HomePageWithProvider extends Component {
    render() {
        return (
            <LoadingProvider>
                <TableComponent />
                <ButtonWithLoadingContext label="상태 변경" />
            </LoadingProvider>
        );
    }
}

export default HomePageWithProvider;
