import {CSSProperties, PropsWithChildren} from "react";

export function Flex({children, style, className}: PropsWithChildren & {style?: CSSProperties} & {className?: string} ){
    return <div  className={className} style={{ display: "flex", ...style}}>
        {children}
    </div>
}
