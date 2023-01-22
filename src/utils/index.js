export const generateID = (object) => {
  return object.at(-1).id + 1
}
