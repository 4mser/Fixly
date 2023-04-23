import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import styled from "styled-components";

const Profile = () => {
  const route = useRouter();
  const { user } = useUser();

  return (
    user && (
      <ProfileContainer>
        <ProfileStyle>
          <div className="image-container">
            <img src={user.picture} alt="" />
          </div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button onClick={() => route.push("/api/auth/logout")}>
            Cerrar Sesión
          </button>
        </ProfileStyle>
      </ProfileContainer>
    )
  );
};

export default Profile;

const ProfileContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const ProfileStyle = styled.div`
  width: 20rem;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2rem;
  color: white;
  gap: 1rem;

  .image-container {
    margin-top: 10rem;
    width: 6rem;
    height: 6rem;
  }

  img {
    width: 100%;
    height: 100%;
  }

  button {
    w
  }
`;
