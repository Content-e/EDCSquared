import { getMainDomainFromSubdomain } from "components";
import CoBrandedMainPage from "pages/coBranded/main";
import { FC, Fragment } from "react";
import { useParams } from "react-router-dom";
import "./authorizeTikTok.css";
import AuthorizeTikTokHandler from "./authorizeTikTokHandler";

export const AuthorizeTikTokStep: FC = () => {
  const { id } = useParams<{ id: string }>();

  const goToMain = (): void => {
    window.location.href = getMainDomainFromSubdomain();
  };

  return (
    <Fragment key="tik tok handlers">
      <CoBrandedMainPage />
      <AuthorizeTikTokHandler briefId={id} onCross={goToMain} />
    </Fragment>
  );
};

export default AuthorizeTikTokStep;
