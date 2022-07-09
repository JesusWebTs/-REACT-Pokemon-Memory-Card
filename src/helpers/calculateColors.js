const calculateColors = ({
  color = "#555555",
  add = 4869961,
  subs = 1448469,
}) => {
  let colorDecimal1 = parseInt(color.replace("#", ""), 16);
  let colorDecimal2 = colorDecimal1 + add;
  let colorDecimal3 = colorDecimal1 - subs;

  return {
    1: `#${colorDecimal1.toString(16)}`,
    2: `#${colorDecimal2.toString(16)}`,
    3: `#${colorDecimal3.toString(16)}`,
  };
};

export default calculateColors;
