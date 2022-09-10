import styled from '@emotion/styled';



export const TransactionHistoryTable = styled.table`
    box-shadow: 1px 3px 10px 0px #33333326;
    width: 50%;
    margin: auto;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    border-spacing: 0;
` 
export const TableHead = styled.thead`
    background-color: #00bfd7;
` 

export const THead = styled.th`
    width: calc(100% / 3);
    color: #fff;
    padding: 15px 0;
    border-right: 1px solid #35e1e8;
    text-transform: uppercase;
    font-weight: 600;
    box-shadow: -2px 0px 0px #33333314;
` 
export const TR = styled.tr`
    :nth-of-type(even){
        background-color: #ebf1f4;
    }
` 
export const TD = styled.td`
    padding: 15px 0;
    border-right: 1px solid #efefef;
    text-align:center;
    color: #7e7f83;
    text-transform: capitalize;
    box-shadow: -2px 0px 0px #33333308;
` 