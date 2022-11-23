import {user} from '../../store.js'
import {redirect} from '@sveltejs/kit'
export const actions = {
    default: async ({request}:any) => {
        // get data
        const formData = await request.formData();
        // get the result
        const res = await fetch(`${import.meta.env.VITE_SIGNUP_URL}/api/signup?name=${encodeURIComponent(formData.get('name'))}&email=${encodeURIComponent(formData.get('email'))}&pwd=${encodeURIComponent(formData.get('password'))}`)
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
        if (data.Error == "Account already exists") {
          throw redirect(303, '/login')
        } else if  (data.Error) {
          return { error: true , msg: data.Error}   
        } else {
          user.set(data)
          throw redirect(303, '/')
        }
    }
}
