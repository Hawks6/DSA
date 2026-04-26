const fs = require('fs');

const problemData = {
  "https://leetcode.com/problems/contains-duplicate/": "Given an integer array, return true if any value appears at least twice in the array, and return false if every element is distinct.",
  "https://leetcode.com/problems/missing-number/": "Given an array containing n distinct numbers in the range 0 to n, return the only number in that range that is missing from the array.",
  "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/": "Given an array of integers where the values are in the range 1 to n, return an array of all the integers in that range that do not appear in the input array.",
  "https://leetcode.com/problems/two-sum/": "Given an array of integers and a target integer, return the indices of the two numbers such that they add up to the target.",
  "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/": "For each number in a given array, find out how many numbers in the array are smaller than it and return the results in an array.",
  "https://leetcode.com/problems/minimum-time-visiting-all-points/": "Given a list of points on a 2D plane, return the minimum time in seconds required to visit all points in the exact order they are given (moving vertically, horizontally, or diagonally takes 1 second).",
  "https://leetcode.com/problems/spiral-matrix/": "Given an m x n matrix, return all elements of the matrix in a spiral order.",
  "https://leetcode.com/problems/number-of-islands/": "Given a 2D binary grid representing a map of ones (land) and zeros (water), return the total number of islands (land connected horizontally or vertically).",
  "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/": "Given an array of prices, maximize your profit by choosing a single day to buy one stock and a different day in the future to sell it.",
  "https://leetcode.com/problems/squares-of-a-sorted-array/": "Given an integer array sorted in non-decreasing order, return a new array containing the squares of each number, also sorted in non-decreasing order.",
  "https://leetcode.com/problems/3sum/": "Given an integer array, return all the unique triplets (i, j, k) such that the sum of the three numbers equals zero.",
  "https://leetcode.com/problems/longest-mountain-in-array/": "Return the length of the longest subarray that forms a \"mountain\" (a sequence of at least 3 elements that strictly increases to a peak and then strictly decreases).",
  "https://leetcode.com/problems/contains-duplicate-ii/": "Return true if there are two distinct indices in the array such that their values are equal and the absolute difference between their indices is less than or equal to k.",
  "https://leetcode.com/problems/minimum-absolute-difference/": "Find all unique pairs of elements in an array that have the minimum absolute difference, returning the list of pairs in ascending order.",
  "https://leetcode.com/problems/minimum-size-subarray-sum/": "Given an array of positive integers and a target integer, return the minimal length of a subarray whose sum is greater than or equal to the target.",
  "https://leetcode.com/problems/single-number/": "Given a non-empty array of integers where every element appears twice except for one, find and return that single number.",
  "https://leetcode.com/problems/coin-change/": "Given an array of coins of different denominations and an integer target amount, return the fewest number of coins needed to make up that amount.",
  "https://leetcode.com/problems/climbing-stairs/": "If it takes a certain number of steps to reach the top of a staircase, and you can either climb 1 or 2 steps at a time, determine how many distinct ways you can reach the top.",
  "https://leetcode.com/problems/maximum-subarray/": "Find the contiguous subarray (containing at least one number) with the largest sum and return its sum.",
  "https://leetcode.com/problems/counting-bits/": "For numbers 0 to n, find the number of 1s inside their binary representations.",
  "https://leetcode.com/problems/range-sum-query-immutable/": "Given an array, handle queries that ask for the sum of the elements between a given left and right index.",
  "https://leetcode.com/problems/letter-case-permutation/": "Given a string, transform the casing of every letter individually to create all possible string permutations.",
  "https://leetcode.com/problems/subsets/": "Return all possible unique subsets of a given array of numbers.",
  "https://leetcode.com/problems/combinations/": "Given two integers n and k, return all possible combinations of k numbers chosen from the range 1 to n.",
  "https://leetcode.com/problems/permutations/": "Given an array of distinct integers, return all possible permutations of those integers in any order.",
  "https://leetcode.com/problems/middle-of-the-linked-list/": "Given the head of a singly linked list, return the middle node of the linked list.",
  "https://leetcode.com/problems/linked-list-cycle/": "Determine if a given linked list has a cycle in it (a node that can be reached again by continuously following the next pointer).",
  "https://leetcode.com/problems/reverse-linked-list/": "Reverse a singly linked list from end to end.",
  "https://leetcode.com/problems/remove-linked-list-elements/": "Remove all nodes in a linked list that have a specific target value and return the new head.",
  "https://leetcode.com/problems/reverse-linked-list-ii/": "Reverse a single specific portion of a linked list, dictated by a given left and right index.",
  "https://leetcode.com/problems/palindrome-linked-list/": "Determine whether a given singly linked list reads the same forwards and backwards.",
  "https://leetcode.com/problems/merge-two-sorted-lists/": "Given the heads of two sorted linked lists, splice their nodes together to merge them into one newly sorted linked list.",
  "https://leetcode.com/problems/min-stack/": "Design a stack datastructure that supports standard push, pop, and top operations while also retrieving the minimum element in constant time.",
  "https://leetcode.com/problems/valid-parentheses/": "Given a string of brackets, determine if it is valid by checking if opening brackets are closed by the same type of brackets in the correct order.",
  "https://leetcode.com/problems/evaluate-reverse-polish-notation/": "Given an array of strings representing an arithmetic expression in reverse polish notation (where operators follow their operands), evaluate the expression and return the integer result.",
  "https://www.geeksforgeeks.org/sort-a-stack-using-recursion/": "Sort a stack of integers into ascending or descending order using only an additional temporary stack.",
  "https://leetcode.com/problems/implement-stack-using-queues/": "Implement a last-in-first-out (LIFO) stack using only the standard operations of up to two queues.",
  "https://leetcode.com/problems/time-needed-to-buy-tickets/": "Given a queue of people wanting to buy a certain number of tickets (processing 1 ticket per second before the person returns to the back of the queue), return the total time it takes for the person at index k to finish buying their tickets.",
  "https://www.geeksforgeeks.org/reversing-the-first-k-elements-of-a-queue/": "Reverse the first k elements of a given queue using a stack.",
  "https://leetcode.com/problems/average-of-levels-in-binary-tree/": "Return the average value of the nodes on each depth level of a binary tree in the form of an array.",
  "https://leetcode.com/problems/minimum-depth-of-binary-tree/": "Find the minimum depth of a binary tree by locating the shortest path to the first leaf node.",
  "https://leetcode.com/problems/maximum-depth-of-binary-tree/": "Find the maximum depth by exploring the longest path to a leaf node.",
  "https://www.geeksforgeeks.org/find-maximum-or-minimum-in-binary-tree/": "Traverse an unordered binary tree to track and return the absolute maximum and minimum node values.",
  "https://leetcode.com/problems/binary-tree-level-order-traversal/": "Perform a breadth-first search and return each level of the tree in a separate array.",
  "https://leetcode.com/problems/same-tree/": "Given the root nodes of two different trees, check if they are entirely identical in structure and node values.",
  "https://leetcode.com/problems/path-sum/": "Check if the tree has a root-to-leaf path where adding up all the node values along the path equals a specific target integer.",
  "https://leetcode.com/problems/diameter-of-binary-tree/": "Find the longest possible path between any two nodes in a binary tree.",
  "https://leetcode.com/problems/invert-binary-tree/": "Invert a binary tree by swapping the left and right children of every single node.",
  "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/": "Find the lowest node in a standard binary tree that has two specific given nodes as descendants.",
  "https://leetcode.com/problems/search-in-a-binary-search-tree/": "Use the strict less-than/greater-than property of a BST to traverse the tree and find a specific node.",
  "https://leetcode.com/problems/insert-into-a-binary-search-tree/": "Find the correct leaf position for a new value and insert it while maintaining the binary search tree properties.",
  "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/": "Convert an array sorted in ascending order into a height-balanced binary search tree.",
  "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/": "Determine if there are two elements in the BST that sum up to a given target k.",
  "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/": "Use the ordered properties of a BST to easily find the lowest common parent of two given nodes.",
  "https://leetcode.com/problems/minimum-absolute-difference-in-bst/": "Return the minimum absolute difference between any two nodes in the tree.",
  "https://leetcode.com/problems/balance-a-binary-search-tree/": "Take an unbalanced BST and return a perfectly height-balanced version of it.",
  "https://leetcode.com/problems/delete-node-in-a-bst/": "Search for a node, evaluate its children (0, 1, or 2 children), and delete it while keeping the BST properties intact.",
  "https://leetcode.com/problems/kth-smallest-element-in-a-bst/": "Find and return the value of the kth smallest node in the tree.",
  "https://leetcode.com/problems/kth-largest-element-in-an-array/": "Use a heap to efficiently find the kth largest element in an unordered array without fully sorting it.",
  "https://leetcode.com/problems/k-closest-points-to-origin/": "Given an array of points coordinates on a graph, return the k points that are closest to the origin [0,0].",
  "https://leetcode.com/problems/top-k-frequent-elements/": "Return the k elements that appear the most frequently in a given array.",
  "https://leetcode.com/problems/task-scheduler/": "Given a list of CPU tasks and an integer representing cooling/waiting time between identical tasks, find the minimum interval time required to execute all of them.",
  "https://leetcode.com/problems/clone-graph/": "Given a node in a connected, undirected graph, return a complete deep copy of the entire graph.",
  "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/": "Implement standard algorithms to find the largest node, detect a cycle within the graph, and easily count the total number of edges.",
  "https://leetcode.com/problems/cheapest-flights-within-k-stops/": "Given an array of flights (from, to, and price), a source, a destination, and a max number of allowed stops k, find the cheapest path possible.",
  "https://leetcode.com/problems/course-schedule/": "Given a total number of courses and a list of prerequisites, determine if it's possible to complete all courses by checking the graph for circular dependencies."
};

let curriculum = JSON.parse(fs.readFileSync('curriculum.json', 'utf8'));
let totalUpdated = 0;

for (let day of curriculum) {
  for (let q of day.practiceQuestions) {
    if (problemData[q.url]) {
      q.hint = problemData[q.url];
      totalUpdated++;
    }
  }
}

fs.writeFileSync('curriculum.json', JSON.stringify(curriculum, null, 2), 'utf8');
console.log(`Updated hints for ${totalUpdated} questions to use problem descriptions.`);
