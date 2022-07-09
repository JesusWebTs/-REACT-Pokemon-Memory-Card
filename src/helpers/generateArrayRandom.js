const generateArrayRandom = ({ amount, max }) => {
  let ids = [];

  while (ids.length < amount) {
    let randomNumber = Math.round(Math.random() * max);
    if (ids.includes(randomNumber)) return;
    ids = [...ids, randomNumber];
  }
  return ids;
};

export default generateArrayRandom;
