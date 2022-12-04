export function load({ params }) {
  let sets = {}
  if (typeof window !== "undefined") {
    if (localStorage.getItem('sets') !== null ) { 
      sets = JSON.parse(localStorage.getItem("sets")!)
    } else {
      sets = []
    }
  }
  return {
    sets
  };
}
