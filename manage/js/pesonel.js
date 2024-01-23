let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
   let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
   arrowParent.classList.toggle("showMenu");
    });
}
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
});

let paginationContainer = document.querySelector("#pageBtn")
let currentPage = 1
let rowcount = 4

function changePage(n){
    currentPage = n;
    searchAndShow();
}

function searchAndShow(){
    let inpName = document.getElementById('name').value;
    let contentt = document.getElementById('pageIne');
    $(document).ready(function(){
        $(contentt).empty();
        document.getElementById('result').innerHTML = ""
    });
    let str = "new";
    $.ajax({ 
        type: "POST", 
        url: "http:///109.125.131.251:9020/tel/list_phone",
        data:JSON.stringify({
            "name": inpName, 
            "adres":"", 
            "zfa":0, 
            "org":0, 
            "page":0
        }),
        headers: {
            'Content-Type': "application/json; charset=utf-8"
        },
        dataType: "json", 
        success: function (msg) { 
            if(msg.rowsAffected == 0){
                document.getElementById('result').innerHTML = "نتیجه ای یافت نشد..."
            }
            else{
                var p = msg.rowsAffected
                setpage(p)
                let endid = rowcount*currentPage
                for(let i=endid - rowcount;i<endid;i++){
                    if(msg.recordset[i].id != ""){
                        $(document).ready(function(){
                            $(contentt).append('<div class="boxes"><div class="boxes-info"><div class="boxes-prop"><p class="PERtitle">شماره شناسایی : </p><p class="PERsub" id="PERid"></p></div><div class="boxes-prop"><p class="PERtitle">نام و نام خانوادگی : </p><p class="PERsub" id="PERname"></p></div><div class="boxes-prop"><p class="PERtitle">شماره تماس : </p><p class="PERsub" id="PERmobile"></p></div></div><div class="boxes-btn"><button dir="ltr" class="Btn">ویرایش <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" /></svg>                                   </button><button dir="ltr" class="Btn">حذف <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" /></svg>                  </button></div></div>');
                            $('#PERid').html(msg.recordset[i].id)
                            $('#PERid').attr('id',str+msg.recordset[i].id)
                            $('#PERname').html(msg.recordset[i].name)
                            $('#PERname').attr('id',str+msg.recordset[i].id+'L')
                            $('#PERmobile').html(msg.recordset[i].mobile)
                            $('#PERmobile').attr('id',str+msg.recordset[i].id+'M')
                        });
                    }
                }
            }
        }, 
        error: function (XMLHttpRequest, textStatus, errorThrown) { 
            alert("اشکال در بانک اطلاعاتی"); 
        } 
    });
}

function setpage(usercount){
    $(document).ready(function(){
        $(paginationContainer).empty();
    });
    let pagecount = Math.ceil(usercount/rowcount);
    for(let i = 1; i<pagecount+1;i++){
        $(document).ready(function(){
            $(paginationContainer).append('<button id="mmd" class="pageBtn" onclick="changePage()"></button>')
            $('#mmd').html(i)
            $('#mmd').attr('onclick',"changePage("+ i +")")
            if(i === currentPage){
                $('#mmd').addClass('active')
            }
            $('#mmd').attr('id',"new"+i)
        });
    }
}