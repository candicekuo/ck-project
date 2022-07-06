$(document).ready(function(){
    /*menu 主題配色 換主題色*/
    $("#changeMColor").change(function(){
        var a;
        switch(this.value){
            case "0":
                a = "";
                break;
            case "1":
                a = "css/backstage_red.css";
                break;
            case "2":
                a = "css/backstage_darkBluePurple.css";
                break;
            case "3":
                a = "css/backstage_darkBlueOrange.css";
                break;
            case "4":
                a = "css/backstage_pink.css";
                break;
            case "5":
                a = "css/backstage_green.css";
                break;
            case "6":
                a = "css/backstage_brown.css";
                break;
            case "7":
                a = "css/backstage_darkBlue.css";
                break;
            case "8":
                a = "css/backstage_P01_black_main.css";
                break;
            case "9":
                a = "css/backstage_P01_gray_main.css";
                break;
            case "10":
                a = "css/backstage_P01_green_main.css";
                break;
            case "11":
                a = "css/backstage_P01_orange_main.css";
                break;
            case "12":
                a = "css/backstage_P01_purple_main.css";
                break;
            case "13":
                a = "css/backstage_P01_red_main.css";
                break;
            case "14":
                a = "css/backstage_P02_B_blue_main.css";
                break;
            case "15":
                a = "css/backstage_P02_B_green_main.css";
                break;
            case "16":
                a = "css/backstage_P02_B_yellow_main.css";
                break;
            case "17":
                a = "css/backstage_P02_green_main.css";
                break;
            case "18":
                a = "css/backstage_P02_yellow_main.css";
                break;
            case "19":
                a = "css/backstage_P03_black_main.css";
                break;
            case "20":
                a = "css/backstage_P03_green_main.css";
                break;
            case "21":
                a = "css/backstage_P03_indigo_main.css";
                break;
            case "22":
                a = "css/backstage_P03_orange_main.css";
                break;
            case "23":
                a = "css/backstage_P03_pink_main.css";
                break;
            case "24":
                a = "css/backstage_P04_aqua_main.css";
                break;
            case "25":
                a = "css/backstage_P04_black_main.css";
                break;
            case "26":
                a = "css/backstage_P04_green_main.css";
                break;
            case "27":
                a = "css/backstage_P04_kelly_main.css";
                break;
            case "28":
                a = "css/backstage_P04_purple_main.css";
                break;
            case "29":
                a = "css/backstage_P04_red_main.css";
                break;
            case "30":
                a = "css/backstage_P05_black_main.css";
                break;
            case "31":
                a = "css/backstage_P05_brown_main.css";
                break;
            case "32":
                a = "css/backstage_P05_green_main.css";
                break;
            case "33":
                a = "css/backstage_P05_kelly_main.css";
                break;
            case "34":
                a = "css/backstage_P05_purple_main.css";
                break;
            case "35":
                a = "css/backstage_P05_red_main.css";
                break;
            case "36":
                a = "css/";
                break;
        }
        $("#mcolor").attr({href:a});
        $(".mbg").removeAttr("style").animate({opacity:1},1000);
        $(".rightBar").css("opacity",0).animate({opacity:1},1000);

    });
    /*menu 版型樣式 換版型*/
    $("#changeMain").change(function(){
        switch(this.value){
            case "0":
                document.location.href="backstage.htm";
                break;
            case "1":
                document.location.href="backstage_2.htm";
                break;
            case "2":
                document.location.href="backstage_3.htm";
                break;
            case "3":
                document.location.href="backstage_P01.htm";
                break;
            case "4":
                document.location.href="backstage_P02.htm";
                break;
            case "5":
                document.location.href="backstage_P03.htm";
                break;
            case "6":
                document.location.href="backstage_P04.htm";
                break;
            case "7":
                document.location.href="backstage_P05.htm";
                break;
            case "8":
                document.location.href="backstage_Web01.htm";
                break;
            case "9":
                document.location.href="backstage_Web02.htm";
                break;
            case "10":
                document.location.href="backstage_Web03.htm";
                break;
        }
    });
}); 
