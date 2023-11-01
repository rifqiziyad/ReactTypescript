import React from "react";

type TextOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>; // for accept pass props/attibute html like htmlFor, onClick, className

export const CustomText = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
  ...rest
}: TextProps<E>) => {
  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`} {...rest}>
      {children}
    </Component>
  );
};
