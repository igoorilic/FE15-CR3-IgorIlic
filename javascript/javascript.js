var stage1 = (band1, band2, band3) => {
    console.log(`The first band costs ${band1}`);
    console.log(`The second band costs ${band2}`);
    console.log(`The third band costs ${band3}`);
    return band1, band2, band3;
}
stage1(20, 30, 50);

var stage2 = (band4, band5, band6) => {
    console.log(`The fourth band costs ${band4}`)
    console.log(`The fifth band costs ${band5}`)
    console.log(`The sixth band costs ${band6}`)
    return band4, band5, band6;
}

stage2(60, 90, 120);

var stage3 = (band7, band8, band9) => {
    console.log(`The seventh band costs ${band7}`)
    console.log(`The eight band costs ${band8}`)
    console.log(`The ninth band costs ${band9}`)
    return band7, band8, band9;
}
stage3(150, 195, 250);

var calculateInvoice = (band1, band2, band3, band4, band5, band6, band7, band8, band9) => {
    let sum = band1 + band4 + band8;
    let sum2 = band2 + band5 + band9;
    let sum3 = band3 + band6 + band7;
    let sum4 = band2 + band4 + band9;
    console.log(`Hi Mark, your invoice for today is in total ${sum} Euro`)
    console.log(`Hi Sofia, your invoice for today is in total ${sum2} Euro`)
    console.log(`Hi Stefan, your invoice for today is in total ${sum3} Euro`)
    console.log(`Hi Alex, your invoice for today is in total ${sum4} Euro`)
    return sum, sum2, sum3, sum4;
}
calculateInvoice(20, 30, 50, 60, 90, 120, 150, 195, 250);

var studentInvoice = (band1, band2, band3, band4, band5, band6, band7, band8, band9) => {
    let sum = band1 + band4 + band7;
    let div = sum * 0.9;
    let sum2 = band2 + band5 + band8;
    let div2 = sum2 * 0.9;
    let sum3 = band3 + band5 + band9;
    let div3 = sum3 * 0.9;
    console.log(`Hi Maria, your student invoice for today is in total ${div} Euro`);
    console.log(`Hi Ivan, your student invoice for today is in total ${div2} Euro`);
    console.log(`Hi Marko, your student invoice for today is in total ${div3} Euro`);
}
studentInvoice(20, 30, 50, 60, 90, 120, 150, 195, 250);