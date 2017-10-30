/*
 * author: nocoolyoyo
 *  created on 2017-10-30
 *
 */
var cnNums = ["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"]; //汉字的数字
var cnIntRadice = ["拾","佰","仟"]; //基本单位
var cnIntUnits = ["万","亿","兆"]; //对应整数部分扩展单位
var cnDecUnits = ["角","分"]; //对应小数部分单位
var cnIntLast = "元"; //整型完以后的单位
var maxNum = 999999999999999.99; //最大处理的数字

function CNY2num(ChineseStr) {
    var IntegerNum; //金额整数部分
    var DecimalNum; //金额小数部分
    var money=""; //输出的中文金额字符串
    var parts; //分离金额后用的数组，预定义

    console.log(ChineseStr)


    //兆单位分割
    parts  = ChineseStr.split(cnIntUnits[3]);
    //单位兆
    if(parts.length > 1){
        console.log(parts)
    }
    //亿单位分割
    parts = parts[0].split(cnIntUnits[2]);
    if(parts.length > 1){

        console.log(parts)
    }
    //万单位分割
    parts = parts[0].split(cnIntUnits[1]);
    if(parts.length > 1){

        console.log(parts)
    }



//叁拾贰万肆仟叁佰贰拾肆元
   // parts[0].spit(cnIntRadice[2])
   // console.log(parts)

}
