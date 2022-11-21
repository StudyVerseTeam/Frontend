import * as dotenv from 'dotenv'
dotenv.config()
export const actions = {
    default: async ({request}) => {
        const formData = await request.formData();
        const res = await fetch(`${process.env.API_URL}:8001/api/logindummy?email=${formData.get('email')}&password=${formData.get('password')}`)
        const data = await res.json()
        console.log("data", data)
    }
}