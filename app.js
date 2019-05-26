          var charts=  Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Browser market shares. January, 2018'
    },
    subtitle: {
        text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total percent market share'
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
        function reqListener () {
        json=JSON.parse(this.responseText);
            let k=0
            for(var i=0;i<json.records.length;i++){
            if(json.records[i].statename.toLowerCase()===v2.toLowerCase()){
                k=1
                v1=parseInt(json.records[i].ledbulbsdistributed)
                arr.push([v2,v1])
                console.log(`v1 is ${v1}`)
                charts.series[cnt++].addPoint([v2,v1])
                break
            }
            }
            if(k===0){
                cnt--
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