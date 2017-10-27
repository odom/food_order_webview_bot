window.extAsyncInit = function() {
    var appId = document.getElementById("appId");;
    console.log(appId);
    MessengerExtensions.getContext( appId.getAttribute("value"),
        function success(thread_context){
            console.log(thread_context);
            var input = document.getElementById("psidName");
            input.setAttribute("value",thread_context.psid)
        },
        function error(err){
            var input = document.getElementById("psidName");
            input.setAttribute("value",err)
        }
    );
};