module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const enhancement = item.enhancement;

  if (enhancement < 20 && enhancement < 0) {
    return {...item, enhancement: enhancement +1}
  } else if(enhancement >= 20) {
    return { ...item };
  } else {
    return "Does Not Exist";
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
