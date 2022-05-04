export default function Merge () {
    let arraynum = [];
    for(let i =0; i<100; i++){
        let arraytemp= [Math.floor(Math.random() * 100)];
        arraynum = [...arraynum, ...arraytemp];
    }
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
      
      const sortedArray = mergeSort(arraynum);
      
      const printarray = (array) => {
          for(let i=0;i<100;i++){
              ("index[" + i + "] = " + array[i]);
          }
      }
      printarray(sortedArray);
    return(
        <div>
            <p>병합 정렬</p>
            <p>dd</p>
        </div>

    )
}