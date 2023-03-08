import languageZH from '@/language/zh.js'
import languageEN from '@/language/en.js'
/*
* 获取url的参数
*/

export function getUrlParam(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

export function getLanguage() {
  const language = getUrlParam('language')
  if (language !== undefined && language !== null && language !== '' && language === 'en') {
    return languageEN
  } else {
    return languageZH
  }
}

export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

export function formatMemory1(memory, num = 2) {
  if (!memory) {
    return 'N/A'
  }
  var g = ''
  var pb = 1024 * 1024 * 1024 * 1024 * 1024
  var tb = 1024 * 1024 * 1024 * 1024
  var gb = 1024 * 1024 * 1024
  var mb = 1024 * 1024
  if ((memory / pb) > 1 && (memory / pb) < 1024) {
    g = (memory / pb).toFixed(num) + ' PiB'
  } else if ((memory / tb) > 1 && (memory / tb) < 1024) {
    g = (memory / tb).toFixed(num) + ' TiB'
  } else if ((memory / gb) > 1 && (memory / gb) < 1024) {
    g = (memory / gb).toFixed(num) + ' GiB'
  } else if ((memory / mb) > 1 && (memory / mb) < 1024) {
    g = (memory / mb).toFixed(num) + ' MiB'
  } else if ((memory / 1024) > 1 && (memory % 1024) < 1024) {
    g = (memory / 1024).toFixed(num) + ' kiB'
  } else {
    g = Number(memory).toFixed(num) + ' B'
  }
  return g
}

export function formatMemory(memory, num = 2) {
  if (!memory) {
    if (memory === 0) {
      return memory.toFixed(num) + ' B'
    }
    return 'N/A'
  }
  var g = ''
  var pb = 1024 * 1024 * 1024 * 1024 * 1024
  var tb = 1024 * 1024 * 1024 * 1024
  var gb = 1024 * 1024 * 1024
  var mb = 1024 * 1024
  if ((memory / pb) > 1 && (memory / pb) < 1024) {
    g = (memory / pb).toFixed(num) + ' PiB'
  } else if ((memory / tb) > 1 && (memory / tb) < 1024) {
    g = (memory / tb).toFixed(num) + ' TiB'
  } else if ((memory / gb) > 1 && (memory / gb) < 1024) {
    g = (memory / gb).toFixed(num) + ' GiB'
  } else if ((memory / mb) > 1 && (memory / mb) < 1024) {
    g = (memory / mb).toFixed(num) + ' MiB'
  } else if ((memory / 1024) > 1 && (memory % 1024) < 1024) {
    g = (memory / 1024).toFixed(num) + ' kiB'
  } else {
    g = Number(memory).toFixed(num) + ' B'
  }
  return g
}

export function getMemorymax(memory) {
  if (!memory) {
    if (memory === 0) {
      return '0'
    }
    return 'N/A'
  }
  var g = ''
  var dw = ''
  var pb = 1024 * 1024 * 1024 * 1024 * 1024
  var tb = 1024 * 1024 * 1024 * 1024
  var gb = 1024 * 1024 * 1024
  var mb = 1024 * 1024
  if ((memory / pb) > 1 && (memory / pb) < 1024) {
    g = (memory / pb).toFixed(2)
    dw = 'PiB'
    return ((Math.ceil(g) + (Math.ceil(g) / 10)).toFixed(2)) * pb
  } else if ((memory / tb) > 1 && (memory / tb) < 1024) {
    g = (memory / tb).toFixed(2)
    dw = 'TiB'
    return ((Math.ceil(g) + (Math.ceil(g) / 10)).toFixed(2)) * tb
  } else if ((memory / gb) > 1 && (memory / gb) < 1024) {
    g = (memory / gb).toFixed(2)
    dw = 'GiB'
    return ((Math.ceil(g) + (Math.ceil(g) / 10)).toFixed(2)) * gb
  } else if ((memory / mb) > 1 && (memory / mb) < 1024) {
    g = (memory / mb).toFixed(2)
    dw = 'MiB'
    return ((Math.ceil(g) + (Math.ceil(g) / 10)).toFixed(2)) * mb
  } else if ((memory / 1024) > 1 && (memory % 1024) < 1024) {
    g = (memory / 1024).toFixed(2)
    dw = 'KiB'
    return ((Math.ceil(g) + (Math.ceil(g) / 10)).toFixed(2)) * 1024
  } else {
    g = (memory).toFixed(2)
    dw = 'B'
    return (Math.ceil(g) + (Math.ceil(g) / 10)).toFixed(2)
  }
}

export function timediff(startTime, endTime) {
  let runTime = parseInt((endTime - startTime) / 1000)
  var year = Math.floor(runTime / 86400 / 365)
  runTime = runTime % (86400 * 365)
  var month = Math.floor(runTime / 86400 / 30)
  runTime = runTime % (86400 * 30)
  var day = Math.floor(runTime / 86400)
  runTime = runTime % 86400
  var hour = Math.floor(runTime / 3600)
  runTime = runTime % 3600
  var minute = Math.floor(runTime / 60)
  runTime = runTime % 60
  var second = runTime
  if (year === 0 && month === 0 && day === 0 && hour === 0) {
    return `${minute} 分`
  } else if (year === 0 && month === 0 && day === 0) {
    return `${hour} 小时${minute} 分`
  } else if (year === 0 && month === 0) {
    return `${day} 天${hour} 小时${minute} 分`
  } else if (year === 0) {
    return `${month} 个月${day} 天${hour} 小时${minute} 分`
  }
  return `${year} 年${month} 个月${day} 天${hour} 小时${minute} 分`
}

// 时间格式化
export function formatDateTime(dateStr, fmtStr) {
  const fmt = fmtStr || 'yyyy-MM-dd'
  const dateTime = dateStr ? new Date(dateStr) : new Date()
  const opt = {
    'y+': dateTime.getFullYear().toString(),
    'M+': (dateTime.getMonth() + 1).toString(),
    'd+': dateTime.getDate().toString(),
    'h+': dateTime.getHours().toString(),
    'm+': dateTime.getMinutes().toString(),
    's+': dateTime.getSeconds().toString(),
    'S+': dateTime.getMilliseconds().toString()
  }
  let ret
  let res = fmt
  Object.keys(opt).forEach((k) => {
    ret = new RegExp(`(${k})`).exec(fmt)
    if (ret) {
      res = res?.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'))
    }
  })
  return dateStr ? res : ''
}

/**
     * 计算 当前时间 和传入时间 间隔 几年几月几日, 并返回相应格式
     * @param val
     */
export function setCompareRegistrationTimeText(val, isDay = false) {
  if (!val) return ''
  const date = new Date(val) // 转换时间格式
  const year = date.getFullYear() // 取当年的年
  const month = date.getMonth() + 1 // 取当年的月(月份加一)
  const dd = date.getDate() // 取当年的日期
  const nowDate = new Date() // 取现在的时间
  const nowYear = nowDate.getFullYear() // 取现在的年
  const nowMonth = nowDate.getMonth() + 1 // 取现在的月(月份加一)
  const nowDd = nowDate.getDate() // 取现在的日期
  /**
       * 日期计算(结束 - 开始)
       * 1-1当差值为正，就相差多少天
       * 1-1-1例如: (2021/3/15 - 2022/4/18) ===== 18-15 > 0 日期相差3天
       * 1-2当差值为负，计算从开始时间的日期到结束时间的日期相差几天
       * 1-2-1例如：(2021/3/15 - 2022/4/10) ===== 10-15 < 0
       * 其实就是计算从3/15 到 4、10号中间过了多少天
       * 1-2-1-1：方法： 其实就是计算3/15 到 3/31 号过了多少天，再加上 4月过的10天
       */
  const restDd = nowDd - dd < 0 ? (lastDay(nowMonth - 1, year) - dd + nowDd) : nowDd - dd
  /**
       * 月份计算(结束 - 开始)
       * 1-1当差值为正，就相差多少月
       * 1-1-1例如: (2021/3/15 - 2022/4/18) ===== 4-3 > 0 月份相差1月
       * 1-2当差值为负，计算从开始时间的月份到结束时间的月份相差几天
       * 1-2-1例如：(2021/5/15 - 2022/4/10) ===== 4-5 < 0
       * 其实就是计算从5月到第二年4月过了多少月
       * 1-2-1-1：方法： 向年借一年为12月计算过了多少月
       */
  const restMonth = nowMonth - month < 0 || nowYear - year > 0  ? (12 + nowMonth) - month : nowMonth - month
  /**
       * 年份计算(结束 - 开始)
       * 直接限制结束比开始大，只有0/正数
       */
  const restYear = nowYear - year
  /**
       * 计算借位的问题
       */
  let resultMonth = restMonth
  let resultYear = restYear
  // 日期小说明借了月
  if (nowDd < dd) {
    resultMonth = (restMonth - 1) < 0
      ? (restMonth - 1) + 12
      : (restMonth - 1)
  }
  // 月份小借了年 或者 日期小，月份刚好一致，因为日期借了月份，导致月份减1，所以减年
  if (nowMonth < month || (nowDd < dd && nowMonth === month)) {
    resultYear = restYear - 1
  }

  const dateInterval = new Date().getTime() - date.getTime()

  // 计算小时数
  const hourLevel = dateInterval % (24 * 60 * 60 * 1000)
  const hours = Math.floor(hourLevel / (60 * 60 * 1000))
  // 计算分钟数
  const minutesLevel = hourLevel % (60 * 60 * 1000)
  const minutes = Math.floor(minutesLevel / (60 * 1000))

  let str = ''
  if (isDay) {
    if (resultYear > 0 && resultYear < 1) str = '去年'
    else if (resultYear > 1) str = resultYear + '年前'
    else if (resultMonth > 0 && resultMonth <= 1) str = '上个月'
    else if (resultMonth > 1 && resultMonth <= 12) str = resultMonth + '个月前'
    else if (restDd >= 1 && restDd < 2) str = '昨天'
    else if (restDd >= 2 && restDd < 3) str = '前天'
    else if (restDd >= 3) str = restDd + '天前'
    else if (hours > 0) str = hours + ' 小时前'
    else if (minutes > 0) str = minutes + '分钟前'
    else if (dateInterval < 60 * 1000) str = parseInt(dateInterval / 10000) * 10 + '秒前'
    else str = '-'
  } else {
    if (resultYear > 0) str = resultYear + ' 年 '
    if (resultMonth > 0) str = str + resultMonth + ' 个月 '
    if (restDd > 0) str = str + restDd + ' 天 '
    if (hours > 0) str = str + hours + ' 小时 '
    if (minutes > 0) str = str + minutes + ' 分钟'
  }
  return str
}
/**
   * 判断每年的每个月的最后一天是几号
   * @param mo-月份
   * @param year-年份
   * @returns {number}
   */
export function lastDay(mo, year) {
  if (mo === 4 || mo === 6 || mo === 9 || mo === 11) return 30
  // 2月
  else if (mo === 2) {
    if (isLeapYear(year)) {
      return 29
    } else {
      return 28
    }
  }
  // 大月
  return 31
}
/**
   * 判断是否是闰年
   * @param Year-年份
   * @returns {boolean}
   */
export function isLeapYear(Year) {
  return ((Year % 4) === 0) && ((Year % 100) !== 0) || ((Year % 400) === 0)
}

// 增加千分位
export function numFormatter(num) {
  let res = parseInt(num * 100) / 100
  if (num && num !== null) {
    res = num.toString().replace(/\d+/, (n) => {
      return n.replace(/(\d)(?=(\d{3})+$)/g, ($1) => {
        return $1 + ','
      })
    })
  }
  return res
}

// 获取原版中以分钟为单位的时间
export function formatMinutes(min) {
  const hours = parseInt(min / 60 * 10) / 10
  const day = parseInt(hours / 24 * 10) / 10
  const month = parseInt(day / 30 * 10) / 10
  const year = parseInt(day / 365 * 10) / 10
  if (hours < 1) return min + '分钟'
  else if (hours > 1 && hours < 24) return hours + '小时'
  else if (day > 1 && day < 30) return day + '天'
  else if (month > 1 && month < 12) return month + '个月'
  else if (year > 1) return year + '年'
  return '-'
}

/**
 * 格式化跳转分析页的参数
 * @param label
 * @returns {*}
 */
export function formatAnalysisTag(label) {
  let result = label.replaceAll('*', '**').replace(/^\//g, '*/')
    .replaceAll('_', '*_').replaceAll(' ', '_')
    .replace(/\(/g, '*C').replace(/\)/g, '*D')
    .replace(/\?/g, '*Q').replace(/,/g, '%2C')
    .replace(/=/g, '*E').replace(/\[/g, '%5B')
    .replace(/\]/g, '%5D').replaceAll('__', '*N__')
  if (/^[\u4e00-\u9fa5]/.test(result)) {
    result = '*' + result
  }
  return result
}

// 判断数组是否有数据
export function arrHasData(arr, showError) {
  const res = (Array.isArray(arr) && !!arr?.length)
  if (!Array.isArray(arr) && showError) console.error(`error：${arr} 非数组！`)
  return res
}
// 判断对象是否有数据
export function objHasData(obj, showError) {
  const res = (!!Object.keys(obj || {}).length && typeof obj === 'object')
  if (typeof obj !== 'object' && showError) console.error(`error：${obj} 非对象！`)
  return res
}
// 快速排序 （返回一个数组）
export function quickSort(arr, key = 'plugin') {
  if (arr.length <= 1) return arr
  let arr1 = []
  let arr2 = []
  for (var i = 1; i < arr.length; i++) {
    if (arr[i].s[key] < arr[0].s[key]) arr1.push(arr[i])
    else arr2.push(arr[i])
  }
  arr1 = quickSort(arr1, key)
  arr2 = quickSort(arr2, key)
  arr1.push(arr[0])
  return arr1.concat(arr2)
}

// 通用快速排序 （返回一个数组）
export function generalQuickSort(arr, key = 'plugin', sort = 'asc') {
  if (arr.length <= 1) return arr
  let arr1 = []
  let arr2 = []
  for (var i = 1; i < arr.length; i++) {
    let sortMode = arr[i][key] < arr[0][key]
    if (sort == 'desc') sortMode = arr[i][key] > arr[0][key]
    // 通过sort来决定顺序倒叙
    if (sortMode) arr1.push(arr[i])
    else arr2.push(arr[i])
  }
  arr1 = generalQuickSort(arr1, key, sort)
  arr2 = generalQuickSort(arr2, key, sort)
  arr1.push(arr[0])
  return arr1.concat(arr2)
}

// 快速聚类 (返回一个对象)
export function quickCluster(arr) {
  const obj = {}
  arr.forEach((item) => {
    obj[item.s.plugin] = obj[item.s.plugin]?.length ? obj[item.s.plugin] : []
    obj[item.s.plugin].push(item)
  })
  return obj
}

// 通用快速聚类 (返回一个对象)
export function generalQuickCluster(arr, key = 'plugin') {
  const obj = {}
  arr.forEach((item) => {
    obj[item[key]] = obj[item[key]]?.length ? obj[item[key]] : []
    obj[item[key]].push(item)
  })
  return obj
}

// 判断是不是数字
export function isNumberV(val) {
  var regPos = /^\d+(\.\d+)?$/ // 非负浮点数
  var regNeg =
    /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/ // 负浮点数
  if (regPos.test(val) || regNeg.test(val)) {
    return true
  } else {
    return false
  }
}
// 判断是不是数组
export function isArray(val) {
  return val instanceof Array
}

// 获取对象属性数量
export function getObjLength(obj) {
  if (!objHasData(obj)) return 0
  return Object.keys(obj).length
}
