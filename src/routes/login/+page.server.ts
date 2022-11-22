import {user} from '../../store.js'
import {redirect} from '@sveltejs/kit'
export const actions = {
    default: async ({request}) => {
        const formData = await request.formData();
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login?email=${formData.get('email')}&password=${formData.get('password')}`)
        const data = await res.json()
        console.log("data", data)
        user.set(data)
        if (data.exists) {
            throw redirect(303, '/')
        }
    }
}