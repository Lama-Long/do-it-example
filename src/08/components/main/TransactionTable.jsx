import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Table from '../../../doit-ui/Table';
import TableHead from '../../../doit-ui/TableHead';
import TableRow from '../../../doit-ui/TableRow';
import TableCell from '../../../doit-ui/TableCell';
import TableBody from '../../../doit-ui/TableBody';
import Spacing from '../../../doit-ui/Spacing';
import Text from '../../../doit-ui/Text';
import withLoading from '../../../05/withLoading';

const LoadingMessage = (
  <Spacing vertical={4} horizontal={2}>
    <Text large>데이터를 불러들이고 있습니다.</Text>
  </Spacing>
);

class TransactionTable extends PureComponent {
  render() {
    const { transactions } = this.props;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left" isHeader>
              코인
            </TableCell>
            <TableCell align="center" isHeader>
              시가 총액
            </TableCell>
            <TableCell align="center" isHeader>
              현재 시세
            </TableCell>
            <TableCell align="center" isHeader>
              거래 시간
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(({ id, name, totalPrice, currentPrice, dateTime }) => (
            <TableRow id={id} key={id}>
              <TableCell align="left">{name}</TableCell>
              <TableCell align="right">{totalPrice.toLocaleString()}</TableCell>
              <TableCell align="right">{currentPrice.toLocaleString()}</TableCell>
              <TableCell align="center">{dateTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      totalPrice: PropTypes.number,
      currentPrice: PropTypes.number,
      dateTime: PropTypes.string,
    }),
  ),
};

export default withLoading(LoadingMessage)(TransactionTable);
