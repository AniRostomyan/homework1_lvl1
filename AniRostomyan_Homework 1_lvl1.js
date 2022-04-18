//EX.1
function invert(obj){
    let result = {};
    let newRes = [];
    for(let key in obj){
        if(result.hasOwnProperty(obj[key])){
       
            if(typeof(result[obj[key]]) == 'string'){
                newRes = result[obj[key]].split();
                newRes.push(key);
                result[obj[key]] = newRes;
               
            }else{
                newRes.push(key);
                result[obj[key]] = newRes;
            }
        }else{
            result[obj[key]] = key
        }
    }
    return result;
}
//EX.2
function shallowCompare(a, b){
    let strA = '';
    let strB = '';
    for(let keyA in a){
        strA += keyA + a[keyA]  
    }
    for(let keyB in b){
        strB += keyB + b[keyB]  
    }
    if(strA == strB){
        return true
    }
    return false
}
//EX. 3.
function areElemUnique(arr){
    if(!arr.length){
        return false
    }
    for(let i = 0; i < arr.length ; i++){
        if(arr.lastIndexOf(arr[i]) !== i){
            return false;
        }
    }
    return true;
}

//EX 4.
function isIsogram(str){
    if(!str){
        return false;
    }
    for(let i = 0; i < str.length; i++){
        if(str.lastIndexOf(str[i]) !== i)
            return false;
    }
    return true;
}
//Ex. 5.
function countSequence(arr){
    let max = arr[0];
    let min = arr[0];
    let count = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }else if(arr[i] < min){
            min = arr[i]
        }
    }
    return ((max - min - 1) - arr.filter(elem => elem > min && elem < max).length)
}
