export default function Heap() {
    let number = 9 ;
    let heap = [3,4,8,6,9,1,5,2,7];
    for(let i =1; i< number;i++){
        let c = i ;
        do {
            var root = parseInt((c-1)/2);
            
            if(heap[root] < heap[c]){
                let temp = heap[root];
                heap[root] = heap[c];
                heap[c]= temp;
            }
            c = root;
        } while( c != 0 );
    }
    
    for(let i = number -1; i>= 0; i-- ){
        var temp = heap[0];
        heap[0] = heap[i] ;
        heap[i] = temp;
        var root  = 0;
        var c = 1;
        do {
            c = 2 * root +1;
            if(heap[c] < heap [c+1] && c < i -1){
                c++;
            }
            if(heap[root] < heap[c] && c< i){
                var temp = heap[root];
                heap[root] = heap[c];
                heap[c] = temp;
            }
            root = c;
        } while (c < i);
        
    }
    return(
        <div>
            <p>heap 정렬</p>
        </div>

    )
}