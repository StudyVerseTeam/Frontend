export function load({ params }) {
  let set = {}
  let temp
  if (typeof window !== "undefined") {
    temp = JSON.parse(localStorage.getItem("sets")!)
    set = temp.find((o: {id: number}) => o.id == params.id);
  }
  return {
    set, 
    sets: temp
  };
}
