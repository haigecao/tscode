/**
 * 命名空间
 */

namespace Shape {
  export function square(x: number): number {
    return x * x;
  }
}


console.log('Shape.square', Shape.square(12));

import square = Shape.square;
console.log('inner square ', square(12));
