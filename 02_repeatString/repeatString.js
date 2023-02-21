const repeatString = function(hey,num) {
    const heys=[];
    if (num >= 0 || !num) {
    for (i=0 ; i<num ; i++) {
        heys.push(hey);
    }

    return heys.join('');
}
else {
    return 'ERROR';
}
   /* for(let num in heys) {
        return heys[num];
    }*/
};

// Do not edit below this line
module.exports = repeatString;
