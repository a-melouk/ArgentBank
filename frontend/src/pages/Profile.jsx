import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getToken, getUser } from "../app/selectors";
import * as auth from "../authentication/auth-provider";
import { useState } from "react";
import Account from "../components/Account";
import StyledButton from "../components/Button";
import Spinner from "../components/Spinner";

const StyledMain = styled.main`
  background-color: #dfe6ed;
  display: flex;
  flex-direction: column;
  flex: 1;
  color: #283845;
  align-items: center;

  /* justify-content: center; */
`;

const StyledProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding-inline: 32px;
  margin-block: 32px;
  gap: 8px;
`;

const StyledHeadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* max-height: 152px; */
  gap: 8px;
`;

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 16px;
  border: none;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  color: #c3cfd9;
  font-size: 1.2rem;
  padding: 4px 8px;
  width: 191px;
  max-width: 23%;
`;

const StyledFormButton = styled(StyledButton)`
  background-color: #2c3e50;
  color: #fff;
  height: 30px;
  padding-block: 10px;
  width: 114px;
  gap: 5px;
`;

const StyledNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const Profile = () => {
  document.title = "Argent Bank - Profile";
  const [isEditing, setIsEditing] = useState(false);
  const user = useSelector(getUser);
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    const data = new FormData(event.target);
    const body = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
    };
    try {
      const updateName = await auth.updateProfile(body, token);
      if (updateName.status === 200) {
        auth.setUser(body);
        dispatch({
          type: "SET_USER",
          payload: { user: body },
        });
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    } finally {
      setIsEditing(false);
      setLoading(false);
    }
  }

  function handleEdit(event) {
    event.preventDefault();
    setIsEditing(true);
  }

  function handleCancel(event) {
    event.preventDefault();
    setIsEditing(false);
  }

  return (
    <StyledMain>
      <StyledProfileDiv>
        {token && (
          <>
            <StyledHeadingDiv>
              <h1>Welcome back</h1>
            </StyledHeadingDiv>
            {!isEditing ? (
              <>
                <StyledNameDiv>
                  <h1>
                    {user.firstName} {user.lastName} !
                  </h1>
                  <StyledFormButton onClick={handleEdit}>
                    Edit name
                  </StyledFormButton>
                </StyledNameDiv>
              </>
            ) : (
              <>
                <StyledNameDiv>
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
                    <StyledFormButton type="submit" style={{ marginRight: 16 }}>
                      Save {loading && <Spinner />}
                    </StyledFormButton>
                    <StyledFormButton type="button" onClick={handleCancel}>
                      Cancel
                    </StyledFormButton>
                  </StyledForm>
                </StyledNameDiv>
              </>
            )}
            <Account accountName="Argent bank checking" balance={2082.79} />
            <Account accountName="Argent bank savings" balance={10928.42} />
            <Account accountName="Argent bank credit card" balance={184.3} />
          </>
        )}
      </StyledProfileDiv>
      {!token && <h1>You must login</h1>}
    </StyledMain>
  );
};

export default Profile;
