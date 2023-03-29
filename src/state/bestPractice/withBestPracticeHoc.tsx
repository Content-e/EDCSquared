import React, { useEffect, useState } from "react";
import withApolloProvider from "hooks/apollo/withApollo";
import { createBestPractice, editBestPractice } from "hooks";
import {
  ICreateBestPractice,
  BestPracticeProps,
} from "./bestPractice.interface";
import { useHistory, useLocation } from "react-router-dom";
import { BestPractices } from "API";
import { BrandRoutes, AdminRoutes } from "utils";

export function withbestPractice<T>(
  Component: React.FC<T & BestPracticeProps>
): React.FC<T> {
  return withApolloProvider((props: T) => {
    const history = useHistory();
    const { pathname, state } = useLocation();

    const [bestPracticeState, setBestPractice] =
      useState<ICreateBestPractice>();

    const {
      createBrief,
      loading: createLoading,
      data: createData,
    } = createBestPractice();
    const {
      editBrief,
      loading: editLoading,
      data: editData,
    } = editBestPractice();

    const saveData = (input: ICreateBestPractice): void => {
      if (input.id) editBrief({ variables: { input } });
      else createBrief({ variables: { input: { input } } });
    };

    useEffect(() => {
      if (pathname.includes(BrandRoutes.EditBrief)) {
        const { practice } = (state || {}) as { practice: BestPractices };
        if (practice?.id) setBestPractice(practice);
        else history.replace(AdminRoutes.CreatePractice);
      }
    }, [state, pathname]);

    const hocProps: BestPracticeProps = {
      saveData,
      bestPracticeState,
      loading: createLoading || editLoading,
      response: createData || editData,
    };
    return <Component {...props} {...hocProps} />;
  });
}
export default withbestPractice;
