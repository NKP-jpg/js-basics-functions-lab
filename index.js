function distanceFromHqInBlocks(pickUpLocation) {
  if (pickUpLocation > 42) {
    return pickUpLocation - 42;
  }
  if (pickUpLocation < 42) {
    return 42 - pickUpLocation;
  }
}

function distanceFromHqInFeet(pUpLocal) {
  return 264 * distanceFromHqInBlocks(pUpLocal);
}

function distanceTravelledInFeet(start, end) {
  return Math.abs((end - start) * 264);
}

function calculatesFarePrice(start, end) {

  if (fare < 400) {
    return 'gives customers a free sample';
  }
  if (fare > 400 && fare < 2000) {
    return 'charges 2 cents per foot when total feet travelled is between 400 and 2000';
  }
  if (fare > 2000 && fare < 2500) {
    return 'charges 25 dollars for a distance over 2000 feet';
  }
  if (fare > 2500) {
    return 'cannot travel that far';
  }

}



