
var chart=Highcharts.chart('container1', {

    title: {
        text: 'Ambient Air Quality'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Index of Various Gases'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            //pointStart: 2010
        }
    },

    series: [{
        name: 'SO2',
        data: []
    }, {
        name: 'NO2',
        data: []
    }, {
        name: 'PM10',
        data: []
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
var json1={}
        var v11=0
        var v21=""
        var arr1=Array
        var cnt11=0;
        arr1=[]
        function g(){
            v21=document.getElementById("state").value
            g1();
        }
        function g2(){
            v21=document.getElementById("state1").value
            g1();
        }
        function g3(){
            v21=document.getElementById("state2").value
            g1();
        }
        function g4(){
            v21=document.getElementById("state3").value
            g1();
        }
        function g5(){
            v21=document.getElementById("state4").value
            g1();
        }
        function g1(){
            document.getElementById("graph1").style.display="flex";
            //document.getElementById("container1").innerHTML="display:flex;"
        function reqListener1() {
        json1=JSON.parse(this.responseText);
            let k=0
            for(var i=0;i<json1.records.length;i++){
            if(json1.records[i].state.toLowerCase()===v21.toLowerCase()){
                k=1
                v11=parseInt(json1.records[i]._so2_annual_average_g_m3_)
                a1=parseInt(json1.records[i]._no2_annual_average_g_m3_)
                a2=parseInt(json1.records[i]._pm10_annual_average_g_m3_)
                console.log(v11);


                arr1.push([v21,v11])
                console.log(`v1 is ${v11}`)
                console.log(v21);
                chart.series[0].addPoint([v21,v11])
                chart.series[1].addPoint([v21,a1])
                chart.series[2].addPoint([v21,a2])
                cnt11=cnt11+1;
                break
            }
            }
            if(k===0){
                cnt11=cnt11-1
                //break;
                alert('state doesnt exist')
            }
            if(cnt11>5)
                alert(`please refresh page`)
            console.log(json1)}
        var oReq1 = new XMLHttpRequest();
        oReq1.addEventListener("load", reqListener1);
        oReq1.open("GET", "https://api.data.gov.in/resource/53c8db4f-f71f-4f40-a773-4a95d2f9c4ae?api-key=579b464db66ec23bdd0000011f3171c57adb4ebd410ecf3d887ed34a&format=json&offset=0&limit=50");
        oReq1.send();
        //document.getElementById("graph1").style.display="block"

        
}

var charts=  Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Distribution of LED Bulbs under UJALA programme'
    },
    subtitle: {
        text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    xAxis: {
        type: 'state'
    },
    yAxis: {
        title: {
            text: 'Total led bulbs distributed'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}%</b>'
    },

    series: [
        {
            name: "Led Bulbs",
            data: [
            ]
        },
        {
            name: "Led Bulbs",
            data: [
            ]
        },
        {
            name: "Led Bulbs",

            data: [

            ]
        },
        {
            name: "Led Bulbs",

            data: [

            ]
        },
        {
            name: "Led Bulbs",
            data: [

            ]
        }
    ]
});     
        var json={}
        var v1=0
        var v2=""
        var arr=Array
        var cnt=0;
        arr=[]
        function f(){
            v2=document.getElementById("state").value
            f1();
        }
        function f2(){
            v2=document.getElementById("state1").value
            f1();
        }
        function f3(){
            v2=document.getElementById("state2").value
            f1();
        }
        function f4(){
            v2=document.getElementById("state3").value
            f1();
        }
        function f5(){
            v2=document.getElementById("state4").value
            f1();
        }
        function f1(){
            document.getElementById("graph2").style.display="flex";
        function reqListener () {
        json=JSON.parse(this.responseText);
            let k=0
            for(var i=0;i<json.records.length;i++){
            if(json.records[i].statename.toLowerCase()===v2.toLowerCase()){
                k=1
                v1=parseInt(json.records[i].ledbulbsdistributed)
                arr.push([v2,v1])
                console.log(`v1 is ${v1}`)
                cnt=cnt+1
                charts.series[cnt].addPoint([v2,v1])
                break
            }
            }
            if(k===0){
                cnt=cnt-1
                alert('state doesnt exist')
            }
            if(cnt>5)
                alert(`please refresh page`)
            console.log(json)}
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "https://api.data.gov.in/resource/8d308158-28aa-4bcf-9e98-948b029340ad?api-key=579b464db66ec23bdd0000011f3171c57adb4ebd410ecf3d887ed34a&format=json&offset=0&limit=50");
        oReq.send();
        
}
//document.getElementById("graph1").style.display="block"
var hosjson={}
function tablef(){
    document.getElementById("mytable").style.display="block"
    var st=document.getElementById("host").value
   function reqListener3(){
    hosjson=JSON.parse(this.responseText);
    var state=document.getElementById("host")
    for(var i=0;i<1048;i++){
        var cnt=1;
        if(st.toLowerCase()===hosjson.data[i][6].toLowerCase())
        {
            var tbl=document.getElementById("mytable")
            var row=tbl.insertRow(cnt)
            console.log(hosjson.data[i][1])
            console.log(hosjson.data[i][6])
            cnt=cnt+1;
            var cell1=row.insertCell(0);
            var cell2=row.insertCell(1);
            var cell3=row.insertCell(2);
            var cell4=row.insertCell(3);
            var cell5=row.insertCell(4);
            cell1.innerText=hosjson.data[i][1]
            cell2.innerText=hosjson.data[i][5]
            cell3.innerText=hosjson.data[i][9]
            cell4.innerText=hosjson.data[i][11]
            cell5.innerText=hosjson.data[i][19]
        }
    }}
    
    var oReq3 = new XMLHttpRequest();
        oReq3.addEventListener("load", reqListener3);
        oReq3.open("GET", "https://data.gov.in/node/356921/datastore/export/json");
        oReq3.send();
}