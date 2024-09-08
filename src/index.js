export default {
  name: 'index',
  // 处理string两头空格
  trim: function (str) {
    return str.replace(/(^\s*)|(\s*$)/g, '')
  },

  // 去掉 string 的非字母和非数字，并转成大写
  upperCase: function (str) {
    return str.replace(/[^a-zA-Z0-9]/g, '').toUpperCase()
  },
}
