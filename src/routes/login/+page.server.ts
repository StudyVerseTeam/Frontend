import {user} from '../../store.js'
import {redirect} from '@sveltejs/kit'
export const actions = {
    default: async ({request}:any) => {
        // get data
        const formData = await request.formData();
        console.log(import.meta.env.VITE_API_URL)
        // get the resulta
        console.log(encodeURIComponent(formData.get('password')))
        console.log(encodeURIComponent(formData.get('email')))
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
        console.log(data)
        // make the user store data
        // if the user exists
        if (data.exists) {
          user.set(data)
            //redirect them
            throw redirect(303, '/')
        } else if (!data.exists) {
          return {error: false, msg: "doesnt exist"}
        } else  {
          return {error: true, msg: data.error}
        }
    }
}
