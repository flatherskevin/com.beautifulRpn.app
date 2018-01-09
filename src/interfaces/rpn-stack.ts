import { InjectionToken } from '@angular/core';

import { RpnStack } from '../models/rpn-stack';

export const IRpnStackServiceToken = new InjectionToken('IRpnStackServiceToken');
export interface IRpnStackerService{

    // Gets x-stack from stacks
    getXStack(): string[];

    // Gets y-stack from stacks
    getYStack(): string[];

    // Drops x-stack
    dropStack(): void;

    // Converts x-stack array to string
    stackToString(): string;

    // Converts x-stack array to number
    stackToNumber(): number;

    // Swaps x and y stacks
    swapStacks(): void;

}