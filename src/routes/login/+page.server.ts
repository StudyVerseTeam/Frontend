import {user} from '../../store.js'
import {redirect} from '@sveltejs/kit'
export const actions = {
    default: async ({request}:any) => {
        // get data
        const formData = await request.formData();
        // get the resulta
        const formDataParsed = {
          email: formData.get('email'),
          password: formData.get('password')
        }
        console.log(JSON.stringify(formDataParsed))
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
          method: 'POST',
          headers: {
            "Content-Type":'application/json',
          },
          body : JSON.stringify(formDataParsed)
        })
        // get the json
        const data = await res.json()
        console.log(data)
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
