function factorialize(num) {
    for (var product = 1; num > 0; num--) {
      product = product * num; // product *= num
    }
    return product;
  }