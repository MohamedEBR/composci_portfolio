import React from 'react'
import { CopyBlock } from 'react-code-blocks';
import { FaCopy } from 'react-icons/fa';
import copy from 'copy-to-clipboard';
import { linear, quadratic, logarithmic, Linearithmic } from '../../assets';

const SortingAlgorithms = () => {

  const bubbleSort = `
  /**
 * BubbleSort class for sorting an array of strings using the Bubble Sort algorithm.
 *
 * @remarks
 * This class provides a bubble sort implementation to efficiently sort an array of strings.
 * It includes methods for sorting and details on how the algorithm works.
 *
 * @beta
 */
export class BubbleSort {
    private count: number = 0;

    /**
     * Sorts the input array of strings using the Bubble Sort algorithm.
     *
     * @remarks
     * This method initiates the bubble sort process, logs the runtime, and count of iterations.
     *
     * @param arr - The array of strings to be sorted.
     *
     * @returns {string[]} - The sorted array of strings.
     *
     * @beta
     */
    public sort(arr: string[]): string[] {
        this.count = 0;
        const startTime = performance.now();
        // Sort array using bubble sort
        this.bubbleSort(arr);
        const endTime = performance.now();
        const runTime = endTime - startTime;
        console.log(\`   runtime: \${runTime} milliseconds\`);
        return arr;
    }

    /**
     * Performs the Bubble Sort algorithm on the input array.
     *
     * @remarks
     * This method iteratively compares and swaps adjacent elements until the array is sorted.
     * It also logs the count of iterations and prints the count.
     *
     * @param arr - The array of strings to be sorted.
     *
     * @beta
     */
    private bubbleSort(arr: string[]): void {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                // Compare adjacent elements and swap if necessary
                if (arr[j] > arr[j + 1]) {
                    this.swap(arr, j, j + 1);
                }
                this.count++;
            }
        }
        console.log(\`Bubble Sort\`);
        console.log(\`   count: $\{this.count}\`);
    }

    /**
     * Swaps two elements in the input array.
     *
     * @remarks
     * This method swaps two elements in the array at the specified indices.
     *
     * @param arr - The array in which elements are to be swapped.
     * @param a - The index of the first element to be swapped.
     * @param b - The index of the second element to be swapped.
     *
     * @beta
     */
    private swap(arr: string[], a: number, b: number): void {
        const tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }
}
`

const mergeSort = `
/**
 * MergeSort class for sorting an array of strings using the MergeSort algorithm.
 *
 * @remarks
 * This class provides a mergesort implementation to efficiently sort an array of strings.
 * It includes methods for sorting and merging, as well as details on how the algorithm works.
 *
 * @beta
 */
export class MergeSort {
    arrClone: string[];
    private count: number = 0;

    /**
     * Sorts the input array of strings using the MergeSort algorithm.
     *
     * @remarks
     * This method initiates the mergesort process, logs the runtime, and count of iterations.
     *
     * @param arr - The array of strings to be sorted.
     *
     * @returns {string[]} - The sorted array of strings.
     *
     * @beta
     */
    public sort(arr: string[]): string[] {
        this.count = 0;
        const startTime = performance.now();
        // Clone array for sorting
        this.arrClone = this.MergeSort(arr); // arr.length = 7
        const endTime = performance.now();
        const runTime = endTime - startTime;
        console.log(\`   runtime: \${runTime} milliseconds\`);
        return this.arrClone;
    }

    /**
     * Recursive function for performing the MergeSort algorithm.
     *
     * @remarks
     * This method recursively divides and sorts the array using the mergesort algorithm.
     * It also logs the count of iterations and prints the count when the depth is zero.
     *
     * @param arr - The array of strings to be sorted.
     * @param depth - The depth of recursion (optional).
     *
     * @returns {string[]} - The sorted array of strings.
     *
     * @beta
     */
    private MergeSort(arr: string[], depth: number = 0): string[] {
        this.count++;
        if (arr.length <= 1) {
            return arr;
        }
        const mid = Math.floor(arr.length / 2); // 3
        let left: any = arr.slice(0, mid);
        let right: any = arr.slice(mid, arr.length);

        left = this.MergeSort(left, depth + 1);
        right = this.MergeSort(right, depth + 1);

        if (depth === 0) {
            console.log(\`Merge Sort\`);
            console.log(\`   count: \${this.count}\`);
        }
        return this.merge(left, right);
    }

    /**
     * Merges two sorted arrays into a single sorted array.
     *
     * @remarks
     * This method merges two sorted arrays into a single sorted array.
     *
     * @param left - The left sorted array.
     * @param right - The right sorted array.
     *
     * @returns {string[]} - The merged and sorted array.
     *
     * @beta
     */
    private merge(left, right): string[] {
        let leftIndex = 0;
        let rightIndex = 0;
        let merged = [];

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] > right[rightIndex]) {
                merged.push(right[rightIndex]);
                rightIndex++;
            } else {
                merged.push(left[leftIndex]);
                leftIndex++;
            }
        }

        merged = merged.concat(left.slice(leftIndex));
        merged = merged.concat(right.slice(rightIndex));
        return merged;
    }
}
`

const quickSort = `
/**
 * QuickSort class for sorting an array of strings using the QuickSort algorithm.
 *
 * @remarks
 * This class provides a quicksort implementation to efficiently sort an array of strings.
 * It includes methods for sorting and partitioning, as well as a helper function for finding
 * the median of three values.
 *
 * @beta
 */
export class QuickSort {
    private count: number = 0;

    /**
     * Sorts the input array of strings using the QuickSort algorithm.
     *
     * @remarks
     * This method initiates the quicksort process and logs the runtime and count of iterations.
     *
     * @param arr - The array of strings to be sorted.
     *
     * @beta
     */
    public sort(arr: string[]) {
        this.count = 0; // resets the count before starting a new sort
        const startTime = performance.now();
        this.quicksort(arr, 0, arr.length - 1);
        const endTime = performance.now();
        const runTime = endTime - startTime;
        console.log(\`   runtime: \${runTime} milliseconds\`);
    }

    /**
     * Recursive function for performing the quicksort algorithm.
     *
     * @remarks
     * This method recursively divides and sorts the array using the quicksort algorithm.
     * It also logs the count of iterations and prints the count when the depth is zero.
     *
     * @param arr - The array of strings to be sorted.
     * @param start - The starting index of the subarray.
     * @param end - The ending index of the subarray.
     * @param depth - The depth of recursion (optional).
     *
     * @beta
     */
    private quicksort(arr: string[], start: number, end: number, depth: number = 0) {
        if (start <= end) {
            this.count++;
            const pivotIndex = this.medianOfThree(arr, start, Math.floor((start + end) / 2), end);
            const pivot = this.partition(arr, start, end, pivotIndex);

            this.quicksort(arr, start, pivot - 1, depth + 1);
            this.quicksort(arr, pivot + 1, end, depth + 1);
            if (depth === 0) {
                console.log(\`Quick Sort\`);
                console.log(\`   count: \${this.count}\`);
            }
        }
    }

    /**
     * Partitions the array for the quicksort algorithm.
     *
     * @remarks
     * This method rearranges the elements in the array such that elements smaller than
     * the pivot are on the left and elements larger than the pivot are on the right.
     *
     * @param arr - The array of strings to be sorted.
     * @param start - The starting index of the subarray.
     * @param end - The ending index of the subarray.
     * @param pivotIndex - The index of the pivot element.
     *
     * @returns {number} - The index of the pivot element after partitioning.
     *
     * @beta
     */
    private partition(arr: string[], start: number, end: number, pivotIndex: number): number {
        this.swap(arr, pivotIndex, end);
        const pivot = arr[end];
        let i = start;

        for (let j = start; j < end; j++) {
            if (arr[j] < pivot) {
                this.swap(arr, i, j);
                i++;
            }
        }

        this.swap(arr, i, end);
        return i;
    }

    /**
     * Swaps two elements in the array.
     *
     * @remarks
     * This method swaps the elements at positions a and b in the array.
     *
     * @param arr - The array of strings.
     * @param a - The index of the first element.
     * @param b - The index of the second element.
     *
     * @beta
     */
    private swap(arr: string[], a: number, b: number) {
        const tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }

    /**
     * Finds the median of three values in the array.
     *
     * @remarks
     * This method compares three values in the array and returns the index of the median value.
     *
     * @param arr - The array of strings.
     * @param i - The index of the first value.
     * @param j - The index of the second value.
     * @param k - The index of the third value.
     *
     * @returns {number} - The index of the median value.
     *
     * @beta
     */
    private medianOfThree(arr: any[], i: number, j: number, k: number): number {
        const a = arr[i];
        const b = arr[j];
        const c = arr[k];

        if ((a - b) * (c - a) >= 0) {
            return i;
        } else if ((b - a) * (c - b) >= 0) {
            return j;
        } else {
            return k;
        }
    }
}`
  return (
      <>
        <h2 className='bold-text'>Sorting Algortihms</h2>
      <p className='p-text'>
      Sorting Algorithms are important algorithms in programming to sort or arrange elements in a certain order. There are many sorting algorithms that vary in complexity, complexity and usability. Some are more useful than others in different situations. For example, Merge Sort, Quicksort, and Bubble Sort. 
      </p>

      <h4 className='bold-text'>Big-O-Notaion</h4>
<p className='p-text'>Big O Notation is a concept used to describe the performance of an algorithm. It provides a domain for the time complexity of an algorithm in terms of the size of the imputed data, denoted as ‘n’. It is mainly used to classify algorithms according to their run times or space requirement as the size of the input grows.
</p>
<p className='p-text'>The notations introduced in class are</p>
<ul>
  <li>O(n)-Linear</li>
  <ul>
    <li>
    As x increases f(x) increases proportionally.
    </li>
    <li>
      <img src={linear} alt="function" />
    </li>
  </ul>
  <li>O(n^2)-Quadratic</li>
  <ul>
    <li>
    As x increases f(x) increases at an accelerating rate (slope increases).
    </li>
    <li>
      <img src={quadratic} alt="function" />
    </li>
  </ul>
  <li>O(logn)-Logarithmic</li>
  <ul>
    <li>
    As x increases, y increases at a decelerating rate. 
    </li>
    <li>
      <img src={logarithmic} alt="function" />
    </li>
  </ul>
</ul>
<li>O(nlogn)-Linearithmic</li>
<ul>
  <li>
  As x increases, y increases quickly and then decelerates. 
  It is also good to note, the y values stays negative at the first values of x, before quickly rising up.
  </li>
  <li>
      <img src={Linearithmic} alt="function" />
    </li>
  </ul>

  <h4 className='bold-text'>Sorting Algortihms</h4>

  <p className='p-text'>The algortihms I will discuss are merge sort, quick sort, and bubble sort</p>
  <h5 className='bold-text'>Bubble Sort</h5>
  <ul>
    <li>
    <p className='p-text'><span className='bold-text'>Function:</span> First it checks the first number and then compares it with the one after it. If the first number is larger, it swaps with the one after. If the one after is larger, then they stay in the same place. The algorithm then repeatedly does the same thing for each pair of numbers in the array until sorted
</p>
    </li>
    <li>
    <p className='p-text'><span className='bold-text'>Time Complexity: </span>Worst-case and average-case are O(n²); best case is O(n) when already sorted 
</p>
    </li>
    <li>
    <p className='p-text'><span className='bold-text'>Explanation: </span>So the time taken to sort x amount of objects increases significantly making it slow. In each pass there are approximately n comparisons (linear) and there are n number of passess. Therefore O(n^2). As the number of items increases, the amount of time accelerates quickly proving that it is not efficient.
</p>
    </li>
    </ul>  
    <br/>

    <CopyBlock
  text={bubbleSort}
  language={'typescript'}
  showLineNumbers={true}
  wrapLines={true}
  theme='atom-one-dark'
  codeBlock
  icon={<FaCopy />}
  onCopy={() => copy(bubbleSort)}
/>

    <h5 className='bold-text'>Merge Sort</h5>
  <ul>
    <li>
    <p className='p-text'><span className='bold-text'>Function:</span> Divides the algortihhm into two halves and sorts both halves recursevly and then merges back together when sorted.
</p>
    </li>
    <li>
    <p className='p-text'><span className='bold-text'>Time Complexity: </span>Worst-case and average-case are O(nlogn)
</p>
    </li>
    <li>
    <p className='p-text'><span className='bold-text'>Explanation: </span>Time complexity for dividing the two halves is O(logn) (time depends on how many times you need to divide by 2). In each of the log(n) levels there are n number of items.
Therefore O(nlogn). As the number of items increases, the amount of time accelerates quickly (but not as fast as O(n2)). It is also good to note, that merge sort will not work with small data sets due the y value of O(nlogn) being negative in the first values of x.

</p>
    </li>
    </ul>  

    <CopyBlock
  text={mergeSort}
  language={'typescript'}
  showLineNumbers={true}
  wrapLines={true}
  theme='atom-one-dark'
  codeBlock
  icon={<FaCopy />}
  onCopy={() => copy(mergeSort)}
/>
    <h5 className='bold-text'>Quick sort</h5>
  <ul>
    <li>
    <p className='p-text'><span className='bold-text'>Function:</span>  selects a 'pivot' element from an array and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

</p>
    </li>
    <li>
    <p className='p-text'><span className='bold-text'>Time Complexity: </span>Best and Average Case are O(nlogn) if the pivot is chosen well. Worst Case is O(n^2).
</p>
    </li>
    <li>
    <p className='p-text'><span className='bold-text'>Explanation: </span> Best and Average Case: If the pivot is chosen well (e.g., it consistently divides the array into nearly equal parts), the height of the recursion tree is log(n), and we perform O(n) work at each level of the recursion. Hence, the best and average-case time complexity is O(n log n).
<br/>Worst Case: In the worst case, where the pivot is the smallest or largest element (leading to very unbalanced partitions), the height of the recursion tree becomes n, and the time complexity degrades to O(n²). This situation occurs when the array is already sorted or nearly sorted, if the first or last element is always chosen as the pivot.
<br/> As the size of the array increases, the time complexity of Quick Sort in the average case grows at a rate of n log(n), which is more efficient than O(n²) but not quite as optimal as O(n)


</p>
    </li>
    </ul>  

    <CopyBlock
  text={quickSort}
  language={'typescript'}
  showLineNumbers={true}
  wrapLines={true}
  theme='atom-one-dark'
  codeBlock
  icon={<FaCopy />}
  onCopy={() => copy(quickSort)}
/>

  <h4 className='bold-text'>In summary</h4>
  <p className='p-text'>Bubble Sort is the least efficient in terms of time complexity, especially for larger datasets but works well with small datasets.
Quick Sort offers the best practical performance for a wide range of datasets, particularly with good pivot selection, despite the potential worst-case scenario.
Merge Sort guarantees a stable and consistent O(n log n) performance irrespective of the dataset's initial state but at the cost of additional memory and it will not run with small datasets.
</p>



      </>
    )
}

export default SortingAlgorithms