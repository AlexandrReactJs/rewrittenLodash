let lodash = {
    chunk: (array, size = 1) => {
        let result = []

        let chunk = []

        let chunkCount = Math.ceil(array.length / size)

        let start = 0
        let end = size

        for(let i =0; i < chunkCount; i++){
            
            chunk = array.slice(start, end)
            result.push(chunk)
            start = start + size;
            end = end + size;
            
            
        }
        return result;
    },
}


let array = [1, 2, 3, 4, ]


console.log(lodash.chunk(array, 2))