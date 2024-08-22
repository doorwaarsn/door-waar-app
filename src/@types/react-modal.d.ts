declare module "react-modal" {
  import * as React from "react";

  interface Props {
    isOpen: boolean;
    onRequestClose?: (event: React.MouseEvent | React.KeyboardEvent) => void;
    contentLabel?: string;
    style?: {
      content?: React.CSSProperties;
      overlay?: React.CSSProperties;
    };
    className?: string;
    overlayClassName?: string;
    bodyOpenClassName?: string;
    htmlOpenClassName?: string;
    ariaHideApp?: boolean;
    closeTimeoutMS?: number;
    shouldCloseOnOverlayClick?: boolean;
    shouldFocusAfterRender?: boolean;
    shouldCloseOnEsc?: boolean;
    shouldReturnFocusAfterClose?: boolean;
    role?: string;
    parentSelector?: () => HTMLElement;
    aria?: {
      [key: string]: string;
    };
    data?: {
      [key: string]: string;
    };
    children?: React.ReactNode;
  }

  export default class Modal extends React.Component<Props> {}
}
