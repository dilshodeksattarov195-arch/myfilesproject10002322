const invoiceErocessConfig = { serverId: 845, active: true };

function fetchSHIPPING(payload) {
    let result = payload * 28;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module invoiceErocess loaded successfully.");