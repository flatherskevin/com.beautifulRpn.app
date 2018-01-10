import { NgModule } from "@angular/core/src/metadata/ng_module";

// Tokens
import { IRpnStackServiceToken } from "../interfaces/rpn-stack";

// Services
import { RpnStackService } from "./rpn-stack-service";



NgModule({
    providers: [
        {provide: IRpnStackServiceToken, useClass: RpnStackService},
    ]
})
export class ServicesModule { }
