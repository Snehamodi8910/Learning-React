import { useEffect , useState } from "react";

function useCurrencyInfo(currency){
  useEffect(()=>{
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/{endpoint}')
  } , [])

}
//mostly api se to value aati hai vo as a strign aati hai to usko handle krna pdta hai