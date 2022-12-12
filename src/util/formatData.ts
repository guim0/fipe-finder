export function formatData(currentObject: any, newDataObject: any) {
  if (!currentObject.age || currentObject.price) return;

  if (newDataObject.price || newDataObject.amount) return currentObject;
  const current = currentObject;
  const dataImplement = newDataObject;

  const formattedData = { ...current, ...dataImplement };

  return formattedData;
}
