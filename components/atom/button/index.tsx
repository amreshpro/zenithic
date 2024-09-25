"use client";
import React from "react";
// import { css } from "@emotion/react";
import styled from "@emotion/styled";

type ButtonProps = {
  children?: React.ReactNode | string;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: "large" | "medium" | "small";
  variant?: "primary" | "secondary" | "tertiary" | "ghost" | "link";
};

// const baseButtonStyles = css`
//   padding: 10px 20px;
//   border-radius: 5px;
//   font-size: 16px;
//   cursor: pointer;
// `;

const MainButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  color: aliceblue;
  background-color: #e341e9;
  outline: none;
  border: none;
`;

/* const sizeStyles = {
  large: css`
    font-size: 20px;
  `,
  medium: css`
    font-size: 16px;
  `,
  small: css`
    font-size: 12px;
  `,
}; */

/* const variantStyles = {
  primary: css`
    background-color: rgb(247, 40, 251);
    color: white;
  `,
  secondary: css`
    background-color: rgb(108, 117, 125);
    color: white;
  `,
  tertiary: css`
    background-color: rgb(224, 224, 224);
    color: black;
  `,
  ghost: css`
    background-color: transparent;
    border: 1px solid rgb(0, 123, 255);
    color: rgb(0, 123, 255);
  `,
  link: css`
    background-color: transparent;
    color: rgb(0, 123, 255);
    text-decoration: underline;
  `,
}; */

export function Button(props: ButtonProps) {
  const {
    title = "Button",
    onClick = () => {},

    children,
  } = props;

  return (
    /* <button onClick={onClick} className={""}>
      {children ?? title}
    </button> */
    <MainButton onClick={onClick}>{children ?? title}</MainButton>
  );
}
