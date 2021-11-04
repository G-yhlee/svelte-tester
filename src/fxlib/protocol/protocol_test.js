import { protocol } from "./protocol";

console.log( [...protocol.iterator,...protocol.iterable] )  // [3,2,1,3,2,1]