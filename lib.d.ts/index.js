/**
 * lib.d.ts 内置对象类型简单测试开始
 */
console.log(window // 可以通过指定 --noLib 的编译器命令行标志（或者在 tsconfig.json 中指定选项 noLib: true）从上下文中排除此文件
);
/**
 * lib.d.ts 内置对象类型简单测试结束
 */
/** 内置对象的简单修改开始 */
window.helloWorld = function () { return console.log('Hello World'); };
/** 内置对象的简单修改结束 */
/**lib.d.ts 编译相关开始 */
// 编译目标对 lib.d.ts 是有影响的。例如
var cmd = "tsc --target es5 --lib dom,es6";
// --target 选项为 es5 时，会导入 es5, dom, scripthost。
// --target 选项为 es6 时，会导入 es6, dom, scripthost dom.iterable, 
/**lib.d.ts 编译相关结束 */ 
