import { f as F } from './model1';
import * as ALL from "./model1";
import "./model2";
// npm i @types/jquery -D
// 查询是否有 TS 插件
// https://www.typescriptlang.org/dt/search 
import $ from 'jquery';


F();

console.log(ALL);

$('.app').css('color', 'red');