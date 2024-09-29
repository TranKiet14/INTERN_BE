import { param } from "express-validator";
import WithLocale from "kernels/rules/base";

class ParamWithLocale extends WithLocale 
{
    withLocale: any;

    constructor(field: string) {
        super(field)
        this.withLocale = param(field)
    }

    matches(regex: RegExp) {
        this.withLocale = this.withLocale.matches(regex)
        return this;
    }
}

export default ParamWithLocale