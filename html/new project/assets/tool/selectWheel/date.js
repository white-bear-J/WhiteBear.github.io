/**
 * Created by Administrator on 2017/7/10.
 */
var getYear = new Array();
var yearMonth = new Array();

var maxYear = new Date().getFullYear();
var minYear = maxYear-80;
var yearLenth = maxYear - minYear;




function getDay() {
    for(var i = 0;i<yearLenth;i++){
        var thisYear =  maxYear-i;
        getYear[i] = {};
        getYear[i].name = thisYear+"年";
        getYear[i].id = thisYear;
        getYear[i].childs = [];
        for (var j = 0;j<12;j++){
            getYear[i].childs[j]= {};
            var thisMonth =  j+1;
            getYear[i].childs[j].id = thisMonth;
            getYear[i].childs[j].name = thisMonth+"月";
            getYear[i].childs[j].childs = [];
            if(thisMonth==1 || thisMonth==3 || thisMonth==5 || thisMonth==7 || thisMonth==8 || thisMonth==10 || thisMonth==12){
                for (var z = 0;z<31;z++){
                    getYear[i].childs[j].childs[z] = {};
                    var thisDay =  z+1;
                    getYear[i].childs[j].childs[z].id = thisDay;
                    getYear[i].childs[j].childs[z].name = thisDay+"日";
                }
            }else if(thisMonth==4 || thisMonth==6 || thisMonth==9 || thisMonth==11){
                for (var z = 0;z<30;z++){
                    getYear[i].childs[j].childs[z] = {};
                    var thisDay =  z+1;
                    getYear[i].childs[j].childs[z].id = thisDay;
                    getYear[i].childs[j].childs[z].name = thisDay+"日";
                }
            }else if(thisMonth == 2){
                if((thisYear%4 == 0 && thisYear%100 != 0 ) || (thisYear%400 == 0)){
                    for (var z = 0;z<29;z++){
                        getYear[i].childs[j].childs[z] = {};
                        var thisDay =  z+1;
                        getYear[i].childs[j].childs[z].id = thisDay;
                        getYear[i].childs[j].childs[z].name = thisDay+"日";
                    }
                }else{
                    for (var z = 0;z<28;z++){
                        getYear[i].childs[j].childs[z] = {};
                        var thisDay =  z+1;
                        getYear[i].childs[j].childs[z].id = thisDay;
                        getYear[i].childs[j].childs[z].name = thisDay+"日";
                    }
                }
            }

        }
    }
    return getYear;
}
function getMonth() {
    for(var i = 0;i<yearLenth;i++){
        var thisYear =  maxYear-i;
        yearMonth[i] = {};
        yearMonth[i].name = thisYear+"年";
        yearMonth[i].id = thisYear;
        yearMonth[i].childs = [];
        for (var j = 0;j<12;j++){
            yearMonth[i].childs[j]= {};
            var thisMonth =  j+1;
            yearMonth[i].childs[j].id = thisMonth;
            yearMonth[i].childs[j].name = thisMonth+"月";
        }
    }
    return yearMonth;
}
