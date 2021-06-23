import Api from '../Api';
export const CREATE_TRANSACTION = 'transaction/CREATE_TRANSACTION';

export function createTransaction(data, onComplete, onFinish) {
  return {
    type: CREATE_TRANSACTION,
    promise: Api.post('/transactions', data),
    meta: {
      onSuccess: onComplete,
      notification: {
        success: '거래가 성공적으로 완료되었습니다.',
      },
      onFinish,
    },
  };
}
