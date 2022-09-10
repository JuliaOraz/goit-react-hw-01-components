import {StatisticsBox, Title } from "./Statistics.styled";
import PropTypes from "prop-types";
import {StatisticsList} from "components/Statistics/StatisticsList";

export const Statistics = ({title, stats}) => { 
    return (
    <StatisticsBox>
            { title && (<Title>{title}</Title>)}
            <StatisticsList stats={stats} />
    </StatisticsBox>
)}


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape),
};
