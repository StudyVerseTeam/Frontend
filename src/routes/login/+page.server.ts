export const actions = {
    default: async ({request}) => {
        const formData = await request.formData();
        const res = await fetch(`${import.meta.env.VITE_API_URL}:8001/api/logindummy?email=${formData.get('email')}&password=${formData.get('password')}`)
        const data = await res.json()
        console.log("data", data)
    }
}