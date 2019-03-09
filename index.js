// Code your solution in this file!
function distanceFromHqInBlocks(blk) {
    return Math.abs(blk - 42);
    
}
function distanceFromHqInFeet(endBlock) {
    return distanceFromHqInBlocks(endBlock) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    let diff = endBlock - startBlock;
    let dist = diff * 264;
    return Math.abs(dist);
}

function calculatesFarePrice(startBlock, destination) {
    
    let dist = distanceTravelledInFeet(startBlock, destination);
    let fare;
    if (dist <= 400) {
        fare = 0;
    }else if (dist  <= 2000) {
        dist -= 400;
        fare = dist * 0.02;
    }else if (dist > 2500){
        fare = "cannot travel that far";
    }else{
        fare = 25
    }
    return fare;

}