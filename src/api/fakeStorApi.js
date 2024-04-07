import Axios  from "axios";
import { PRODUCT_URL } from "../constant";

export default function fakeStoreApi() {
    return Axios.create({
        baseURL: PRODUCT_URL
    })
}