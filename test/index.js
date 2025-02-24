function diamond(num) {
  // First Half (Upper part)
  for (let i = 0; i < num; i++) {
    let output = "";

    // Leading spaces
    for (let j = num - i; j > 0; j--) {
      output += " ";
    }

    // First star
    output += "*";

    // Middle spaces
    for (let k = 1; k < 2 * i; k++) {
      output += " ";
    }

    // Second star (only if not first row)
    if (i != 0) {
      output += "*";
    }

    console.log(output);
  }

  // Second Half (Lower part)
  for (let i = 1; i < num; i++) {
    let output = "";

    // Leading spaces
    for (let j = 0; j <= i; j++) {
      output += " ";
    }

    // First star
    output += "*";

    // Middle spaces
    for (let j = 2 * (num - i) - 3; j > 0; j--) {
      output += " ";
    }

    // Second star (only if not last row)
    if (i != num - 1) {
      output += "*";
    }

    console.log(output);
  }
}

// Test with num = 7
diamond(7);
//