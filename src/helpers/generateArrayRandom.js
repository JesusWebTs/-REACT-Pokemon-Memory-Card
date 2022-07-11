const generateArrayRandom = ({ amount, max }) => {
  if (max === 0 || amount === 0) return [];
  let ids = [];
  while (ids.length < amount) {
    let randomNumber = Math.round(Math.random() * max);
    if (!ids.includes(randomNumber)) ids.push(randomNumber);
  }
  return ids;
};

export default generateArrayRandom;
