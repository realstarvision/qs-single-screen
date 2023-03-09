
// 色带值
export let colourStripData = [
  {
    bottom: '25m',
    top: '135m',
  },
  {
    bottom: '',
    top: '',
  },
  {
    bottom: '',
    top: '',
  },
  {
    bottom: '30%',
    top: '10%',
  },
]

// 地物分类下标签
export let echartTabs = [
  {
    id: 8,
    icon: 'building',
    activeIcon: 'building_active',
    label: '全部',
    layers: 'QS_demo:qs_group_20221227',
    waterContentData: {
      chartsData: {
        title: '57',
        data: [
          { value: 20, name: '很好' },
          { value: 17, name: '较好' },
          { value: 9, name: '一般' },
          { value: 8, name: '较差' },
          { value: 3, name: '很差' },
        ],
      },
    },
  },
  {
    id: 5,
    icon: 'forest',
    activeIcon: 'forest_active',
    label: '草地',
    layers: 'qs_grass_shp',
    waterContentData: {
      chartsData: {
        title: '30',
        data: [
          { value: 8, name: '很好' },
          { value: 4, name: '较好' },
          { value: 10, name: '一般' },
          { value: 15, name: '较差' },
          { value: 3, name: '很差' },
        ],
      },
    },
  },
  {
    id: 7,
    icon: 'water',
    activeIcon: 'water_active',
    label: '水体',
    layers: 'qs_water_shp',
    waterContentData: {
      chartsData: {
        title: '90',
        data: [
          { value: 50, name: '很好' },
          { value: 10, name: '较好' },
          { value: 19, name: '一般' },
          { value: 6, name: '较差' },
          { value: 5, name: '很差' },
        ],
      },
    },
  },
  {
    id: 1,
    icon: 'building',
    activeIcon: 'building_active',
    label: '建筑物',
    layers: 'qs_building_shp',
    waterContentData: {
      chartsData: {
        title: '57',
        data: [
          { value: 20, name: '很好' },
          { value: 17, name: '较好' },
          { value: 9, name: '一般' },
          { value: 8, name: '较差' },
          { value: 3, name: '很差' },
        ],
      },
    },
  },
  {
    id: 2,
    icon: 'path',
    activeIcon: 'path_active',
    label: '道路',
    layers: 'water_environment:qs_road_shp',
    waterContentData: {
      chartsData: {
        title: '68',
        data: [
          { value: 10, name: '很好' },
          { value: 15, name: '较好' },
          { value: 20, name: '一般' },
          { value: 15, name: '较差' },
          { value: 8, name: '很差' },
        ],
      },
    },
  },
  {
    id: 3,
    icon: 'soil',
    activeIcon: 'soil_active',
    label: '裸土',
    layers: 'QS_demo:qs_bare_shp',
    waterContentData: {
      chartsData: {
        title: '70',
        data: [
          { value: 35, name: '很好' },
          { value: 11, name: '较好' },
          { value: 10, name: '一般' },
          { value: 10, name: '较差' },
          { value: 4, name: '很差' },
        ],
      },
    },
  },
  {
    id: 4,
    icon: 'grassland',
    activeIcon: 'grassland_active',
    label: '林地',
    layers: 'qs_forest_shp',
    waterContentData: {
      chartsData: {
        title: '120',
        data: [
          { value: 50, name: '很好' },
          { value: 10, name: '较好' },
          { value: 30, name: '一般' },
          { value: 10, name: '较差' },
          { value: 20, name: '很差' },
        ],
      },
    },
  },
  {
    id: 6,
    icon: 'plough',
    activeIcon: 'plough_active',
    label: '耕地',
    layers: 'qs_crop_shp',
    waterContentData: {
      chartsData: {
        title: '48',
        data: [
          { value: 6, name: '很好' },
          { value: 4, name: '较好' },
          { value: 10, name: '一般' },
          { value: 20, name: '较差' },
          { value: 8, name: '很差' },
        ],
      },
    },
  },
]


// 类型
export let hazardLevel = ['全部', '低危险区', '中危险区', '高危险区']


/* 详情 */
export let detailsInfo = [
  [
    '城市用地分类核查利用遥感技术对城市用地进行分类核查，了解城市用地信息，帮助政府进行城市规划分析。利用2021年研究区的遥感数据对研究区进行土地利用分类，其中其中林地面积为1075.631 km^2，灌木面积为4.213km^2，草地面积为23.315 km^2，耕地面积为727.144 km^2，湿地面积为2.853km^2，城区面积为937.767 km^2，裸地面积为354.562km^2，水体面积为256.828km^2。',
    '土壤渗水是指地表水体进入土壤，并在整个剖面上运移的全过程。不同地物类型的土壤特征、植被、建筑......均会对水分渗入产生直接影响，因此同一块地区内地物类型不同其土壤渗水率相差巨大，低渗水率的地物类型地表区域水体运动缓慢容易造成内涝。高渗水率地物类型能快速导流，更快进行水分运动，不容易产生内涝。'
  ],
  [
    '土壤含水量又称土壤墒情，是指作物根系分布层土壤水分的分布状况。土壤水分状况受多种因素的影响,其多少直接影响作物的正常生长、产量、产品质量。对土壤含水量进行监测是推广高效低耗节水技术，实现科学用水和高效用水的关键环节之一。2022年研究区内土壤含水量总体较差，其面积为8506.9266km^2，占总面积的78.27%，与2021年相比，2022年由于高温影响导致研究区内的土壤含水量更低。 通过监测不同地物类型的土壤含水量可以更好的预测出易涝区域！',
    '土壤的水里性质决定了土壤吸水量和透水量的大小和变化，土壤初始含水量的上限大小决定着土壤初始入渗量和初期吸水能力的大小。因此土壤含水量上限小的地区含水张力小，在外界水量增大（如：下雨的情况下）的情况下更易形成内涝区域。'
  ]
]

// 内涝详情选项菜单
export let waterloggingTabs = [
  {
    title: 'DOM模型',
    id: 2,
    layers: '',
    details: ['高分辨率DOM数据在城市内涝监测中具有重要的作用，可以提供城市地表纹理和建筑物轮廓的详细信息，帮助识别城市中的易涝区，如建筑物密集区、道路交通枢纽等，这些区域往往是城市内涝的高风险区。可以提供城市建筑物和道路的变化信息，结合降雨和排水系统的数据，实时监测城市内涝情况，及时发现和处理涝情点，减轻城市内涝的风险。根据不同区域的建筑物密集程度和道路情况，可以预测不同区域内涝的程度和影响范围，为内涝预测和防治提供决策支持；结合排水系统的数据，可以优化排水系统的设计和运行，提高排水系统的效率和适应能力。']
  },
  {
    title: 'DSM模型',
    id: 0,
    layers: 'QS_demo:test2',
    details: ['高分辨率DSM数据在城市内涝监测中具有重要的作用，描述了研究区域地形的空间分布，高分辨率的 DSM 能够反映更为微观的地表特征，可用于提取区域坡度、水流方向及坡向等参数，可以提供城市地表高程的详细信息，帮助识别城市中的易涝区，如低洼地区、河道、湖泊、池塘等，以及建筑物密集区、道路交通枢纽等，这些区域往往是城市内涝的高风险区；也可以提供城市地表高程的变化信息，结合降雨和排水系统的数据，实时监测城市内涝情况，及时发现和处理涝情点，减轻城市内涝的风险。根据不同区域的地形和高程，可以预测不同区域内涝的程度和影响范围，为内涝预测和防治提供决策支持；还可以帮助确定城市排水系统的设计方案，包括排水管径、排水井位置和流向等，根据地形和高程的信息，优化排水系统的设计，提高排水系统的效率和适应能力。']
  },
  {
    title: '地物分类',
    id: 1,
    layers: '',
    details: ['土地利用数据在内涝监测中具有重要的作用，主要用于产流下垫面分析，产流计算等，可以帮助识别城市中的易涝区，如低洼地区、河道、湖泊、池塘等，以及建筑物密集区、道路交通枢纽等，这些区域往往是城市内涝的高风险区；同时土地利用数据可以提供不同区域的土地类型和覆盖率信息，根据不同土地类型的水文特征和渗透能力，可以预测不同区域内涝的程度和影响范围。']
  },
  {
    title: '土壤湿度',
    id: 3,
    layers: 'QS_demo:hsl',
    details: ['土壤湿度数据在内涝监测中具有重要的作用，是城市内涝预测和预警的重要指标之一，可以提供土壤的水分含量信息，根据不同土壤类型的渗透能力和水分持有能力，可以预测不同区域内涝的程度和影响范围。也可以监测城市排水系统的运行情况，结合气象数据和降雨数据，可以判断排水系统的瓶颈和故障，及时发现和解决排水系统中的问题，以减轻城市内涝风险，优化城市排水系统、改善地表覆盖、调整土地利用结构等，以减轻内涝风险和提高城市的适应能力。']
  },
]

