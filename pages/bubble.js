export default function Bubble(){
    let array = [8, 9 , 10, 1, 3, 4, 5, 7, 6, 2];
    console.log(array);
        for (let i = 0; i < array.length; i++) {
            let swap;
            for (let j = 0; j < array.length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    swap = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = swap;
                }
            }
            console.log(`${i}회전: ${array}`);
        }
    return (
        <div>
            <p>버블 정렬</p>
            <p>{array}</p>
        </div>
    )

}
