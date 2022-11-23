import {user} from '../../store.js'
import {redirect} from '@sveltejs/kit'
export const actions = {
    default: async ({request}:any) => {
        // get data
        const formData = await request.formData();
        // get the result
        console.log(`${import.meta.env.VITE_SIGNUP_URL}/api/signup?name=${encodeURIComponent(formData.get('name'))}&email=${encodeURIComponent(formData.get('email'))}&pwd=${encodeURIComponent(formData.get('password'))}`)
        const res = await fetch(`${import.meta.env.VITE_SIGNUP_URL}/api/signup?name=${formData.get('name')}&email=${formData.get('email')}&pwd=${formData.get('password')}`)
        // get the json
        const data = await res.json()
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
