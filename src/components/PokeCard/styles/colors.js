import calculateColor from "../../../helpers/calculateColors";
export default {
  green: calculateColor({ color: "#35682d" }),
  brown: calculateColor({ color: "#4e3b31" }),
  yellow: calculateColor({ color: "#F4C454", add: 669961 }),
  blue: calculateColor({ color: "#256D7B", subs: 1248469 }),
  purple: calculateColor({ color: "#9032BB", add: 669961, subs: 1278469 }),
  pink: calculateColor({ color: "#DF02F1", add: 569961 }),
  white: calculateColor({ color: "#E7EBDA", add: 129999 }),
  red: calculateColor({ color: "#D32213", add: 2899961, subs: 1278469 }),
  gray: calculateColor({ color: "#8A9597" }),
  black: calculateColor({ color: "#1C0D02", subs: 778469 }),
};
