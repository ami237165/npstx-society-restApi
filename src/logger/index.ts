import { developingLogger } from "./developingLogger";
import { productionLogger } from "./productionLogger";

productionLogger
export let logger = null;

if (process.env.NODE_ENV === "developing") {
    logger = developingLogger()
}

if (process.env.NODE_ENV === "production") {
    logger = productionLogger()
}
