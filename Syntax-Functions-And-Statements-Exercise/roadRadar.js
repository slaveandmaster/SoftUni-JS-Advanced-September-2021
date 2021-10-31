function roadRadar(speed, area) {
  let cityLimits = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  let speedCheker = (speed, area) => {
    const diff = speed - area;
    if (diff > 40) {
      console.log(
        `The speed is ${diff} km/h faster than the allowed speed of ${area} - reckless driving`
      );
    } else if (diff > 20) {
      console.log(
        `The speed is ${diff} km/h faster than the allowed speed of ${area} - excessive speeding`
      );
    } else if (diff > 0) {
      console.log(
        `The speed is ${diff} km/h faster than the allowed speed of ${area} - speeding`
      );
    } else {
      console.log(`Driving ${speed} km/h in a ${area} zone`);
    }
  };
  speedCheker(speed, cityLimits[area]);
}
roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
