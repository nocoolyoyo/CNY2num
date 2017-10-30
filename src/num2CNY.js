/*
 * author: nocoolyoyo
 *  created on 2017-10-30
 *
 */

import {Mapping, MaxNum} from "./mapping"

const num2RMB = function (money) {
    let IntegerNum; //金额整数部分
    let DecimalNum; //金额小数部分
    let ChineseStr=""; //输出的中文金额字符串
    let parts; //分离金额后用的数组，预定义

    //参数类型判断
    if(typeof money === 'number'||
        typeof money === 'string'){
        money = money.toString();
    }else{
        return 'error value type'
    }
    //空字符串判断
    if( money === '' ){
        return '';
    }

    money = parseFloat(money);
    if( money >= MaxNum ){
        return '超出最大处理数字';
    }

    if( money === 0 ){
        ChineseStr = Mapping.Nums[0]+Mapping.IntLast;
        return ChineseStr;
    }
    money = money.toString(); //转换为字符串
    if( money.indexOf('.') === -1 ){
        IntegerNum = money;
        DecimalNum = '';
    }else{
        parts = money.split('.');
        IntegerNum = parts[0];
        DecimalNum = parts[1].substr(0,4);
    }
    if( parseInt(IntegerNum,10) > 0 ){//获取整型部分转换
        zeroCount = 0;
        IntLen = IntegerNum.length;
        for( i=0;i<IntLen;i++ ){
            n = IntegerNum.substr(i,1);
            p = IntLen - i - 1;
            q = p / 4;
            m = p % 4;
            if( n === "0" ){
                zeroCount++;
            }else{
                if( zeroCount > 0 ){
                    ChineseStr += Mapping.Nums[0];
                }
                zeroCount = 0; //归零
                ChineseStr += Mapping.Nums[parseInt(n)] + Mapping.IntRadice[m];
            }
            if( m===0 && zeroCount<4 ){
                ChineseStr += Mapping.IntUnits[q];
            }
        }
        ChineseStr += Mapping.IntLast;
        //整型部分处理完毕
    }
    if( DecimalNum!== '' ){//小数部分
        decLen = DecimalNum.length;
        for( i=0; i<decLen; i++ ){
            n = DecimalNum.substr(i,1);
            if( n !== '0' ){
                ChineseStr += Mapping.Nums[Number(n)]+Mapping.DecUnits[i];
            }
        }
    }
    if( ChineseStr === '' )
        ChineseStr += Mapping.Nums[0]+Mapping.IntLast;

    return ChineseStr;

};

export default num2RMB;