let browserName
function launchBrowser(browserName){
    if(browserName=="chrome"){
        console.log("Chrome browser launched successfully")
    }else{
        console.log("Please enter an valid browser")
    }
}

launchBrowser("chrome")

let testType
function runTests(testType){
    switch (testType){
        case "sanity":
            console.log("Started executing the Sanity test");
            break;
        case "regression":
            console.log("Started executing the Regression test");
            break;
        default:
            console.log("Started executing the Smoke test");
            break;
    }
}
runTests("regression")
