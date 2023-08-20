import PropTypes from 'prop-types';
import { Trans } from './Trans/Trans';
import css from './transactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionhistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <Trans key={item.id} items={item} />
                ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};