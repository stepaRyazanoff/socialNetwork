export const updateObjectInArray = (items, itemId, objPropName, newObjectProps) => {
   return items.map(user => user[objPropName] === itemId ? { ...user, ...newObjectProps } : user
   )
}