import { getValues } from "./currencyConverter.js";

getValues("EUR", "INR", 1).then((message) => console.log(message));
