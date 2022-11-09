/**
 * title: Circle packing
 * date: 03/11/2022
 * link: -
 * ============================================================
 * task:
 * Write a function calculatePackedCircles, which creates and 
 * returns an array of CircleData objects which, when 
 * visualised, do not overlap each other.
 * ============================================================
 * Adds together two numbers
 * @param a - the first number to add
 * @param b - the second number to add
 * @returns the total

 function calculatePackedCircles(): CircleData[]

 VALIDATED_CIRCLES = empty array of CircleData objects
 
 repeat 1000 times
 
     CANDIDATE = generate a CircleData object with a random position and radius
 
     if CANDIDATE does not overlap* with any element of VALIDATED_CIRCLES
 
         add CANDIDATE to VALIDATED_CIRCLES
 
     else
 
         do nothing (we will not use this candidate)
 
 return VALIDATED_CIRCLES

calculatePackedCircles()
