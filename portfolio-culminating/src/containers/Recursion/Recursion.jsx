import React from 'react'
import { CopyBlock } from 'react-code-blocks';
import { FaCopy } from 'react-icons/fa';
import copy from 'copy-to-clipboard';

const Recursion = () => {

  const binarySearchRecursive = `
  /**
 * Performs a recursive binary search on the JSON file data based on the 'rank' property.
 *
 * @remarks
 * This method uses a recursive binary search algorithm to efficiently find the object with the specified rank.
 * It logs the count of checks and the runtime.
 *
 * @param target - The target rank to search for.
 *
 * @returns {object | number} - The object with the specified rank or -1 if not found.
 *
 * @beta
 */
public binarySearchRecursive(target: number): object | number {
    const rawData = fs.readFileSync(this.getFilePath(), 'utf8');
    const data = JSON.parse(rawData);
    const startTime = performance.now();
    let search = this.binarySearchRecursiveAux(data, target, 0, data.length - 1);
    const endTime = performance.now();
    console.log(\`   runtime = \${endTime - startTime} milliseconds\`);
    return search;
}

/**
 * Auxiliary function for recursive binary search.
 *
 * @remarks
 * This function is used by the recursive binary search to perform the search.
 *
 * @param arr - The array of data to search.
 * @param target - The target rank to search for.
 * @param low - The low index of the search range.
 * @param high - The high index of the search range.
 * @param count - The count of checks (optional).
 *
 * @returns {object | number} - The object with the specified rank or -1 if not found.
 *
 * @beta
 */
private binarySearchRecursiveAux(arr, target: number, low: number, high: number, count = 0): object | number {
    const mid = Math.floor((low + high) / 2);
    if (low > high) return -1;

    if (target < arr[mid].rank) {
        return this.binarySearchRecursiveAux(arr, target, low, mid - 1, count + 1);
    } else if (target > arr[mid].rank) {
        return this.binarySearchRecursiveAux(arr, target, mid + 1, high, count + 1);
    } else {
        console.log(\`Binary Search Recursive\`)
        console.log(\`   count: \${count}\`);
        return arr[mid];
    }
}
}
`
  const binarySearchIterative = `
  /**
 * Performs an iterative binary search on the JSON file data based on the 'rank' property.
 *
 * @remarks
 * This method uses an iterative binary search algorithm to efficiently find the object with the specified rank.
 * It logs the count of checks and the runtime.
 *
 * @param target - The target rank to search for.
 *
 * @returns {object | null} - The object with the specified rank or null if not found.
 *
 * @beta
 */
public binarySearchIterative(target: number): object | null {
    const rawData = fs.readFileSync(this.getFilePath(), 'utf8');
    const data = JSON.parse(rawData);
    let low = 0;
    let high = data.length - 1;
    let count = 0;
    while (low <= high) {
        const startTime = performance.now();

        const mid = Math.floor((low + high) / 2);
        const midRank = data[mid].rank;

        if (target < midRank) {
            high = mid - 1;
            count++;
        } else if (target > midRank) {
            low = mid + 1;
            count++;
        } else {
            const endTime = performance.now();
            console.log('Binary Search Iterative')
            console.log(\`   count: \${count}\`);
            console.log(\`   runtime = \${endTime - startTime} milliseconds\`);
            return data[mid];
        }
    }
    // Arbitrary value to signify non-existence.
    return null;
}`
  return (
    <div className='app__container' id="recursion">
      <h2 className='bold-text'>Recursion</h2>
      <p className='p-text'>Recursion is a programming technique where a function calls itself to solve a problem. It's like breaking down a big task into smaller, similar tasks. Each time the function calls itself, it works on a smaller part of the problem, until it reaches a simple case that can be solved easily. This approach is useful for problems that can be divided into similar sub-problems, like sorting lists or searching through data structures. It's like solving a big puzzle by first solving smaller pieces of it.</p>
    
      <h4 className='bold-text'>Rescursion Implemented</h4>
    <p className='p-text'> My implementation of recursion was in my merge sort, quick sort, and my binary search. I will mainly focus on binary search recursive and non recursive functionality. 

    <h5 className='bold-text'>Rescursive Binary search</h5>
    <p className='p-text'>'binarySearchRecursive' is the main function that initiates the binary search. It reads and parses the data from a JSON file, then calls binarySearchRecursiveAux with the initial parameters (the entire array, target value, and initial low and high indices).
binarySearchRecursiveAux is the recursive function. It calculates the middle index of the current search range. If the target value is less than the value at the middle index, the function calls itself with a new range (lower half of the current range). If the target is more, it searches the upper half. This recursive division continues until the target is found or the range is invalid (low index greater than high index).</p>
</p>
<div>
<CopyBlock
  text={binarySearchRecursive}
  language={'typescript'}
  showLineNumbers={true}
  wrapLines={true}
  theme='atom-one-dark'
  codeBlock
  icon={<FaCopy />}
  onCopy={() => copy(binarySearchRecursive)}
/></div>

<h5 className='bold-text'>Non-recursive Binary search</h5>
    <p className='p-text'>The function reads and parses JSON data. It initializes low and high to define the search range and sets a counter count to zero. Then instead of calling itself recursively, this function uses a while loop to continue the search as long as low is less than or equal to high.
Then in each iteration, it calculates the midpoint and compares the rank at this midpoint with the target. If the target rank is less than the rank at midpoint, the function narrows the search to the left half of the current range.
If the target rank is greater, it searches the right half.
If the rank matches, it logs the count of checks, runtime, and returns the object. The loop terminates when the target is found (returns the object) or when low exceeds high (returns null), indicating the target is not present.</p>

<div>
  <CopyBlock
  text={binarySearchIterative}
  language={'typescript'}
  showLineNumbers={true}
  wrapLines={true}
  theme='atom-one-dark'
  codeBlock
  icon={<FaCopy />}
  onCopy={() => copy(binarySearchIterative)}
/></div></div>
  )
}

export default Recursion