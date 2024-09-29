import { query } from "express-validator";
import WithLocale from "kernels/rules/base";

class QueryWithLocale extends WithLocale 
{
    withLocale: any
    constructor(field: string) {
        super(field)
        this.withLocale = query(field)
    }

    matches(regex: RegExp) {
        this.withLocale = this.withLocale.matches(regex)
        return this;
    }
}

export default QueryWithLocale