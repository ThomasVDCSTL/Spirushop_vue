import axios from "axios";
import {ref} from "vue";

    export const supplierList=ref([]);
    axios.get("https://suppliers.depembroke.fr/api/suppliers")
        .then(res => {
            console.log(res.data.data)
           supplierList.value = res.data.data
        })
        .catch( function (error) {
            console.log(error)
        })

export function createSupplier( jsonData){
        axios.post("https://suppliers.depembroke.fr/api/suppliers", jsonData)
            .then(console.log("créé")).catch(err=>console.log(err))
}