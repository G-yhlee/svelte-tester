import { reduce } from "./reduce";


export const go = (...args) => reduce((a,f)=>f(a),args);