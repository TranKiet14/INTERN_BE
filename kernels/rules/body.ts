import { body } from "express-validator";
import WithLocale  from "./base";"kernels/rules/base";

class BodyWithLocale extends WithLocale 
{
    withLocale: any
    constructor(field: string) {
        super(field)
        this.withLocale = body(field)
    }
}

export default BodyWithLocale