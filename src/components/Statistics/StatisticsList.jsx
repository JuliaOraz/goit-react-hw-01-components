import { StatisticsItem } from 'components/Statistics/StatisticsItem';
import { StatisticsListBox } from './Statistics.styled';
import PropTypes from 'prop-types';

export const StatisticsList = ({ stats }) => {
  return (
    <StatisticsListBox>
      {stats.map(({ id, label, percentage }) => (
        <StatisticsItem key={id} label={label} percentage={percentage} />
      ))}
    </StatisticsListBox>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
