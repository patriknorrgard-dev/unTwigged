export function dateFormater(time?: string) {
  if (!time) return;
  
  return new Date(time).toLocaleDateString("en-US", {   
    year: "numeric",
    month: "numeric",
    day: "numeric"
  });
}
