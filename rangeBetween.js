function rangeBetween(start, end) 
{
  if (start > end) {
    // If start is greater than end
    const arr = Array.from({ length: start - end + 1 }, (_, index) => start - index);
    return arr;
  } else {
    // If start is less than or equal to end
    const arr = Array.from({ length: end - start + 1 }, (_, index) => start + index);
    return arr;
  }
}

// Output for positive values
console.log(rangeBetween(4, 7));

// Output for negative values
console.log(rangeBetween(-4, 7));