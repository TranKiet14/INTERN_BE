import rules from "kernels/rules";
const categoryValidation = {
    checkParams: [
        new rules.ParamWithLocale('id').matches(/^\d+$/),
    ]
}
export default categoryValidation