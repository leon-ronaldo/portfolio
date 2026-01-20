import type { HTMLAttributes } from "react";

export interface StyleProps extends HTMLAttributes<HTMLDivElement> {
    "--spin-time"?: string
    "--delay-seconds"?: string
}