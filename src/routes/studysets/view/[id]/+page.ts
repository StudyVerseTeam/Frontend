import {redirect} from '@sveltejs/kit'
export function load({ params }) {
  let set = {}
  if (typeof window !== "undefined") {
    let temp = JSON.parse(localStorage.getItem("sets")!)
    set = temp.find((o: {id: number}) => o.id == params.id);
    if (set == null) {
      throw redirect(302, '/studysets')
    }
  }
  return {
    set
  };
}
