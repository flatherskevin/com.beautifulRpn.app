import { Injectable } from '@angular/core';

import { IRpnStackService } from '../interfaces/rpn-stack'

@Injectable()
export class RpnStackService implements IRpnStackService{

    private stackArray: number[] = [];

    constructor(){
        this.stackArray = [0, 0, 0, 0];
    }

    public getXStack(): number {
        return this.stackArray[0];
    }
    public getYStack(): number {
        return this.stackArray[1];
    }
    public dropStack(): void {
        throw new Error("Method not implemented.");
    }
    public appendToStack(value: number): void{
        const xStack = this.stackArray[0];
        this.stackArray[0] = Number(`${xStack}`);
    }
    public swapStacks(): void {
        throw new Error("Method not implemented.");
    }
    
}