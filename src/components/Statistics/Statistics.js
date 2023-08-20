import PropTypes from 'prop-types';
import css from './statistics.module.css';

export const Statistics = ({ title, statis }) => (
  <div className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.item}>
      {statis.map(item => (
        <li className={css.items} key={item.id}>
          <span>{item.label}</span>
          <span className={css.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </div>
);

Statistics.propTypes = {
  title: PropTypes.string,
  statis: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
