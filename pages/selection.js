export default function Selection(){
    let array = [8, 9 , 10, 1, 3, 4, 5, 7, 6, 2];
    console.log(array);
        for (let i = 0; i < array.length; i++) {
            let minindex=i;
            for (let j = i+1; j < array.length ; j++) {
                if (array[minindex]>array[j]) {
                    minindex = j;
                }
            }
            if(minindex !== i ){ 
                [array[i], array[minindex]] = [array[minindex], array[i]]
            }
        }
        
    return (
        <div>
            <p>선택 정렬</p>
            <p>{array}</p>
        </div>
    )

}