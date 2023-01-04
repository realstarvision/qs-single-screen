import * as echarts from 'echarts'

// AI沉降风险预测折线图
export function subsidenceRiskPredictionOption() {
  let Line = ["南区块", "西南区块", "集镇区块", "老街区块"];

  return {
    color: ['#0170D2', '#FFD141', '#00E6F9', '#F9965E'],
    legend: {
      type: "scroll",
      right: "3%",
      top: 10,
      data: Line,
      itemGap: 12,
      itemWidth: 6,
      itemHeight: 6,
      textStyle: {
        color: "#C3C7C7",
        fontSize: '0.45rem',
      },
      icon: "circle"
    },
    grid: {
      left: 35,
      top: "20%",
      bottom: 20,
      right: "5%",
    },
    xAxis: {
      type: 'category',
      data: ['', '2022/04/01', '', '2022/10/01', '', '2023/04/01', '', '2023/10/01', ''],
      boundaryGap: false,
      // axisLine: { onZero: false },
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: "#fffff", // x轴颜色
          fontSize: '0.5rem',
          overflow: 'break'
        },
        interval: 0,
      },
    },
    yAxis: {
      type: 'value',
      // position: "left",
      nameTextStyle: {
        color: "#00FFFF",
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: '#535353',

        }
      },
      axisLabel: {
        color: '#ffffff',
        fontSize: '0.5rem',
        formatter: function (value) {
          let texts = value;
          if (texts.length > 5) { // 具体多少字就看自己了
            texts = texts.substr(0, 5) + '...';
          }
          return texts;
        }
      }
    },
    series: [
      {
        name: "南区块",
        data: [150, 230, 224, 218, "", "", ""],
        type: 'line',
        symbol: 'none',
        lineStyle: {
          color: '#0170D2'
        }
      },
      {
        name: "南区块",
        data: ['', '', '', 218, 135, 147, 260, 260],
        type: 'line',
        symbol: 'none',
        lineStyle: {
          type: 'dotted',
          color: '#0170D2'
        },
      },
      {
        name: "西南区块",
        data: [150, 230, 224, 218, "", "", ""],
        type: 'line',
        symbol: 'none',
        lineStyle: {
          color: '#FFD141'
        }

      },
      {
        name: "西南区块",
        data: ['', '', '', 218, 135, 147, 260, 260],
        type: 'line',
        symbol: 'none',
        lineStyle: {
          type: 'dotted',
          color: '#FFD141'
        },
      },
      {
        name: "集镇区块",
        data: [150, 230, 224, 218, "", "", ""],
        type: 'line',
        symbol: 'none',
        lineStyle: {
          color: '#00E6F9'
        }
      },
      {
        name: "集镇区块",
        data: ['', '', '', 218, 135, 147, 260, 260],
        type: 'line',
        symbol: 'none',
        lineStyle: {
          type: 'dotted',
          color: '#00E6F9'
        },
      },
      {
        name: "老街区块",
        data: [150, 230, 224, 218, "", "", ""],
        type: 'line',
        symbol: 'none',
        lineStyle: {
          color: '#F9965E'
        }
      },
      {
        name: "老街区块",
        data: ['', '', '', 218, 135, 147, 260, 260],
        type: 'line',
        symbol: 'none',
        lineStyle: {
          type: 'dotted',
          color: '#F9965E'
        },
      },
    ]
  }
}


// 渐变折线图
export function linearGradientOption({
  line, xAxisData, list, grid = {
    left: 35,
    top: "15%",
    bottom: 20,
    right: "3%",
  },
  lineStyle = ['#0170D2', '#FFD141', '#00E6F9', '#F9965E'],
  color = ['1, 112, 210', '255, 209, 65', '0, 230, 249', '249, 150, 94'],
  unit = ''
}) {

  // 颜色
  // let color = ['1, 112, 210', '255, 209, 65', '0, 230, 249', '249, 150, 94']
  // let lineStyle = ['#0170D2', '#FFD141', '#00E6F9', '#F9965E']

  // 折线图块的内容
  function seriesItem(name, data, lineStyle, color) {
    return {
      name: name,
      data: data,
      type: 'line',
      symbol: 'none',
      itemStyle: {
        normal: {
          lineStyle: {
            color: lineStyle,
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: `rgba(${color},0)`,
              },
              {
                offset: 1,
                color: `rgba(${color},0.9)`,
              },
            ]),
          },
        },
      },
    }
  }

  // 配置
  let option = {
    color: lineStyle,
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0,0.8)',
      borderColor: 'rgba(0, 0, 0,0.8)',
      borderWidth: 0,
      position: function (point, params, dom, rect, size) {
        // 固定在顶部
        console.log(point)
        return [point[0] - 80, '30%'];
      },
      axisPointer: {
        type: "shadow",
        textStyle: {
          color: "#fff",
        },
      },
      textStyle: {
        color: '#fff',
        fontSize: 9
      },
      // formatter: function (params) {
      //   console.log(params)
      //   let axisValueLabel = params[0].axisValueLabel
      //   let data = `${axisValueLabel}<br />`
      //   params.map(item => {
      //     data += `${item.marker} ${item.seriesName}   ${item.value}<br />`
      //   })
      //   return data
      // }
    },
    legend: {
      type: "scroll",
      right: "3%",
      top: '3%',
      data: line,
      itemGap: 10,
      itemWidth: 5,
      itemHeight: 5,
      textStyle: {
        color: "#C3C7C7",
        fontSize: '0.45rem',
      },
      icon: "circle",
      // 禁止点击
      selectedMode: true
    },
    grid: grid,
    xAxis: {
      type: 'category',
      data: xAxisData || [],
      boundaryGap: false,
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: "#fff", // x轴颜色
          fontSize: '0.5rem',
        },
      },
    },
    yAxis: {
      type: 'value',
      position: "left",
      nameTextStyle: {
        color: "#00FFFF",
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: '#535353',
        }
      },
      axisLabel: {
        color: '#fff',
        fontSize: '0.5rem',
      }
    },
    series: []
  }

  // 添加内容
  list.forEach((item, index) => {
    option.series.push(seriesItem(item.name, item.data, lineStyle[index], color[index]))
  })

  return option
}


// 双折线图
export function doubleLinearOption() {

  // 颜色
  let color = ['1, 112, 210', '255, 209, 65', '0, 230, 249', '249, 150, 94']
  let lineStyle = ['#0170D2', '#FFD141', '#00E6F9', '#F9965E']

  // 折线图块的内容
  function Item(name, data, lineStyle, color, axisIndex) {
    return {
      name: name,
      data: data,
      type: 'line',
      symbol: 'none',
      xAxisIndex: axisIndex,
      yAxisIndex: axisIndex,
      itemStyle: {
        normal: {
          lineStyle: {
            color: lineStyle,
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: `rgba(${color},0)`,
              },
              {
                offset: 1,
                color: `rgba(${color},0.9)`,
              },
            ]),
          },
        },
      },
    }
  }

  // 配置
  let option = {
    color: ['#0170D2', '#FFD141', '#00E6F9', '#F9965E'],
    legend: [
      {
        type: "scroll",
        right: "3%",
        top: 10,
        data: ['生活垃圾', '厨余垃圾', '可回收垃圾'],
        itemGap: 10,
        itemWidth: 6,
        itemHeight: 6,
        textStyle: {
          color: "#C3C7C7",
          fontSize: '0.45rem',
        },
        icon: "circle"
      }
    ],
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0,0.8)',
      borderColor: 'rgba(0, 0, 0,0.8)',
      borderWidth: 0,
      position: 'bottom',
      axisPointer: {
        type: "shadow",
        textStyle: {
          color: "#fff",
        },
      },
      textStyle: {
        color: '#fff',
        fontSize: 9
      }
    },
    grid: [{
      show: false,
      left: "3%",
      top: "32%",
      containLabel: true,
      width: "45%",
      bottom: 5
    }, {
      show: false,
      left: "53%",
      top: "32%",
      containLabel: true,
      width: "45%",
      bottom: 5
    }],
    xAxis: [{
      gridIndex: 0,
      type: 'category',
      data: ['9/01', '9/02', '9/03', '9/04', '9/05', '9/06', '9/07      '],
      boundaryGap: false,
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: "#fff", // x轴颜色
          fontSize: '0.45rem',
        },
      },
    }, {
      gridIndex: 1,
      type: 'category',
      data: ['2019', '2020', '2021', '2022      '],
      boundaryGap: false,
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: "#fff", // x轴颜色
          fontSize: '0.45rem',
        },
      },
    }],
    yAxis: [
      {
        gridIndex: 0,
        type: 'value',
        nameTextStyle: {
          color: "#00FFFF",
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: '#535353',
          }
        },
        axisLabel: {
          color: '#fff',
          fontSize: '0.5rem',
        }
      }, {
        gridIndex: 1,
        type: 'value',
        nameTextStyle: {
          color: "#00FFFF",
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: '#535353',
          }
        },
        axisLabel: {
          color: '#fff',
          fontSize: '0.5rem',
        }
      }
    ],
    series: []
  }

  let list = [
    {
      name: '生活垃圾',
      data: [10, 20, 30, 40, 30, 20, 35],
    },
    {
      name: '厨余垃圾',
      data: [11, 16, 28, 35, 22, 9, 26],
    },
    {
      name: '可回收垃圾',
      data: [33, 14, 16, 25, 27, 19, 34],
    }
  ]

  let list1 = [
    {
      name: '生活垃圾',
      data: [55, 2, 30, 40, 60, 20],
    },
    {
      name: '厨余垃圾',
      data: [13, 19, 23, 30, 18, 80],
    },
    {
      name: '可回收垃圾',
      data: [11, 56, 74, 36, 55, 15],
    }
  ]
  // 添加内容
  list.forEach((item, index) => {
    option.series.push(Item(item.name, item.data, lineStyle[index], color[index], 0))
  })
  list1.forEach((item, index) => {
    option.series.push(Item(item.name, item.data, lineStyle[index], color[index], 1))
  })

  return option
}


// 圆环
export function circularRingOption(title) {
  return {
    color: ['#0170D2', '#FFD141', '#00E6F9', '#F9965E'],
    title: {
      text: title,
      subtext: '面积(km²)',
      left: 'center',
      top: 'center',
      textStyle: {
        color: '#4987FF',
        fontSize: '0.8rem',
      },
      subtextStyle: {
        color: '#ffffff',
        fontSize: '0.5rem',
      },
      textVerticalAlign: 'middle',
      itemGap: 1
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0, 0, 0,0.8)',
      borderColor: 'rgba(0, 0, 0,0.8)',
      borderWidth: 0,
      position: 'bottom',
      axisPointer: {
        type: "shadow",
        textStyle: {
          color: "#fff",
        },
      },
      textStyle: {
        color: '#fff',
        fontSize: 10
      }
    },
    legend: {
      type: "scroll",
      right: "3%",
      top: 0,
      data: ['道路', '桥梁', '其它'],
      itemGap: 10,
      itemWidth: 5,
      itemHeight: 5,
      textStyle: {
        color: "#C3C7C7",
        fontSize: '0.45rem',
      },
      icon: "circle",
      // 禁止点击
      selectedMode: true
    },
    series: [
      {
        type: 'pie',
        radius: ['38%', '47%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: false,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 5, name: '道路' },
          { value: 5, name: '桥梁' },
          { value: 6.8, name: '其它' },
        ]
      }
    ]
  }
}

// 双柱状图
export function doubleBarOption() {
  return {
    // backgroundColor: "#091C3D",
    // tooltip: {
    //   //提示框组件
    //   trigger: "axis",
    //   formatter: "{b}<br />{a0}: {c0}<br />{a1}: {c1}",
    //   axisPointer: {
    //     type: "shadow",
    //     label: {
    //       backgroundColor: "#6a7985",
    //     },
    //   },
    //   textStyle: {
    //     color: "#fff",
    //     fontStyle: "normal",
    //     fontFamily: "微软雅黑",
    //     fontSize: 12,
    //   },
    // },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0, 0, 0,0.8)',
      borderColor: 'rgba(0, 0, 0,0.8)',
      borderWidth: 0,
      axisPointer: {
        type: "shadow",
        textStyle: {
          color: "#fff",
        },
      },
      textStyle: {
        color: '#fff',
        fontSize: 10
      }
    },
    grid: {
      left: "5%",
      right: "10%",
      bottom: "5%",
      top: "44%",
      //	padding:'0 0 10 0',
      containLabel: true,
    },
    legend: {
      //图例组件，颜色和名字
      right: "0%",
      top: "33%",
      itemGap: 16,
      itemWidth: 6,
      itemHeight: 6,
      icon: "circle",
      data: [
        {
          name: "待处理事件",
          //icon:'image://../wwwroot/js/url2.png', //路径
          itemStyle: {
            color: 'rgba(255, 188, 12, 1)'
          },
          textStyle: {
            fontSize: '0.45rem',
          },
        },
        {
          name: "已处理事件",
          itemStyle: {
            color: 'rgba(1, 112, 210, 1)'
          },
          textStyle: {
            fontSize: '0.45rem',
          },
        },
      ],
      textStyle: {
        color: "#a8aab0",
        fontStyle: "normal",
        fontFamily: "微软雅黑",
        fontSize: 12,
      },
    },
    xAxis: [
      {
        type: "value",
        boundaryGap: true,//坐标轴两边留白
        data: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月",
        ],
        axisLabel: {
          show: false,
          //坐标轴刻度标签的相关设置。
          //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
          //	margin:15,
          textStyle: {
            color: "#078ceb",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: '0.45rem',
          },
          rotate: 50,
        },
        axisTick: {
          //坐标轴刻度相关设置。
          show: false,
        },
        axisLine: {
          //坐标轴轴线相关设置
          lineStyle: {
            color: "#fff",
            opacity: 0.2,
          },
        },
        splitLine: {
          //坐标轴在 grid 区域中的分隔线。
          show: false,
        },
      },
    ],
    yAxis: [
      {
        data: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月",
        ],
        type: "category",
        splitNumber: 5,
        axisLabel: {

          textStyle: {
            color: "#a8aab0",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: '0.6rem',
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: ["#fff"],
            opacity: 0.06,
          },
        },
      },
    ],
    dataZoom: [
      {
        type: 'slider',
        show: false,
        yAxisIndex: [0],
        left: '93%',
        start: 0, //数据窗口范围的起始百分比
        end: 36,
        handleSize: 0,
      },
      {
        type: 'inside',
        yAxisIndex: [0],
        start: 0,
        end: 36,
        zoomOnMouseWheel: false,  // 关闭滚轮缩放
        moveOnMouseWheel: true, // 开启滚轮平移
        moveOnMouseMove: true  // 鼠标移动能触发数据窗口平移 
      }
    ],
    series: [
      {
        name: "待处理事件",
        type: "bar",
        data: [5752, 4365, 1865, 2333, 1244, 3864, 1068, 8955, 1424, 3684, 1454, 5752],
        barWidth: 5,
        // barGap: 5, //柱间距离
        label: {//图形上的文本标签
          normal: {
            show: true,
            position: 'right',
            textStyle: {
              color: '#a8aab0',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: '0.6rem',
            },
          },
        },
        itemStyle: {
          normal: {
            show: true,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: "rgba(255, 188, 12, 0)",
              },
              {
                offset: 1,
                color: "rgba(255, 188, 12, 1)",
              },
            ]),
            barBorderRadius: 50,
            borderWidth: 0,
          },
        },
      },
      {
        name: "已处理事件",
        type: "bar",
        data: [7654, 4135, 4844, 3565, 1234, 3864, 7822, 1563, 7232, 5684, 1235, 5792],
        barWidth: 5,
        // barGap: 5, //柱间距离
        label: {//图形上的文本标签
          normal: {
            show: true,
            position: 'right',
            textStyle: {
              color: '#a8aab0',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: '0.6rem',
            },
          },
        },
        itemStyle: {
          normal: {
            show: true,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: "rgba(1, 112, 210, 0)",
              },
              {
                offset: 1,
                color: "rgba(1, 112, 210, 1)",
              },
            ]),
            barBorderRadius: 50,
            borderWidth: 0,
          },
        },
      },
    ],
  };
}




