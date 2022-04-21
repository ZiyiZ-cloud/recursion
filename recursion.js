/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length ===0) return 1;
  return(1*nums[0]*product(nums.splice(1)))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if(words.length===0) return 0;
  return(Math.max(words[0].length,longest(words.splice(1))))
}
/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if(str.length===0)return ('');
  return(str[0]+(everyOther(str.substr(2))))
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if(str.length<=1)return;
  return(str[0]===str[-1]&&isPalindrome(str.substr(1,-2)))
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if(arr.length===index)return -1
  if(arr[index]===val){
    return index
  }else{
    findIndex(arr,val,index+1)
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str,index = 0,newStr='') {
    if(newStr.length===str.length)return newStr;
    newStr+=str[str.length-1-index]
    return revString(str,index+1,newStr)

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, i = 0, j = arr.length-1) {
  if(i>j){
    return -1
  }
  let middle=Math.floor((i+j)/2)
  if(arr[middle]===val){
    return middle
  }
  if(arr[middle]>val){
    return binarySearch(arr,val,i,middle-1)
  }
  if(arr[middle]<val){
    return binarySearch(arr,middle,middle+1,j)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
