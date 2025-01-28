// Angle Conversion
function convertAngle() {
  const angleValue = parseFloat(document.getElementById('angleValue').value);
  const angleFromUnit = document.getElementById('angleFromUnit').value;
  const angleToUnit = document.getElementById('angleToUnit').value;

  if (isNaN(angleValue)) {
    alert('Please enter a valid number.');
    return;
  }

  // Conversion factors
  const toDegrees = {
    degrees: 1,
    grads: 0.9,
    gons: 0.9,
  };

  const fromDegrees = {
    degrees: 1,
    grads: 1 / 0.9,
    gons: 1 / 0.9,
  };

  const valueInDegrees = angleValue * toDegrees[angleFromUnit];
  const result = valueInDegrees * fromDegrees[angleToUnit];

  document.getElementById('angleResult').value = result.toFixed(4);
}

// Distance Conversion
function convertDistance() {
  const distanceValue = parseFloat(document.getElementById('distanceValue').value);
  const distanceFromUnit = document.getElementById('distanceFromUnit').value;
  const distanceToUnit = document.getElementById('distanceToUnit').value;

  if (isNaN(distanceValue)) {
    alert('Please enter a valid number.');
    return;
  }

  // Conversion factors
  const conversionFactors = {
    feet: {
      meters: 0.3048,
      miles: 0.000189394,
    },
    meters: {
      feet: 3.28084,
      miles: 0.000621371,
    },
    miles: {
      feet: 5280,
      meters: 1609.34,
    },
  };

  const result = distanceValue * conversionFactors[distanceFromUnit][distanceToUnit];
  document.getElementById('distanceResult').value = result.toFixed(4);
}

// Trigonometric Functions
function calculateTrig() {
  const angle = parseFloat(document.getElementById('trigAngle').value);

  if (isNaN(angle)) {
    alert('Please enter a valid number.');
    return;
  }

  const radians = (angle * Math.PI) / 180; // Convert degrees to radians
  document.getElementById('sineResult').value = Math.sin(radians).toFixed(4);
  document.getElementById('cosineResult').value = Math.cos(radians).toFixed(4);
  document.getElementById('tangentResult').value = Math.tan(radians).toFixed(4);
}
