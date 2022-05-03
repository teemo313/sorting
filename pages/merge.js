export default function Merge () {
    function merge2(left, right) {
        const sortedArr = [];
        while (left.length && right.length) {
          if (left[0] <= right[0]) {
            sortedArr.push(left.shift());
          } else {
            sortedArr.push(right.shift());
          }
        }
        return [...sortedArr, ...left, ...right];
      }
      
      function mergeSort(arr) {
        if (arr.length === 1) return arr;
        const boundary = Math.ceil(arr.length / 2);
        const left = arr.slice(0, boundary);
        const right = arr.slice(boundary);
        return merge2(mergeSort(left), mergeSort(right));
      }
      
      const arr = [7, 4, 3, 2, 1, 6, 5];
      const sortedArray = mergeSort(arr);
    return(
        <div>
            <p>병합 정렬</p>
            <p>{sortedArray}</p>
        </div>

    )
}