/*
 * author: nocoolyoyo
 *  created on 2017-10-30
 *
 */



const RMB2number = function () {
    if (((num.toString()).indexOf('.') > 16)||(isNaN(num)))
        return '请输入正确的金额';
    num = (Math.round(num*100)/100).toString();
    num =((Math.pow(10,19-num.length)).toString()).substring(1)+num;
};

export default RMB2number;