// app/api/getMetadata.js

import { fetchData } from "../../utils/api";


export async function getMetadata() {
    const data = await fetchData(`api/settings`,'ar');
    return data.data || {}

  }
  