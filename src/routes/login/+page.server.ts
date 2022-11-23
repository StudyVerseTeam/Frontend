import {user} from '../../store.js'
import {redirect} from '@sveltejs/kit'
export const actions = {
    default: async ({request}:any) => {
        // get data
        const formData = await request.formData();
        // get the result
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login?email=${formData.get('email')}&password=${formData.get('password')}`)
        // get the json
        const data = await res.json()
        // make the user store data
        // if the user exists
        if (data.exists) {
          user.set(data)
            //redirect them
            throw redirect(303, '/')
        } else if (data.error != null) {
          return {error: true, msg: data.error}
        }
    }
}
