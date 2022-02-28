/**
 * 导入导出
 */
export let a = 1;
export let b = {
  num: 1,
  str: 'str'
};


export function f() {
  console.log('function f');
}

function g() {
  console.log('function g');
}
export { g as G };