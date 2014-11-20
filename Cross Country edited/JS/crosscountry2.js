var stackR1 = new Array();
var stackR2 = new Array();
var stackR3 = new Array();
var stackR4 = new Array();
var stackR5 = new Array();
var firstArr = new Array();
var lastArr = new Array();
var oArr = new Array();
var tArr = new Array();
var totalArr = new Array();

function isEmpty(value) {
    return (value == null || value.length === 0);
}

function update(rownum) {
    if (rownum == 1) {
        var firstName = document.getElementById("fName1").value;
        var lastName = document.getElementById("lName1").value;
        var timeTotal = document.getElementById("tTotal1").value;
        var timeO = document.getElementById("mileOne1").value;
        var timeT = document.getElementById("mileTwo1").value;
    } else if (rownum == 2) {
        var firstName = document.getElementById("fName2").value;
        var lastName = document.getElementById("lName2").value;
        var timeTotal = document.getElementById("tTotal2").value;
        var timeO = document.getElementById("mileOne2").value;
        var timeT = document.getElementById("mileTwo2").value;
    } else if (rownum == 3) {
        var firstName = document.getElementById("fName3").value;
        var lastName = document.getElementById("lName3").value;
        var timeTotal = document.getElementById("tTotal3").value;
        var timeO = document.getElementById("mileOne3").value;
        var timeT = document.getElementById("mileTwo3").value;
    } else if (rownum == 4) {
        var firstName = document.getElementById("fName4").value;
        var lastName = document.getElementById("lName4").value;
        var timeTotal = document.getElementById("tTotal4").value;
        var timeO = document.getElementById("mileOne4").value;
        var timeT = document.getElementById("mileTwo4").value;
    } else if (rownum == 5) {
        var firstName = document.getElementById("fName5").value;
        var lastName = document.getElementById("lName5").value;
        var timeTotal = document.getElementById("tTotal5").value;
        var timeO = document.getElementById("mileOne5").value;
        var timeT = document.getElementById("mileTwo5").value;
    }
    firstArr.push(firstName);
    lastArr.push(lastName);
    oArr.push(timeO);
    tArr.push(timeT);
    totalArr.push(timeTotal);
       if (rownum == 1) {
        stackR1.push(firstArr);
        stackR1.push(lastArr);
        stackR1.push(oArr);
        stackR1.push(tArr);
        stackR1.push(totalArr);
    } else if (rownum == 2) {
        stackR2.push(firstArr);
        stackR2.push(lastArr);
        stackR2.push(oArr);
        stackR2.push(tArr);
        stackR2.push(totalArr);
    } else if (rownum == 3) {
        stackR3.push(firstArr);
        stackR3.push(lastArr);
        stackR3.push(oArr);
        stackR3.push(tArr);
        stackR3.push(totalArr);
    } else if (rownum == 4) {
        stackR4.push(firstArr);
        stackR4.push(lastArr);
        stackR4.push(oArr);
        stackR4.push(tArr);
        stackR4.push(totalArr);
    } else if (rownum == 5) {
        stackR5.push(firstArr);
        stackR5.push(lastArr);
        stackR5.push(oArr);
        stackR5.push(tArr);
        stackR5.push(totalArr);
    }
    var fullName = firstName + " " + lastName;


    var am = parseInt(timeTotal.split(":")[0], 10);
    var as = parseFloat(timeTotal.split(":")[1], 10);
    var secondTotal = am * 60 + as;

    var bm = parseInt(timeO.split(":")[0], 10);
    var bs = parseFloat(timeO.split(":")[1], 10);
    var secondO = bm * 60 + bs;

    var cm = parseInt(timeT.split(":")[0], 10);
    var cs = parseFloat(timeT.split(":")[1], 10);
    var secondT = cm * 60 + cs;
    if (isNaN(secondT) || isNaN(secondO)) {
        alert("please put a number");
    } else if (isEmpty(firstName) || isEmpty(lastName)) {
        alert("please enter the name");
    } else {
        secondsMO = secondT - secondO;
        secondsTO = secondTotal - secondT;
        var finM;
        var finS;
        finM = parseInt(secondsMO / 60);
        finS = secondsMO % 60;
        finS = Math.round(finS * 1000) / 1000;
        var table = document.getElementById("output");
        if (finS < 10) {
            table.rows[rownum].cells[2].innerHTML = finM + ":0" + finS;
        } else {
            table.rows[rownum].cells[2].innerHTML = finM + ":" + finS;
        }
        table.rows[rownum].cells[0].innerHTML = fullName;
        table.rows[rownum].cells[1].innerHTML = timeO;

        finM = parseInt(secondsTO / 60);
        finS = secondsTO % 60;
        finS = Math.round(finS * 1000) / 1000;
        if (finS < 10) {
            table.rows[rownum].cells[3].innerHTML = finM + ":0" + finS;
        } else {
            table.rows[rownum].cells[3].innerHTML = finM + ":" + finS;
        }
        table.rows[rownum].cells[4].innerHTML = timeTotal;

    }
}

function restore(rownum) {
    if (stackR1.length == 0) {
        alert("nothing to restore")
    } else if (stackR1[0].length == 0) {
        alert("end of stack")
    } else {
        var table = document.getElementById("output");
        if (rownum == 1) {
            var o1 = document.getElementById("fName1");
            var o2 = document.getElementById("lName1");
            var o3 = document.getElementById("mileOne1");;
            var o4 = document.getElementById("mileTwo1");
            var o5 = document.getElementById("tTotal1");
            o1.value = stackR1[0].pop();
            o2.value = stackR1[1].pop();
            o3.value = stackR1[2].pop();
            o4.value = stackR1[3].pop();
            o5.value = stackR1[4].pop();

        } else if (rownum == 2) {
            var o1 = document.getElementById("fName2");
            var o2 = document.getElementById("lName2");
            var o3 = document.getElementById("mileOne2");;
            var o4 = document.getElementById("mileTwo2");
            var o5 = document.getElementById("tTotal2");
            o1.value = stackR2[0].pop();
            o2.value = stackR2[1].pop();
            o3.value = stackR2[2].pop();
            o4.value = stackR2[3].pop();
            o5.value = stackR2[4].pop();

        } else if (rownum == 3) {
            var o1 = document.getElementById("fName3");
            var o2 = document.getElementById("lName3");
            var o3 = document.getElementById("mileOne3");;
            var o4 = document.getElementById("mileTwo3");
            var o5 = document.getElementById("tTotal3");
            o1.value = stackR3[0].pop();
            o2.value = stackR3[1].pop();
            o3.value = stackR3[2].pop();
            o4.value = stackR3[3].pop();
            o5.value = stackR3[4].pop();

        } else if (rownum == 4) {
            var o1 = document.getElementById("fName4");
            var o2 = document.getElementById("lName4");
            var o3 = document.getElementById("mileOne4");;
            var o4 = document.getElementById("mileTwo4");
            var o5 = document.getElementById("tTotal4");
            o1.value = stackR4[0].pop();
            o2.value = stackR4[1].pop();
            o3.value = stackR4[2].pop();
            o4.value = stackR4[3].pop();
            o5.value = stackR4[4].pop();

        } else if (rownum == 5) {
            var o1 = document.getElementById("fName5");
            var o2 = document.getElementById("lName5");
            var o3 = document.getElementById("mileOne5");;
            var o4 = document.getElementById("mileTwo5");
            var o5 = document.getElementById("tTotal5");
            o1.value = stackR5[0].pop();
            o2.value = stackR5[1].pop();
            o3.value = stackR5[2].pop();
            o4.value = stackR5[3].pop();
            o5.value = stackR5[4].pop();

        }
    }
}

function delet(rownum) {
    var table = document.getElementById("output");
    if (rownum == 1) {
        table.rows[1].cells[0].innerHTML = "";
        table.rows[1].cells[1].innerHTML = "";
        table.rows[1].cells[2].innerHTML = "";
        table.rows[1].cells[3].innerHTML = "";
        table.rows[1].cells[4].innerHTML = "";
        var elems = document.getElementsByClassName("info1");

    } else if (rownum == 2) {
        table.rows[2].cells[0].innerHTML = "";
        table.rows[2].cells[1].innerHTML = "";
        table.rows[2].cells[2].innerHTML = "";
        table.rows[2].cells[3].innerHTML = "";
        table.rows[2].cells[4].innerHTML = "";
        var tab = document.getElementsByClassName("info2");

    } else if (rownum == 3) {
        table.rows[3].cells[0].innerHTML = "";
        table.rows[3].cells[1].innerHTML = "";
        table.rows[3].cells[2].innerHTML = "";
        table.rows[3].cells[3].innerHTML = "";
        table.rows[3].cells[4].innerHTML = "";
        var tab = document.getElementsByClassName("info3");

    } else if (rownum == 4) {
        table.rows[4].cells[0].innerHTML = "";
        table.rows[4].cells[1].innerHTML = "";
        table.rows[4].cells[2].innerHTML = "";
        table.rows[4].cells[3].innerHTML = "";
        table.rows[4].cells[4].innerHTML = "";
        var tab = document.getElementsByClassName("info4");

    } else if (rownum == 5) {
        table.rows[5].cells[0].innerHTML = "";
        table.rows[5].cells[1].innerHTML = "";
        table.rows[5].cells[2].innerHTML = "";
        table.rows[5].cells[3].innerHTML = "";
        table.rows[5].cells[4].innerHTML = "";
        var tab = document.getElementsByClassName("info5");
    }
    for (var i = 0; i < elems.length; i++) {
        elems[i].value = "";
    }
}
