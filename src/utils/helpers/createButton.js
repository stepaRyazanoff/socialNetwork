export const CreateButton = (items, userId, subscriptionFunction, typeButton, buttonName) => {
   return (
      <button
         disabled={items.some(id => id === userId)}
         onClick={() => subscriptionFunction(userId, typeButton)}>
         {buttonName}
      </button>
   )
}

