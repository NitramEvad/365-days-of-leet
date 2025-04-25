export function rotate90Cw (input: number[][]): number[][] {
  // convert cols to rows
  // reverse each row

  let direction = 'right';
  let angle = 90;
  let size = input.length;

  let rotated = Array.from({length: size}, () => Array(size).fill(0))

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      rotated[j][(size-1)-i] = input[i][j]
    }
  }
  return rotated

}
