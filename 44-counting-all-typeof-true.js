// count all types of true's
countTrue(["True", "false", false, true, "TRUE", "randomString", 1, "false"]); // 3
countTrue([true, false, "true", "FALSE", "True", null, undefined, "False"]); // 3

const countTrue = arr => arr.filter(item => { 
  if (typeof item === 'boolean') { 
    return item;
  }
  if (
typeof item === 'string'
) { 
    const lowerItem = item.
toLowerCase()
;
    if (
lowerItem === 'true'
) return true;
    if (
lowerItem === 'false'
) return false;
  }
  return false;
}).length;