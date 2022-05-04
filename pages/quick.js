export default function Quick(){
    const arr = [4, 3 , 7, 9, 1, 2, 6, 8, 5];
    const quickSort = function (arr) {
        if (arr.length <= 1) return arr;
      
        const pivot = arr[0];
        const left = [];
        const right = [];
      
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] <= pivot) left.push(arr[i]);
          else right.push(arr[i]);
        }
      
        const lSorted = quickSort(left);
        const rSorted = quickSort(right);
        return [...lSorted, pivot, ...rSorted];
      };
    const comarray = quickSort(arr);

    return(
        <div>
            <p>퀵 정렬</p>
            <p>{comarray}</p>
        </div>
    )
}