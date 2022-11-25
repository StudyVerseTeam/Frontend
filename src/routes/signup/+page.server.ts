import {redirect} from '@sveltejs/kit'
export const actions = {
    default: async ({request}:any) => {
        // get data
        const formData = await request.formData();
        // get the result
        const res = await fetch(`${import.meta.env.VITE_EMAIL_AUTH_URL}/api/auth?email=${formData.get('email')}`)
        // get the json

        const data = await res.json()
        // edit below with checkmark page upcoming
        throw redirect(302, "/")
        // make the user store data
    }
}
