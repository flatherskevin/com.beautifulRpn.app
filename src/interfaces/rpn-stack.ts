import { InjectionToken } from '@angular/core';

export const IRpnStackServiceToken = new InjectionToken('IRpnStackServiceToken');
export interface IRpnStackService{

    // Gets x-stack from stacks
    getXStack(): number;

    // Gets y-stack from stacks
    getYStack(): number;

    // Drops x-stack
    dropStack(): void;

    // Converts x-stack array to number
    appendToStack(
        value: number,
    ): void;

    // Swaps x and y stacks
    swapStacks(): void;

}