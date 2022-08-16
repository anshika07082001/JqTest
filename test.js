$(document).ready(function(){
    $arr = [{UniqueId:12,Name:"Danish",Email:"sha@gmail.com",Password:"dgsdfdsgd",City:"Lucknowe",Role:"Guest"},
    {UniqueId:12,Name:"Rahul",Email:"ddsa@gmail.com",Password:"dfgfgfdsgd",City:"Lucknow",Role:"Admin"},
    {UniqueId:12,Name:"Neha",Email:"rtyya@gmail.com",Password:"dmjhjhdsgd",City:"Kanpur",Role:"Guest"}]

    $("#btnSubmit").click(function(){
        $inpUser = $("#inputUser").val();
        $inpPwd = $("#inputPwd").val();
        for(i=0;i<$arr.length;i++){
            if($inpUser==$arr[i].Name && $inpPwd == $arr[i].Password){
                if($arr[i].Role=="Guest"){
                    $("#message").html("Welcome"+$arr[i].Name);
                }
                if($arr[i].Role=="Admin"){
                    $("#message").html("Welcome"+$arr[i].Name);
                    $populate();
                }
            }
        }
    })
    function $populate(){
        $text = "";
        $text ="<table><tr><th>Id</th><th>Name</th><th>Email</th><th>City</th><th>Action</th>";
        for(i=0;i<$arr.length;i++){
            $text += "<tr><td>"+$arr[i].UniqueId+"</td><td>"+$arr[i].Name+"</td><td>"+$arr[i].Email+"</td><td>"+$arr[i].City+"</td><td><button id='btnDelete'>Delete</button></tr>"
        }
            $("#table").html($text);
    }
    $("#table").on("click","#btnDelete",function(){
        $index = $(this).parent().parent().index();
        $arr.splice($index-1,1);
        $populate();
    })
})