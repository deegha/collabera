"use client";

import { useEffect } from "react";

function getSumIndexes(numbers: Array<number>, target: number) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

export default function Sorting() {
  useEffect(() => {
    const result = getSumIndexes([1, 2, 3, 4], 6);
    console.log(result);
  }, []);

  return (
    <div>
      input: getSumIndexes([1, 2, 3, 4], 6) - output is in the console log
    </div>
  );
}
