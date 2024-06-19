#!/usr/bin/node

const { dict } = require('./101-data.js');

// Initialize an empty object to store the new dictionary
const occurrencesById = {};

// Iterate through the original dictionary
for (const userId in dict) {
  const occurrences = dict[userId];

  // If the occurrences count is not already a key in the new dictionary, create it
  if (!occurrencesById[occurrences]) {
    occurrencesById[occurrences] = [];
  }

  // Add the user ID to the corresponding occurrences key
  occurrencesById[occurrences].push(userId);
}

// Print the new dictionary
console.log(occurrencesById);
