/*
 * author: nocoolyoyo
 *  created on 2017-10-30
 *
 */
var cnNums = ["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"]; //汉字的数字
var cnIntRadice = ["","拾","佰","仟"]; //基本单位
var cnIntUnits = ["","万","亿","兆"]; //对应整数部分扩展单位
var cnDecUnits = ["角","分","毫","厘"]; //对应小数部分单位
var cnIntLast = "元"; //整型完以后的单位
var maxNum = 999999999999999.99; //最大处理的数字

function num2CNY(n) {
    var fraction = ['角', '分'];
    var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    var unit = [ ['元', '万', '亿'], ['', '拾', '佰', '仟']  ];
    var head = n < 0? '欠': '';
    n = Math.abs(n);

    var s = '';

    for (var i = 0; i < fraction.length; i++)
    {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);

    for (var i = 0; i < unit[0].length && n > 0; i++)
    {
        var p = '';
        for (var j = 0; j < unit[1].length && n > 0; j++)
        {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零')  + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}
