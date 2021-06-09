import React from 'react';
import createLoadingConsumer from './createLoadingConsumer';
import Button from '../04/Button';

const DefaultLoadingConsumer = createLoadingConsumer();
const Loading2Consumer = createLoadingConsumer('loading2');

export function ButtonWithConsumer({ children }) {
    return (
        <>
            <DefaultLoadingConsumer
                render={({ loading, setLoading }) => (
                    <Button onPress={() => setLoading(!loading)}>
                        {loading ? '컨텍스트1 로딩 중' : children}
                    </Button>
                )}
            />
            <Loading2Consumer
                render={({ loading, setLoading }) => (
                    <Button onPress={() => setLoading(!loading)}>
                        {loading ? '컨텍스트2 로딩 중' : children}
                    </Button>
                )}
            />
            <DefaultLoadingConsumer
                render={({ loading, setLoading }) => (
                    <Loading2Consumer
                        render={({ loading: loading2 }) => (
                            <Button onPress={() => setLoading(!loading)}>
                                {loading || loading2 ? '컨텍스트2 로딩 중' : children}
                            </Button>
                        )}
                    />
                )}
            />
        </>
    );
}
