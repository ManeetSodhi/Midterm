export function moneyCounter(nickels, dimes, quarters, loonies, toonies){
    //processing
    let worthN = nickels*0.05
    let worthD = dimes*0.1
    let worthQ = quarters*0.25
    let worthL = loonies
    let worthT = toonies*2

    let totalWorth = worthD + worthL + worthN + worthQ + worthT

    return (totalWorth)
}