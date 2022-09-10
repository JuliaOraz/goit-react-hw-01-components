import styled from '@emotion/styled';

export const BoxProfile = styled.div`
  box-shadow: 1px 3px 10px 0px #33333326;
  width: 25%;
  margin: 0 auto 50px;
  border-radius: 8px;
  overflow: hidden;
`;
export const BoxDescription = styled.div`
  background-color: #fff;
  text-align: center;
  padding: 40px 20px;
`;
export const Avatar = styled.img`
  border-radius: 100%;
  border: 1px solid #ebf0f5;
  padding: 10px;
  display: inline-block;
  max-height: 100px;
  height: 100%;
  max-width: 100px;
  width: 100%;
  margin-bottom: 20px;
`;
export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 10px;
`;
export const Text = styled.p`
  color: #778c9b;
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }
`;
export const Stats = styled.ul`
  display: flex;
  background-color: #f2f6f9;
  border-top: 1px solid #e8edf3;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: calc(100% / 3);
  border-right: 1px solid #e8edf3;
  padding: 20px 0;

  :last-child {
    border-right: none;
  }
`;
export const Label = styled.span`
  color: #9aa8b4;
  margin-bottom: 5px;
`;
export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
