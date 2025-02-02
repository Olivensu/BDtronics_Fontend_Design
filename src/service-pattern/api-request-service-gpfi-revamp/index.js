import axios from "axios";
const https = require('https');

export const GET_GPFI_Revamp = async (config) => {

    const baseURL =  process.env.NEXT_PUBLIC_GPFI_REVAMP_BASE_URL_PRODUCTION

    return await axios.get(
        config.baseURL ? config.baseURL : `${baseURL}${config.URL}`,
        {
            withCredentials: true,
            params: config.params,
            headers: config.header_object ?? {},
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            }),
        }
    )
}

export const POST_GPFI_Revamp = async (config) => {

    const baseURL = process.env.NEXT_PUBLIC_GPFI_REVAMP_BASE_URL_PRODUCTION;

    return await axios.post(
        config.baseURL ? config.baseURL : `${baseURL}${config.URL}`,
        config.data,
        {
            withCredentials: true,
            params: config.params,
            headers: config.header_object ?? {},
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            }),
        }
    )
}