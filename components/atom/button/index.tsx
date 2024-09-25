"use client";
import { css } from "@emotion/react";
import React from "react";

type ButtonProps = {
  children?: React.ReactNode | string;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: "large" | "medium" | "small";
  variant?: "primary" | "secondary" | "tertiary" | "ghost" | "link";
};

const baseButtonStyles = css`
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

// Define size styles
const sizeStyles = {
  large: css`
    font-size: 20px;
    padding: 15px 30px;
  `,
  medium: css`
    font-size: 16px;
    padding: 10px 20px;
  `,
  small: css`
    font-size: 12px;
    padding: 5px 10px;
  `,
};

// Define variant styles
const variantStyles = {
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
};

export function Button(props: ButtonProps) {
  const {
    title = "Button",
    onClick = () => {},
    variant = "primary", // default to primary
    size = "medium", // default to medium
    children,
  } = props;

  return (
    <button
      onClick={onClick}
      css={[
        baseButtonStyles, // Apply base styles
        sizeStyles[size], // Apply size-specific styles
        variantStyles[variant], // Apply variant-specific styles
      ]}
    >
      {children ?? title}
    </button>
  );
}
