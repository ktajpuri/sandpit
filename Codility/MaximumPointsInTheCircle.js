/*
There are N given points (numbered from 0 to N-1) on a plane. The K-th point is located at coordinates (X[K], Y[K]) and its 
tag is S[K]. We want to draw a circle centered on coordinates (0, 0). The circle should not contain two points with the same tag. 
What is the maximum number of points that can lie inside the circle?

Write a function:

function solution(S, X, Y);

that, given a string S of length N and two arrays X, Y consisting of N integers each, returns the maximum number of 
points inside the circle. The circle may contain only points with distinct tags, and is centered on coordinates (0, 0). 
Points that are on the border of the circle are included within it.

Examples:

1. Given S = "ABDCA", X = [2, -1, -4, -3, 3] and Y = [2, -2, 4, 1, -3], the function should return 3. There are three points that 
can be included in the circle: ("A", 2, 2), ("B", -1, -2), ("C", -3, 1). The next point ("A", 3, -3) has the same tag as ("A", 2, 2), 
so it cannot be included.

https://drive.google.com/file/d/16ZxQ722e0blRabC8a_DTkbzx2vhhkZ5S/view?usp=sharing


2. Given S = "ABB", X = [1, -2, -2] and Y = [1, -2, 2], the function should return 1. There are two points that cannot be included 
together: ("B", -2, -2) and ("B", -2, 2). They both have the tag "B" and the same distance from coordinates (0, 0).
https://drive.google.com/file/d/1opoXzc85YKhRPhkT7lsDZWp9biEdsMYC/view?usp=sharing

3. Given S = "CCD", X = [1, -1, 2] and Y = [1, -1, -2], the function should return 0. The points with tag "C" have the same 
distance from coordinates (0, 0).
https://drive.google.com/file/d/1OXGgDcS1pQa7lYx2qz9ZWVGxo5oqjNWr/view?usp=sharing

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
string S consists only of uppercase letters (A−Z);
string S and arrays X and Y have the same length N;
each element of arrays X, Y is an integer within the range [−1,000,000,000..1,000,000,000];
given points are pairwise distinct.
Copyright 2009–2020 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/