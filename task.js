// Not to brag, but I recently became the nexus of the Codewars universe! My honor and my rank were the same number. I cried a little.

// Complete the method that takes a hash/object/directory/association list of users, and find the nexus: the user whose rank is the closest is equal to his honor. Return the rank of this user. For each user, the key is the rank and the value is the honor.

// If nobody has an exact rank/honor match, return the rank of the user who comes closest. If there are several users who come closest, return the one with the lowest rank (numeric value). The hash will not necessarily contain consecutive rank numbers; return the best match from the ranks provided.

// Example
//          rank    honor
// users = {  1  =>  93,
//           10  =>  55,
//           15  =>  30,
//           20  =>  19,    <--- nexus
//           23  =>  11,
//           30  =>   2 }

function nexus(users) {
  const usersArr = Object.keys(users).sort((a, b) => {
    let diff = Math.abs(a - users[a]) - Math.abs(b - users[b]);
    if (diff === 0) {
      diff = a - b;
    }
    return diff;
  });

  return parseInt(usersArr[0], 10);
}
