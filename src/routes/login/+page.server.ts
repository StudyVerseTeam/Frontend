import {user} from '../../store.js'
import {redirect} from '@sveltejs/kit'
export const actions = {
    default: async ({request}:any) => {
        // get data
        const formData = await request.formData();
        // get the resulta
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login?email=${encodeURIComponent(formData.get('email'))}&password=${encodeURIComponent(formData.get('password'))}`)
        // get the json
        const raw = await res.json()
        let data = raw
        for (let i =0; i < raw.length; i ++) {
          if ( raw[i] == "email" || raw[i] == "pass" || raw[i] == "name") {
              data[i] = decodeURIComponent(raw[i]) 
          } else {
            data[i] = raw[i]
          }
        }
        // make the user store data
        // if the user exists
        if (data.exists) {
          user.set(data)
          return {exists: true, error: false, msg: ""}
        } else if (data.err) {
          return {error: true, msg: data.error, exists:false}
        } else if (!data.exists) {
          return {error: false, msg: "", exists: false}
        }
    }
}
