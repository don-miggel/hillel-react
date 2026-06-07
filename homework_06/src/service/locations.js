import { locationService } from "./locationService";

const API = `https://6a13128378d0434e0d5dc658.mockapi.io/locations`;
export const service = locationService(API);