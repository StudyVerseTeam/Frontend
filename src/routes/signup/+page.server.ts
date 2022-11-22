import {user} from '../../store.js'
import {redirect} from '@sveltejs/kit'
export const actions = {
    default: async ({request}:any) => {
        // get data
        const formData = await request.formData();
        // get the result
        console.log(`${import.meta.env.VITE_SIGNUP_URL}/api/signup?name=${formData.get('name')}&email=${formData.get('email')}&pwd=${formData.get('password')}`)
        const res = await fetch(`${import.meta.env.VITE_SIGNUP_URL}/api/signup?name=${formData.get('name')}&email=${formData.get('email')}&pwd=${formData.get('password')}`)
        // get the json
        const data = await res.json()
        console.log("data", data)
        // make the user store data
        user.set(data)
//        // if the user exists
       throw redirect(303, '/')
//       
    }
}
