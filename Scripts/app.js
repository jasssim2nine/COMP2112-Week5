//IIFE - Immediately Invoked Function Expression
//AKA - Self Executing Function

(function()
{
    function Start()
    {
            console.log("App started!!");
    }

    window.addEventListener("load",Start);

})();