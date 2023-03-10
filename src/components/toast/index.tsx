import React, { Fragment } from "react";
import { ShouldRender } from "components";
import { ToastDisplay } from "./ToastDisplay";
import * as Styled from "./styles";
import { ErrorProps, IErrorStateType } from "utils";

export const ToastContainer: React.FC<ErrorProps> = ({
  errorState,
  setErrorState,
}) => {
  const setToastClosed = (
    errors: Array<IErrorStateType>,
    id: number
  ): Array<IErrorStateType> => [
    ...errors.slice(0, id),
    { ...errors[id], closed: true },
    ...errors.slice(id + 1),
  ];

  const removeToasts = (id: number): void =>
    setErrorState((current) => {
      const newErrors = setToastClosed(current, id);
      const notAllClosed = newErrors.find((error) => !error.closed);
      return notAllClosed ? newErrors : [];
    });

  return (
    <Styled.MainToastCover>
      <Styled.MainToast>
        <ShouldRender if={!!errorState.length}>
          <Fragment>
            {errorState.map((data, index: number) => (
              <ToastDisplay
                key={`${index}`}
                {...data}
                id={index}
                removeError={removeToasts}
              />
            ))}
          </Fragment>
        </ShouldRender>
      </Styled.MainToast>
    </Styled.MainToastCover>
  );
};

export default ToastContainer;
