export const priceFormat = (price) => {
  if (price > 1000) {
    return `${price / 1000} tỷ`
  }

  return `${price} triệu`
}