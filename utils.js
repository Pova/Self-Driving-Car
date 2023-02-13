
/**
 * Calculates the intersection point of two lives given a point on each line and it's angle in radians
 * @param {number} x0 x coordinate of first line
 * @param {number} y0 y coordinate of first line
 * @param {number} ang0 angle of first line in rads
 * @param {number} x1 x coordinate of second line
 * @param {number} y1 y coordinate of second line
 * @param {number} ang1 angle of second line in rads
 * @returns 
 */
function intersect(x0, y0, a0, x1, y1, a1) {

    console.log(a0, a1)

    // check if lines are parallel
    if (+(a0-a1 % 3.141).toFixed(2) === 0) throw new Error('Lines are parallel')
    
    // check for vertical and horizontal lines
    switch(true) {
        case ((a0 % 3.141).toFixed(2) == 1.57): // vertial at x0
            x = x0
            y = Math.round(Math.tan(a1) * (x0-x1) + y1)
            console.log('vertical line at x = ' + x0 + ' y = ' + y) 
            return {x, y}
        case ((a1 % 3.141).toFixed(2) == 1.57): // vertical at x1
            x = x1
            y = Math.round(Math.tan(a0) * (x1-x0) + y0)
            console.log('vertical line at x = ' + x1 + ' y = ' + y)
            return {x, y}
        case ((a0 % 3.141).toFixed(2) == 0): // horizontal at y0
            y = y0
            x = Math.round((y0-y1) / Math.tan(a1) + x1)
            console.log('horizontal line at y = ' + y0 + ' x = ' + x)
            return {x, y}
        case ((a1 % 3.141).toFixed(2) == 0): // horizontal at y1
            y = y1
            x = Math.round((y1-y0) / Math.tan(a0) + x0)
            console.log('horizontal line at y = ' + y1 + ' x = ' + x)
            return {x, y}
    }

    // let m0 = Math.tan(a0*toRad) // Line 0: y = m0 (x - x0) + y0
    // let m1 = Math.tan(a1*toRad) // Line 1: y = m1 (x - x1) + y1
    // let x = ((m0 * x0 - m1 * x1) - (y0 - y1)) / (m0 - m1)
    // return [x, m0 * (x - x0) + y0]
    return null
}


/**
 * Linear interpolation between two values
 * @param {number} a
 * @param {number} b
 * @param {number} t
 */ 
function lerp(a, b, t) {
    return a + (b - a) * t;
}


