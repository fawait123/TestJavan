const validate = (body) => {
  const _input = Object.keys(body);

  let check = _input.map((el, key) => {
    if (body[el] === "") {
      return {
        [el]: `${el} is required`,
      };
    }
  });
  check = check.filter((el, _index) => typeof el !== "undefined");
  return check;
};

module.exports = validate;
