import { BrandType } from "hooks/utils";
import { FC } from "react";
import { useHistory } from "react-router-dom";
import { AuthRoutes } from "utils";
import * as S from "./styles";

interface Props {
  data: BrandType;
}
export const BrandData: FC<Props> = () => {
  const history = useHistory();
  const goToBrand = (): void => history.push(AuthRoutes.Brand);

  return (
    <S.NoDataWrapper>
      <S.NoDataTitle>
        You do not currently have a brand setup, build your brand now.{" "}
      </S.NoDataTitle>
      <S.NoDataButton onClick={goToBrand}>Create Brand</S.NoDataButton>
    </S.NoDataWrapper>
  );
};

export default BrandData;
