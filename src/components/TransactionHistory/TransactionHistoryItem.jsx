import PropTypes from 'prop-types';
import { TR, TD } from './TransactionHistory.styled';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <TR>
      <TD>{type}</TD>
      <TD>{amount}</TD>
      <TD>{currency}</TD>
    </TR>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
