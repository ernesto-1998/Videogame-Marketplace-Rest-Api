import { queryIsSoldOrUsed, queryPrice } from "./query-params.validation.js";

const filterValidate = {
    PRICE: [queryPrice],
    SOLD_USED: [queryIsSoldOrUsed],
}

export default filterValidate