export function load({ params }) {
  let set = {}
  if (typeof window !== "undefined") {
    let temp = JSON.parse(localStorage.getItem("sets")!)
    set = temp.find((o: {id: number}) => o.id == params.id);
  }
  return {
    set
  };
}
