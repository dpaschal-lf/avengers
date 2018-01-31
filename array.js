function Arr(arrLen){
    this.array = new Array(arrLen).map(function(elem,i){
        this.array[i] = i
    });
    this.search  = function(val){
        var pos = false
        for(var i=0;i<this.array.length;i++){
            if(this.array[i]===val){
                return i ;
            }
        }
        return pos
    };


    this.read = function(pos){
        return this.array[pos]
    };


    this.insert = function(pos, val){
        var oldArr = this.array;
        this.array = new Array(this.array.length+1)
        for(var i = 0; i <= pos ; i++){
            if( i === pos ){
                this.array[i] = val
                for(var o = i+1 ; o < this.array.length ; o ++){
                    this.array[o] = oldArr[o-1]
                }
            }else{
                this.array[i] = oldArr[i]
            }
        }
        return this.array.length
    };


    this.delete = function(pos){
        // this.array.splice(pos,1)
        for(var i=0; i < this.array.length-1 ; i++){
            if(i >= pos ){
                this.array[i]=this.array[i+1]
            }
        }
        return this.array.length

    };
}


var b = new Arr(10);
console.log('b is new array', b);
console.log(b.search(5));
console.log('b has new elements', b);
