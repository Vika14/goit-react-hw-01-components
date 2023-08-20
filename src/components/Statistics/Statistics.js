import PropTypes from 'prop-types';
import { StatisticItem } from './StatisticItem/StatisticItem';
import css from './statistics.module.css';

export const Statistics = ({ title, statis }) => {
    return (
        <div className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.item}> {statis.map(item => (
                    <StatisticItem key={item.id} statis={item} />
                ))}   
        </ul>
        </div>       
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    statis: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};