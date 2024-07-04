const calcRating = (rate: number, oldRate: number, oldQuantity: number) => {
  const newRate = (rate * oldQuantity + oldRate) / (oldQuantity + 1)
  const newQuantity = oldQuantity + 1

  return { newRate, newQuantity }
}

export { calcRating }
