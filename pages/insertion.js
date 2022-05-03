export default function Insertion () {
    let array = [8, 9 , 10, 1, 3, 4, 5, 7, 6, 2];
    for (let i = 1; i < array.length; i++) {
        let cur = array[i];
        let left = i - 1;
        while (left >= 0 && array[left] > cur) {
            array[left + 1] = array[left];
            left--;
        }
        array[left + 1] = cur;
        }

    return (
        <div>
            <p>삽입 정렬</p>
            <p>{array}</p>
        </div>
    )
}