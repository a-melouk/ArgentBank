import styled from "styled-components";
import PropTypes from "prop-types";
import StyledButton from "../components/Button";

const StyledAccountArticle = styled.article`
  display: flex;
  background-color: #f8f8f8;
  border-radius: 5px;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  padding-inline: 32px;
  padding-block: 24px;
  justify-content: space-between;
  border: 2px solid #c3cfd9;
`;

const StyledAccountDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  align-items: flex-start;
  gap: 8px;
`;

const StyledAccountSpan = styled.span`
  color: #283845;
  font-weight: 600;
`;

const StyledAccountBalance = styled.span`
  color: #283845;
  font-weight: bolder;
  font-size: 2.5rem;
`;

const StyledViewButton = styled(StyledButton)`
  background-color: #6458f5;
  color: #fff;
  padding: 8px;
  width: 200px;
`;

const formatCurrency = (amount) => {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

const Account = ({ accountName, balance }) => {
  return (
    <StyledAccountArticle>
      <StyledAccountDetails>
        <StyledAccountSpan>{accountName}</StyledAccountSpan>
        <StyledAccountBalance>{formatCurrency(balance)}</StyledAccountBalance>
        <StyledAccountSpan>Available Balance</StyledAccountSpan>
      </StyledAccountDetails>
      <StyledViewButton>View transactions</StyledViewButton>
    </StyledAccountArticle>
  );
};

Account.propTypes = {
  accountName: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
};

export default Account;
