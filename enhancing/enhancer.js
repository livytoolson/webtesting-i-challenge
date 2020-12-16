module.exports = {
  success,
  fail,
  repair,
  get,
}

function success(item) {
  return (
    item.enhancement < 20 
    ? { ...item, enhancment: item.enhancement + 1 } 
    : { ...item }
  )
}

function fail(item) {
  if (item.enhancement < 15) {
    return {
      ...item, 
      durability: item.durability - 5
    }
  } else if (item.enhancement > 15) {
    return {
      ...item, 
      durabilty: item.durability - 10
    }
  } else {
    return {
      ...item, 
      durbaility: item.durability - 10, 
      enhancement: item.enhancment - 1
    }
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
