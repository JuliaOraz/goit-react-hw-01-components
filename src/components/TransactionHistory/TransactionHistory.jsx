import {
  TransactionHistoryTable,
  TableHead,
  THead,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';
import { TransactionHistoryItem } from 'components/TransactionHistory/TransactionHistoryItem';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <TableHead>
        <tr>
          <THead>Type</THead>
          <THead>Amount</THead>
          <THead>Currency</THead>
        </tr>
      </TableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionHistoryItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
