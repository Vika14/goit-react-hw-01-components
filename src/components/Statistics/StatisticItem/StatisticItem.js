import PropTypes from 'prop-types';
import css from './statisticItem.module.css';

export const StatisticItem = ({ statis: { label, percentage } }) => {
    return (
        <li className={css.items}>
            <span>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>
    );
}

StatisticItem.propTypes = {
    statis: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired
};