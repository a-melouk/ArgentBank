import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedIn, getUser } from "../app/selectors";
import * as auth from "../authentication/auth-provider";

const StyledMain = styled.main`
  background-color: #12002b;
  display: flex;
  flex-direction: column;
  flex: 1;
  color: white;
  align-items: center;
  justify-content: center;
`;

const StyledProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
`;

const StyledHeadingDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  background-color: #00bc77;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-weight: bold;
  justify-content: center;
  margin-top: 16px;
  padding: 16px;
`;

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  width: 100%;
  justify-content: space-around;
  border: none;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  color: #12002b;
  font-size: 1.2rem;
  height: 40px;
  padding: 8px 16px;
  width: 35%;
`;

const StyledFormButton = styled(StyledButton)`
  width: 30%;
  height: 32px;
  align-items: center;
`;

const Profile = () => {
  const user = useSelector(getUser);
  const loggedIn = useSelector(getLoggedIn);
  const dispatch = useDispatch();

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const body = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
    };
    try {
      const updateName = await auth.updateProfile(body, auth.getToken());
      if (updateName.status === 200) {
        auth.setUser(body);
        dispatch({ type: "SET_USER", payload: { user: body, loggedIn: true } });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <StyledMain>
      {loggedIn ? (
        <StyledProfileDiv>
          <StyledHeadingDiv>
            <h1>Welcome back</h1>
            <h1>
              {user.firstName} {user.lastName} !
            </h1>
          </StyledHeadingDiv>
          <StyledButton>Edit name</StyledButton>
          <StyledForm onSubmit={handleSubmit}>
            <StyledFieldset>
              <StyledInput
                type="text"
                name="firstName"
                defaultValue={user.firstName}
              />
              <StyledInput
                type="text"
                name="lastName"
                defaultValue={user.lastName}
              />
            </StyledFieldset>
            <StyledFormButton type="submit">Save</StyledFormButton>
            <StyledFormButton type="button">Cancel</StyledFormButton>
          </StyledForm>
        </StyledProfileDiv>
      ) : (
        <h1>Vous devez vous connecter</h1>
      )}
    </StyledMain>
  );
};

export default Profile;
