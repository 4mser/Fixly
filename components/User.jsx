import { CiUser } from "react-icons/ci";

import { useRouter } from "next/router";
import styled from "styled-components";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function User() {
  const route = useRouter();
  const { user } = useUser();

  if (!user)
    return (
      <Login>
        <CiUser onClick={() => route.push("api/auth/login")}></CiUser>
      </Login>
    );
  return (
    <Profile onClick={() => route.push("/profile")}>
      <img src={user.picture} alt={user.name} />
    </Profile>
  );
}

const Profile = styled.div`
  cursor: pointer;
  img {
    border-radius: 50%;
    width: 1.8rem;
    height: 1.8rem;
  }

  @media (max-width: 700px) {
    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 1.8rem;
    height: 1.8rem;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    svg {
      width: 1.1rem;
      height: 1.1rem;
    }
  }
`;
