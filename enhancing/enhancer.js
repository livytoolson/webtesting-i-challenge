module.exports = {
  success,
  fail,
  repair,
  get
}

function success(item) {
  const { enhancement } = item
  if (enhancement >= 20) {
    return {
      ...item, 
      enhancement: enhancement
    };
  } else if (enhancement >= 0 && enhancement < 20) {
    return {
      ...item, 
      enhancement: enhancement + 1
    };
  }
}

function fail(item) {
  const { enhancement, durability } = item;
 if (enhancement >= 0 && enhancement < 15) {
   return {
     ...item, 
     durability: durability - 5
    }
 } else if (enhancement >= 15 && enhancement <= 20) {
   if (enhancement > 16) {
     return {
       ...item, 
       enhancement: enhancement - 1, 
       durability: durability - 10
      }
   } else {
     return {
       ...item, 
       durability: durability - 10
      }
   }
 } else {
   return {...item}
 }
}

function repair(item) {
  const { enhancement, durability } = item
  if (
    durability <= 100 &&
    durability >= 0 &&
    enhancement >= 0 &&
    enhancement <= 20
    ) return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
