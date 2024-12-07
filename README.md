# Uncommon JavaScript Null Check Bug
This repository demonstrates a subtle bug related to null checks in JavaScript and provides a solution.

## Description
The `foo` function attempts to handle null values for parameters `a` and `b`. However, it always returns 0 regardless of which parameter is null, potentially leading to incorrect results.

## Bug
The bug lies in the null check and the handling of the return value.  The function simply returning 0 for any null input isn't flexible enough to address various scenarios where null might be a valid input or require different handling depending on which input is null.

## Solution
The solution demonstrates how to improve null handling to provide more nuanced behaviour.  Different solutions may be necessary depending on the intended logic.

## How to run
1. Clone the repository.
2. Open `bug.js` to see the buggy code.
3. Open `bugSolution.js` to see the fixed code.
4. Run the javascript files in your preferred JavaScript environment. (e.g., node bug.js)