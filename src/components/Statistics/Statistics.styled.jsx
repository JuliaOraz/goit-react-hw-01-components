import styled from '@emotion/styled';

export const StatisticsBox = styled.section`
    width: 30%;
    margin: 0 auto 50px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 1px 3px 10px 0px #33333326;
` 
export const Title = styled.h2`
    background-color: #fff;
    color: #4d545c;
    font-size: 22px;
    font-weight: 700;
    text-align:center;
    text-transform: uppercase;
    padding: 30px 0;
` 
export const StatisticsListBox = styled.ul`
    display: flex;
` 
export const Item = styled.li`
    flex-basis: calc(100% / 5);
    background-color: ${getRandomHexColor};
    text-align: center;
    padding: 20px 0;
    border-right: 1px solid #fff;

    :last-child{
        border-right: none;
    }
` 
export const Label = styled.span`
    display: block;
    color: #fff;
    margin-bottom: 5px;
` 
export const Percentage = styled.span`
    display: block;
    color: #fff;
    font-size: 22px;
` 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}