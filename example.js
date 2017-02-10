

// Write a method that finds the difference between the minimum value and the
// maximum value of an array.
// Assumptions / Expectations:
//   * all array entries are valid integers (no nil, no strings, etc.)
//   * if the array contains a single element, return 0
//   * if the array is empty, return -1
//   * built-in sort, min and max methods are unavailable


function findDifference(arr) {
  if (arr.length === 0) return -1;
  if (arr.length === 1) return 0;
  const { min, max } = findMinAndMax(arr);
  return max - min;
}


const findMinAndMax = (arr) => {
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  arr.forEach(value => {
    if (value < min) {
      min = value;
    } else if (value > max) {
      max = value;
    }
  });
  
  return { min, max };
}




const assert = (value) => {
  if (!value) throw new Error(`expected value to be truthy recieved
${value}`);
};

assert(findDifference([]) === -1);
assert(findDifference([1]) === 0);
let {min, max} = findMinAndMax(
  [1, 2, 3, 4, 5, 6]
);

assert(min === 1);
assert(max === 6);

assert(findDifference([1, 2, 3, 4]) === 3);
assert(findDifference([1, 9000]) === 8999);




/* 
Your previous Ruby content is preserved below:

/* 
Your previous Ruby content is preserved below:

# Implement a simplified filesystem using Object Oriented Programming
# consisting of only Files and Directories. Directories can contain
# Files or other Directories. Both Files and Directories should have 
# attributes 'name', 'filesize', 'writeable'.
 */

class File {
  constructor(name, filesize, writable) {
    this.name = name;
    this.filesize = filesize;
    this.writable = writable;
  }
  toggleWrittable() {
    // arguments = [true];
    this.writable = !this.writable;
  }
}

class Directory extends File {
  constructor(...args, contents) {
    super(...args);
    this.contents = contents;
  }
  
  toggleWrittable(recursive = true) {
    super.writable();
    if (recrusive) {
      this.contents.forEach(inst => {
        inst.toggleWritable(recursive);
      });
    }
  }
}

// # Given a 'tree' that looks like
// # Directory
// #   - File
// #   - Directory
// #     - Directory
// #     - File
// # change the 'writeable' attribute for each object from true to false
