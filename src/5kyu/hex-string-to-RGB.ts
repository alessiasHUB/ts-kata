/**
 * title: Convert A Hex String To RGB
 * date: 25/11/2022
 * link: https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/solutions/javascript?filter=me&sort=best_practice&invalids=false
 * ============================================================
 * task:
 * When working with color values it can sometimes be useful to 
 * extract the individual red, green, and blue (RGB) component 
 * values for a color. Implement a function that meets these 
 * requirements:Accepts a case-insensitive hexadecimal color 
 * string as its parameter (ex. "#FF9933" or "#ff9933")
 * Returns a Map<String, int> with the structure 
 * {r: 255, g: 153, b: 51} where r, g, and b range from 0 
 * through 255
 * Note: your implementation does not need to support the 
 * shorthand form of hexadecimal notation (ie "#FFF")
 * ============================================================
 * converts a hex string into rgb
 * @param hexString - the string to convert
 * @returns an object
 */

 function hexStringToRGB(hexString: string): object {
  const rgb = [
    '0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'
  ]
  const hex = [
    '0','1','2','3','4','5','6','7','8','9', 'A', 'B', 'C', 'D', 'E', 'F'
  ]
  const result = []
  let string = hexString.toUpperCase().split('')
  if (string[0] === '#'){
    string.shift()
  }
  for (let i=0; i<string.length-1; i+=2){
    let number = 
      Number(rgb[hex.indexOf(string[i])])*16 
      + Number(rgb[hex.indexOf(string[i+1])])
    result.push(number)
  }
  return {r: result[0], g: result[1], b: result[2]}
}

export default hexStringToRGB;
