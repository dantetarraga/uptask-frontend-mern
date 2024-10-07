import { LazyExoticComponent } from "react";

export type JSXElement =
  | LazyExoticComponent<() => JSX.Element>
  | (() => JSX.Element)
  | JSX.Element;

export interface AppRoute {
  path?: string;
  element: JSXElement;
  children?: AppRoute[];
  index?: boolean;
  to?: string;
}