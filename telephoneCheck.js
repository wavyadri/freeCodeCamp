function telephoneCheck(str) {
    // ^ matches start of str
    // (1\s?) matches "1" or "1 "
    // (1\s?)? matches if above optional (can exist once or not at all)
    // \( matches "("
    // \d{3} matches 3 digits from 0-9
    // \) matches ")"
    // | OR
    // \d{3} matches 3 digits from 0-9 without ()
    // [\s\-]? matches optional any char in the [] set: " " or "-"
    // \d{3} matches 3 digits from 0-9
    // [\s\-]? matches optional any char in the [] set: " " or "-"
    // \d{4} matches 4 digits from 0-9 at the end of the str
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
  }

// Return true if the passed string looks like a valid US phone number.