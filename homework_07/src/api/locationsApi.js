import { apiService } from "./axios";

const apiUrl = `https://6a13128378d0434e0d5dc658.mockapi.io`
const API = `${apiUrl}/locations`;

export const service = apiService(API);