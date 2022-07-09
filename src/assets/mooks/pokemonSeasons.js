export default {
  1: new Array(151).fill().map((_, i) => i + 1),
  2: new Array(100).fill().map((_, i) => i + 151 + 1),
  3: new Array(135).fill().map((_, i) => i + 100 + 151 + 1),
  4: new Array(107).fill().map((_, i) => i + 100 + 151 + 135 + 1),
  5: new Array(156).fill().map((_, i) => i + 100 + 151 + 135 + 107 + 1),
  6: new Array(72).fill().map((_, i) => i + 100 + 151 + 135 + 107 + 156 + 1),
  7: new Array(88).fill().map((_, i) => i + 100 + 151 + 135 + 107 + +156 + 72 + 1),
  8: new Array(89).fill().map((_, i) => i + 100 + 151 + 135 + 107 + +156 + 72 + 88 + 1),
};
