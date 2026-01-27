import type { HTMLAttributes } from "react";

export interface StyleProps extends HTMLAttributes<HTMLDivElement> {
    "--spin-time"?: string
    "--delay-seconds"?: string
}

export class Queue<T> extends Array<T> {
    enqueue(item: T): Queue<T> {

        const newQueue = new Queue<T>();

        newQueue.push(...this.slice(1), item);

        return newQueue;
    }
}

export interface Skill {
    icon: string;
    title: string;
    description: string;
}
