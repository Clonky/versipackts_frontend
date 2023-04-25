import { JSXElement , Component } from "solid-js";
import { ResolvedChildren } from "solid-js/types/reactive/signal";

type NavLinkInfo = { class: string, route: string, children: ResolvedChildren };

const NavLink: Component<NavLinkInfo> = (props: NavLinkInfo) => {

    return (
        <a
            class={props.class}
            href={`/${props.route}`}
            onClick={() => window.scrollTo(0,0)}
        >
        {props.children}
        </a>
    );
};

export { NavLink };
