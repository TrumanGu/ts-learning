// 使用export 或者import会使文件拥有文件作用域
var file_module_foo  = 123
export default file_module_foo


// 此时文件中的全局作用域失效

let foo_in_file_module = 234

// 对于任何需要编译成 JavaScript 代码，我们强烈建议你放入文件模块里。