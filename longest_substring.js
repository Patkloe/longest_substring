var lengthOfLongestSubstring = function(s) {
  var grand = 0;
  var hash = {};
  var start = 0;
    for(var i = 0; i < s.length; i++){
        let val = s[i];
        if(val in hash){
            start = Math.max(start,hash[val] + 1);
        }
        grand = Math.max(grand,i+1 - start);
        hash[val] = i;
    }
    return grand;
};
