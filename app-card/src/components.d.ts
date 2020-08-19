/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppCard {
        "tipo": string;
        "titulo": string;
    }
}
declare global {
    interface HTMLAppCardElement extends Components.AppCard, HTMLStencilElement {
    }
    var HTMLAppCardElement: {
        prototype: HTMLAppCardElement;
        new (): HTMLAppCardElement;
    };
    interface HTMLElementTagNameMap {
        "app-card": HTMLAppCardElement;
    }
}
declare namespace LocalJSX {
    interface AppCard {
        "tipo"?: string;
        "titulo"?: string;
    }
    interface IntrinsicElements {
        "app-card": AppCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-card": LocalJSX.AppCard & JSXBase.HTMLAttributes<HTMLAppCardElement>;
        }
    }
}
