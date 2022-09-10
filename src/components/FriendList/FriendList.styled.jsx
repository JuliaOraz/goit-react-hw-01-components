import styled from '@emotion/styled';

export const FriendListBox = styled.ul`
    width: 20%;
    margin: 0 auto 50px;
` 
export const Item = styled.li`
    display:flex;
    align-items:center;
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 10px 15px;
    box-shadow: 1px 3px 10px 0px #33333326;
` 
export const Status = styled.span`
    height: 15px;
    width:15px;
    border-radius: 100%;
    background-color: ${({ isOnline }) => isOnline ? "green" : "red"};
    margin-right: 15px;
` 
export const Avatar = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 8px;
    margin-right: 15px;
    border: 1px solid #ebf0f5;
    padding: 10px;
` 
export const Name = styled.p`
    font-size: 18px;
    font-weight: 600;
` 