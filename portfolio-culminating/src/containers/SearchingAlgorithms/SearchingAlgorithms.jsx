import React from 'react'
import { CopyBlock } from 'react-code-blocks';
import { FaCopy } from 'react-icons/fa';
import copy from 'copy-to-clipboard';

const SearchingAlgorithms = () => {

  const linearSearch = `
  /**
 * Performs a linear search on the JSON file data based on the 'rank' property.
 *
 * @remarks
 * This method iterates through the data to find the object with the specified rank.
 * It logs the count of checks and the runtime.
 *
 * @param target - The target rank to search for.
 *
 * @returns {object | number} - The object with the specified rank or -1 if not found.
 *
 * @beta
 */
public linearSearch(target: number): object | number {
    const rawData = fs.readFileSync(this.getFilePath(), 'utf8');
    const data = JSON.parse(rawData);

    for (let i = 0; i < data.length; i++) {
        const startTime = performance.now();
        if (data[i].rank === target) {
            console.log(\`Linear Search:\`)
            console.log(\`   count: \${i}\`);
            const endTime = performance.now();
            console.log(\`   runtime = \${endTime - startTime} milliseconds\`);
            return data[i];
        }
    }
    return -1; // indicates the target was not found
}
  `

  const binarySearch = `
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
  `
  return (
    <div className='app__container' id="search">
    <h2 className='bold-text'>Searching Algorithms</h2>
        <p className='p-text'>
Searching algorithms are methods for finding specific items in an array of things. They help you find specific data quickly and efficiently, like finding a club in a sports list. There are simple methods, like looking at each thing one by one, and more complex ones that work faster, especially when there's a lot to search through.
      </p>

      <h4 className='bold-text'>Searching Algorithms</h4>
        <h5 className='bold-text'>Linear Search</h5>
  <ul>
    <li>
    <p className='p-text'><span className='bold-text'>Implementation:</span>  Iterates through each element of a list sequentially until the target element is found or the list ends.

</p>
    </li>
    <li>
    <p className='p-text'><span className='bold-text'>Worst Case: </span> O(n), where n is the number of items. Occurs when the target is not in the list or at the end.
</p>
    </li>
    <li>
    <p className='p-text'><span className='bold-text'>Efficiency: </span> Less efficient for large datasets as it checks each element.

</p>
    </li>
    </ul>  

    <div className='app__code-block'> 
    
    <CopyBlock
  text={linearSearch}
  language={'typescript'}
  showLineNumbers={true}
  wrapLines={true}
  theme='atom-one-dark'
  codeBlock
  icon={<FaCopy />}
  onCopy={() => copy(linearSearch)}
/></div>
    <h5 className='bold-text'>Binary Search</h5>
  <ul>
    <li>
    <p className='p-text'><span className='bold-text'>Implementation:</span>  Works on sorted lists. It divides the list into halves to check if the target is in the left or right half, repeatedly narrowing down the search area.

</p>
    </li>
    <li>
    <p className='p-text'><span className='bold-text'>Worst Case: </span>  O(log n). Occurs when the target is in the middle or not present.
</p>
    </li>
    <li>
    <p className='p-text'><span className='bold-text'>Efficiency: </span> More efficient for large datasets as it reduces the search area significantly with each step.

</p>
    </li>
    </ul>  
    <div className='app__code-block'> 
    
    <CopyBlock
  text={binarySearch}
  language={'typescript'}
  showLineNumbers={true}
  wrapLines={true}
  theme='atom-one-dark'
  codeBlock
  icon={<FaCopy />}
  onCopy={() => copy(binarySearch)}
/></div>
    

<h5 className='bold-text'>Efficiency Comparison</h5>
  <ul>
    <li>
    <p className='p-text'><span className='bold-text'>Scenario:</span>  Looking for 'Manchester United' in the world club rankings, the data set is over 500 clubs.

</p>
    </li>
    <li>
    <p className='p-text'><span className='bold-text'>Outcome: </span>  Binary search is more efficient if the list is sorted, as it will find 'Machester United' faster by repeatedly halving the search area. Linear search would be less efficient, especially if 'Machester United' is towards the end of the list or not present.
</p>
    </li>
    <li>
    <p className='p-text'><span className='bold-text'>Indicator of Efficiency: </span> The number of comparisons needed to find 'Manchester United' is much lower in binary search than in linear search, especially because the list is huge.

</p>
    </li>
    </ul>  

    </div>
  )
}

export default SearchingAlgorithms