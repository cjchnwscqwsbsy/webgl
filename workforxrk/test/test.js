const data = [{
  value: {"sortCode": "/Menu", "code": "/Menu", "name": "菜单", "rw": null},
  "children": [{
    value: {"sortCode": "00", "code": "Home", "name": "首页", "rw": "*"},
    "children": []
  }, {
    value: {"sortCode": "A10", "code": "A10", "name": "客户管理", "rw": ""},
    "children": [{
      value: {"sortCode": "A10/10", "code": "A10-10", "name": "法人客户", "rw": "r"},
      "children": []
    }, {
      value: {"sortCode": "A10/20", "code": "A10-20", "name": "自然人客户", "rw": "r"},
      "children": []
    }, {
      value: {"sortCode": "A10/30", "code": "A10-30", "name": "第三方机构", "rw": "r"},
      "children": [{
        value: {"sortCode": "A10/30/10", "code": "A10-30-10", "name": "律师事务所", "rw": "r"},
        "children": []
      }, {
        value: {"sortCode": "A10/30/20", "code": "A10-30-20", "name": "会计事务所", "rw": "r"},
        "children": []
      }, {
        value: {"sortCode": "A10/30/30", "code": "A10-30-30", "name": "评估机构", "rw": "r"},
        "children": []
      }, {value: {"sortCode": "A10/30/40", "code": "A10-30-40", "name": "评级机构", "rw": "r"}, "children": []}]
    }]
  }, {
    value: {"sortCode": "A12", "code": "A12", "name": "项目管理", "rw": ""},
    "children": [{
      value: {"sortCode": "A12/10", "code": "A12-10", "name": "项目管理台账", "rw": "r"},
      "children": []
    }, {
      value: {"sortCode": "A12/20", "code": "A12-20", "name": "预沟通会议", "rw": ""},
      "children": []
    }, {value: {"sortCode": "A12/50", "code": "A12-50", "name": "投决会管理", "rw": ""}, "children": []}]
  }, {
    value: {"sortCode": "A13", "code": "A13", "name": "合同管理", "rw": "r"},
    "children": [{
      value: {"sortCode": "A13/10", "code": "A13-10", "name": "合同申请", "rw": "r"},
      "children": []
    }, {
      value: {"sortCode": "A13/20", "code": "A13-20", "name": "合同扫描件补录", "rw": "r"},
      "children": []
    }, {value: {"sortCode": "A13/30", "code": "A13-30", "name": "合同台帐", "rw": "r"}, "children": []}]
  }, {
    value: {"sortCode": "A90", "code": "A90", "name": "通用管理", "rw": ""},
    "children": [{
      value: {"sortCode": "A90/10", "code": "A90-10", "name": "会议管理", "rw": ""},
      "children": []
    }, {
      value: {"sortCode": "A90/20", "code": "A90-20", "name": "附件管理", "rw": ""},
      "children": []
    }, {
      value: {"sortCode": "A90/60", "code": "A90-60", "name": "资料清单一览", "rw": ""},
      "children": []
    }, {value: {"sortCode": "A90/70", "code": "A90-70", "name": "协议条款管理", "rw": ""}, "children": []}]
  }, {
    value: {"sortCode": "B03", "code": "B03", "name": "业务配置", "rw": ""},
    "children": [{
      value: {"sortCode": "B03/10", "code": "B03-10", "name": "产品配置规则", "rw": ""},
      "children": []
    }, {
      value: {"sortCode": "B03/20", "code": "B03-20", "name": "文档清单模板", "rw": ""},
      "children": []
    }, {
      value: {"sortCode": "B03/30", "code": "B03-30", "name": "财务报表模型", "rw": ""},
      "children": []
    }, {
      value: {"sortCode": "B03/40", "code": "B03-40", "name": "合同模板", "rw": ""},
      "children": []
    }, {value: {"sortCode": "B03/50", "code": "B03-50", "name": "协议条款模板", "rw": ""}, "children": []}]
  }, {
    value: {"sortCode": "B06", "code": "B06", "name": "业务监控", "rw": ""},
    "children": [{
      value: {"sortCode": "B06/10", "code": "B06-10", "name": "流程实例", "rw": ""},
      "children": []
    }, {
      value: {"sortCode": "B06/20", "code": "B06-20", "name": "流程任务", "rw": ""},
      "children": []
    }, {value: {"sortCode": "B06/30", "code": "B06-30", "name": "流程任务", "rw": ""}, "children": []}]
  }, {
    value: {"sortCode": "B10", "code": "B10", "name": "系统", "rw": ""},
    "children": [{
      value: {"sortCode": "B10/10", "code": "B10-10", "name": "组织架构", "rw": ""},
      "children": [{
        value: {"sortCode": "B10/10/10", "code": "B10-10-10", "name": "机构部门", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "B10/10/20", "code": "B10-10-20", "name": "用户", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "B10/10/30", "code": "B10-10-30", "name": "角色", "rw": ""},
        "children": []
      }, {value: {"sortCode": "B10/10/40", "code": "B10-10-40", "name": "权限", "rw": ""}, "children": []}]
    }, {
      value: {"sortCode": "B10/20", "code": "B10-20", "name": "流程", "rw": ""},
      "children": [{
        value: {"sortCode": "B10/20/10", "code": "B10-20-10", "name": "流程设计", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "B10/20/20", "code": "B10-20-20", "name": "流程资源", "rw": ""},
        "children": []
      }, {value: {"sortCode": "B10/20/30", "code": "B10-20-30", "name": "流程待处理", "rw": ""}, "children": []}]
    }, {
      value: {"sortCode": "B10/30", "code": "B10-30", "name": "模版", "rw": ""},
      "children": [{
        value: {"sortCode": "B10/30/10", "code": "B10-30-10", "name": "文档模版", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "B10/30/20", "code": "B10-30-20", "name": "格式化报告", "rw": ""},
        "children": []
      }, {value: {"sortCode": "B10/30/30", "code": "B10-30-30", "name": "文档清单", "rw": ""}, "children": []}]
    }, {value: {"sortCode": "B10/40", "code": "B10-40", "name": "风险探测器", "rw": ""}, "children": []}]
  }, {
    value: {"sortCode": "C10", "code": "C10", "name": "开发运维", "rw": ""},
    "children": [{
      value: {"sortCode": "C10/10", "code": "C10-10", "name": "系统管理", "rw": ""},
      "children": [{
        value: {"sortCode": "C10/10/10", "code": "C10-10-10", "name": "菜单", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "C10/10/22", "code": "C10-10-22", "name": "显示模板", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "C10/10/30", "code": "C10-10-30", "name": "数据字典", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "C10/10/35", "code": "C10-10-35", "name": "参数", "rw": ""},
        "children": []
      }, {value: {"sortCode": "C10/10/40", "code": "C10-10-40", "name": "数据模型", "rw": ""}, "children": []}]
    }, {
      value: {"sortCode": "C10/20", "code": "C10-20", "name": "系统监控", "rw": ""},
      "children": [{
        value: {"sortCode": "C10/20/06", "code": "C10-20-06", "name": "资源监控", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "C10/20/10", "code": "C10-20-10", "name": "系统日志", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "C10/20/20", "code": "C10-20-20", "name": "运行环境", "rw": ""},
        "children": []
      }, {value: {"sortCode": "C10/20/30", "code": "C10-20-30", "name": "缓存", "rw": ""}, "children": []}]
    }]
  }, {
    value: {"sortCode": "D10", "code": "D10", "name": "参考案例", "rw": ""},
    "children": [{
      value: {"sortCode": "D10/00", "code": "D10-00", "name": "入门", "rw": ""},
      "children": [{
        value: {"sortCode": "D10/00/10", "code": "D10-00-10", "name": "你好", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/00/20", "code": "D10-00-20", "name": "按钮及调用\n", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/00/30", "code": "D10-00-30", "name": "多栏栅格\n", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/00/40", "code": "D10-00-40", "name": "消息及交互", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/00/50", "code": "D10-00-50", "name": "表单及数据", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/00/60", "code": "D10-00-60", "name": "面板及分组", "rw": ""},
        "children": []
      }, {value: {"sortCode": "D10/00/70", "code": "D10-00-70", "name": "全局对象注入", "rw": ""}, "children": []}]
    }, {
      value: {"sortCode": "D10/10", "code": "D10-10", "name": "列表", "rw": ""},
      "children": [{
        value: {"sortCode": "D10/10/01", "code": "D10-10-01", "name": "简单列表", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/10/10", "code": "D10-10-10", "name": "可编辑列表", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/10/11", "code": "D10-10-02", "name": "列表主要功能展示", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/10/15", "code": "D10-10-15", "name": "可编辑列表有校验", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/10/25", "code": "D10-10-25", "name": "列表搜索器定制", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/10/35", "code": "D10-10-35", "name": "当前用户权限内限制", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/10/40", "code": "D10-10-40", "name": "树图表格", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/10/5", "code": "D10-10-5", "name": "列表分组", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/10/50", "code": "D10-10-50", "name": "条目列表", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/10/55", "code": "D10-10-55", "name": "卡片列表", "rw": ""},
        "children": []
      }, {value: {"sortCode": "D10/10/60", "code": "D10-10-60", "name": "模板和数据分离使用", "rw": ""}, "children": []}]
    }, {
      value: {"sortCode": "D10/20", "code": "D10-20", "name": "详情", "rw": ""},
      "children": [{
        value: {"sortCode": "D10/20/10", "code": "D10-20-10", "name": "简单详情", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/20/20", "code": "D10-20-20", "name": "详情有分组", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/20/30", "code": "D10-20-30", "name": "详情二列", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/20/40", "code": "D10-20-40", "name": "详情三列", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/20/50", "code": "D10-20-50", "name": "详情四列", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/20/60", "code": "D10-20-60", "name": "详情主要功能展示", "rw": ""},
        "children": []
      }, {value: {"sortCode": "D10/20/70", "code": "D10-20-70", "name": "模板和数据分离使用", "rw": ""}, "children": []}]
    }, {
      value: {"sortCode": "D10/30", "code": "D10-30", "name": "布局及组件", "rw": ""},
      "children": [{
        value: {"sortCode": "D10/30/04", "code": "D10-30-04", "name": "Fieldset分组", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/30/06", "code": "D10-30-06", "name": "树图导航", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/30/10", "code": "D10-30-10", "name": "步骤条导航", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/30/15", "code": "D10-30-15", "name": "标签页", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/30/20", "code": "D10-30-20", "name": "选择器", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/30/25", "code": "D10-30-25", "name": "通知以及提示", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/30/30", "code": "D10-30-30", "name": "模态框以及对话框", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/30/35", "code": "D10-30-35", "name": "表单组件", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/30/40", "code": "D10-30-40", "name": "图标库", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/30/45", "code": "D10-30-45", "name": "文件及图片的上传下载", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/30/5", "code": "D10-30-5", "name": "树图导航", "rw": ""},
        "children": []
      }, {value: {"sortCode": "D10/30/50", "code": "D10-30-50", "name": "IFRAME的使用场景", "rw": ""}, "children": []}]
    }, {
      value: {"sortCode": "D10/40", "code": "D10-40", "name": "基础服务", "rw": ""},
      "children": [{
        value: {"sortCode": "D10/40/10", "code": "D10-40-10", "name": "rest调用", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/40/20", "code": "D10-40-20", "name": "rest传参场景", "rw": ""},
        "children": []
      }, {value: {"sortCode": "D10/40/30", "code": "D10-40-30", "name": "国际化支持", "rw": ""}, "children": []}]
    }, {
      value: {"sortCode": "D10/50", "code": "D10-50", "name": "OFFICE", "rw": ""},
      "children": [{
        value: {"sortCode": "D10/50/10", "code": "D10-50-10", "name": "在线编辑", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/50/20", "code": "D10-50-20", "name": "转为PDF并展示", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/50/30", "code": "D10-50-30", "name": "其他格式附件展示", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/50/40", "code": "D10-50-40", "name": "LIST页面导出EXCEL", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/50/50", "code": "D10-50-50", "name": "LIST页面导入EXCEL（前端）", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/50/60", "code": "D10-50-60", "name": "LIST页面导入EXCEL（后台）", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/50/70", "code": "D10-50-70", "name": "INFO页面导出", "rw": ""},
        "children": []
      }, {value: {"sortCode": "D10/50/80", "code": "D10-50-80", "name": "INFO页面导入(前端）", "rw": ""}, "children": []}]
    }, {
      value: {"sortCode": "D10/60", "code": "D10-60", "name": "常见组合", "rw": ""},
      "children": [{
        value: {"sortCode": "D10/60/10", "code": "D10-60-10", "name": "列表详情联动", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/60/20", "code": "D10-60-20", "name": "详情列表整合", "rw": ""},
        "children": []
      }, {
        value: {"sortCode": "D10/60/30", "code": "D10-60-30", "name": "动态分组并整合列表详情以及自定义", "rw": ""},
        "children": []
      }]
    }, {value: {"sortCode": "D10/70", "code": "D10-70", "name": "典型业务场景", "rw": ""}, "children": []}]
  }]
}, {
  value: {"sortCode": "/DataForm", "code": "/DataForm", "name": "DataForm", "rw": null},
  "children": [{
    value: {
      "sortCode": "common-CmonDocListGroupList",
      "code": "common-CmonDocListGroupList",
      "name": "通用文档清单分组列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "common-CmonDocListItemInfo",
      "code": "common-CmonDocListItemInfo",
      "name": "通用文档清单项详情",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "common-CmonDocListItemLedgerList",
      "code": "common-CmonDocListItemLedgerList",
      "name": "通用文档清单项台账一览",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "common-CmonDocListItemList",
      "code": "common-CmonDocListItemList",
      "name": "通用文档清单项列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "common-CmonDocListLedgerList",
      "code": "common-CmonDocListLedgerList",
      "name": "通用文档清单台账一览",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "common-FileHistoryList", "code": "common-FileHistoryList", "name": "附件历史版本列表", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "common-MeetingInfo", "code": "common-MeetingInfo", "name": "会议管理详情", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "common-MeetingList", "code": "common-MeetingList", "name": "会议管理列表", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "common-MeetingMemberInfo",
      "code": "common-MeetingMemberInfo",
      "name": "与会人员详情",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "common-MeetingMemberList",
      "code": "common-MeetingMemberList",
      "name": "与会人员列表",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "common-MeetingSummary", "code": "common-MeetingSummary", "name": "会议管理概要", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "common-ParamItemTreeList",
      "code": "common-ParamItemTreeList",
      "name": "参数明细项树图列表",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "common-TextClauseInfo", "code": "common-TextClauseInfo", "name": "协议条款详情", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "common-TextClauseItemInfo",
      "code": "common-TextClauseItemInfo",
      "name": "协议条款明细信息",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "common-TextClauseItemList",
      "code": "common-TextClauseItemList",
      "name": "协议条款明细列表",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "common-TextClauseList", "code": "common-TextClauseList", "name": "协议条款列表", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "configuration-ConfClauseItemInfo",
      "code": "configuration-ConfClauseItemInfo",
      "name": "协议条款明细模板信息",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "configuration-ConfClauseItemList",
      "code": "configuration-ConfClauseItemList",
      "name": "协议条款明细模板列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "configuration-ConfClauseList",
      "code": "configuration-ConfClauseList",
      "name": "协议条款模板列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "configuration-ContactDocItemInfo",
      "code": "configuration-ContactDocItemInfo",
      "name": "合同模版详情",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "configuration-ContractDocItemInfo",
      "code": "configuration-ContractDocItemInfo",
      "name": "合同文本明细项详情",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "configuration-ContractDocItemList",
      "code": "configuration-ContractDocItemList",
      "name": "合同文本明细项列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "configuration-ContractDocList",
      "code": "configuration-ContractDocList",
      "name": "合同模版列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "configuration-ContractDocListGroupList",
      "code": "configuration-ContractDocListGroupList",
      "name": "合同模板分组列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "configuration-ContractDoctInfo",
      "code": "configuration-ContractDoctInfo",
      "name": "合同文本详情",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "configuration-DocList", "code": "configuration-DocList", "name": "文档清单列表", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "configuration-DocListGroupList",
      "code": "configuration-DocListGroupList",
      "name": "文档清单模板分组列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "configuration-DocListInfo",
      "code": "configuration-DocListInfo",
      "name": "文档清单详情",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "configuration-DocListItemInfo",
      "code": "configuration-DocListItemInfo",
      "name": "文档清单明细项详情",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "configuration-DocListItemList",
      "code": "configuration-DocListItemList",
      "name": "文档清单明细项列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "configuration-FnastatList",
      "code": "configuration-FnastatList",
      "name": "财务报表模型列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "configuration-FnastatListInfo",
      "code": "configuration-FnastatListInfo",
      "name": "财务报表模型详情",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "configuration-FnastatSubjectInfo",
      "code": "configuration-FnastatSubjectInfo",
      "name": "财务报表科目列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "configuration-FnastatSubjectList",
      "code": "configuration-FnastatSubjectList",
      "name": "财务报表科目列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "configuration-ProductInfo",
      "code": "configuration-ProductInfo",
      "name": "产品配置规则详情",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "configuration-ProductList",
      "code": "configuration-ProductList",
      "name": "产品配置规则列表",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "customer-AccountInfo", "code": "customer-AccountInfo", "name": "账号信息详情", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "customer-AccountList", "code": "customer-AccountList", "name": "账号信息列表", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "customer-AssetInfo", "code": "customer-AssetInfo", "name": "资产信息详情", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "customer-AssetList", "code": "customer-AssetList", "name": "资产信息列表", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "customer-CapitalStructInfo",
      "code": "customer-CapitalStructInfo",
      "name": "资本构成详情",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "customer-CapitalStructList",
      "code": "customer-CapitalStructList",
      "name": "资本构成列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "customer-CustAptitudeInfo",
      "code": "customer-CustAptitudeInfo",
      "name": "客户资质与认证详情",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "customer-CustAptitudeList",
      "code": "customer-CustAptitudeList",
      "name": "客户资质与认证列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "customer-CustBaseSummaryList",
      "code": "customer-CustBaseSummaryList",
      "name": "客户管理用户列表",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "customer-CustBondInfo", "code": "customer-CustBondInfo", "name": "客户债券发行详情", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "customer-CustBondList", "code": "customer-CustBondList", "name": "客户债券发行列表", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "customer-CustDebtInfo", "code": "customer-CustDebtInfo", "name": "客户相关负债详情", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "customer-CustDebtList", "code": "customer-CustDebtList", "name": "客户相关负债列表", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "customer-CustEventInfo", "code": "customer-CustEventInfo", "name": "客户大事记详情", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "customer-CustEventList", "code": "customer-CustEventList", "name": "客户大事记列表", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "customer-CustRelationInfo",
      "code": "customer-CustRelationInfo",
      "name": "客户关系详情",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "customer-CustRelationList",
      "code": "customer-CustRelationList",
      "name": "客户关系列表",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "customer-CustStockInfo", "code": "customer-CustStockInfo", "name": "客户股票发行详情", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "customer-CustStockList", "code": "customer-CustStockList", "name": "客户股票发行列表", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "customer-EnterpriseCustomerInfo",
      "code": "customer-EnterpriseCustomerInfo",
      "name": "法人客户详情",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "customer-EnterpriseCustomerList",
      "code": "customer-EnterpriseCustomerList",
      "name": "法人客户列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "customer-EnterpriseCustomerSummary",
      "code": "customer-EnterpriseCustomerSummary",
      "name": "法人客户概要",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "customer-EnterpriseCustomerSummaryList",
      "code": "customer-EnterpriseCustomerSummaryList",
      "name": "法人客户列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "customer-IndividualCustomerInfo",
      "code": "customer-IndividualCustomerInfo",
      "name": "自然人客户详情",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "customer-IndividualCustomerList",
      "code": "customer-IndividualCustomerList",
      "name": "自然人客户列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "customer-IndividualCustomerSummary",
      "code": "customer-IndividualCustomerSummary",
      "name": "自然人客户概要",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "customer-InvestHistoryList",
      "code": "customer-InvestHistoryList",
      "name": "历史对外股权列表",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "customer-InvestInfo", "code": "customer-InvestInfo", "name": "对外股权详情", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "customer-InvestValidList",
      "code": "customer-InvestValidList",
      "name": "有效对外股权列表",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "customer-InvoiceInfo", "code": "customer-InvoiceInfo", "name": "开票信息详情", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "customer-InvoiceList", "code": "customer-InvoiceList", "name": "开票信息列表", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "customer-KeymanInfo", "code": "customer-KeymanInfo", "name": "关键人信息详情", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "customer-KeymanList", "code": "customer-KeymanList", "name": "关键人信息列表", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "demo-AccountList", "code": "demo-AccountList", "name": "账户列表", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "demo-BeanPersonList", "code": "demo-BeanPersonList", "name": "个人信息数据列表", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "demo-CustomizeFilterBeanPersonList",
      "code": "demo-CustomizeFilterBeanPersonList",
      "name": "自定义过滤器处理",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "demo-drew", "code": "demo-drew", "name": "drew", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "demo-EditBeanPersonList",
      "code": "demo-EditBeanPersonList",
      "name": "个人信息数据列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "demo-MainCasePersonList",
      "code": "demo-MainCasePersonList",
      "name": "个人信息数据列表功能展示",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "demo-MapPersonInfo", "code": "demo-MapPersonInfo", "name": "个人详细信息", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "demo-MapPersonList", "code": "demo-MapPersonList", "name": "个人信息数据列表", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "demo-PersonBankCardList",
      "code": "demo-PersonBankCardList",
      "name": "个人银行卡列表",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "demo-PersonFourColInfo", "code": "demo-PersonFourColInfo", "name": "个人四列详细信息", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "demo-PersonGroupInfo", "code": "demo-PersonGroupInfo", "name": "个人分组详细信息", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "demo-PersonListFile", "code": "demo-PersonListFile", "name": "文件信息数据列表", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "demo-PersonSimpleInfo", "code": "demo-PersonSimpleInfo", "name": "个人简单详细信息", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "demo-PersonThreeColInfo",
      "code": "demo-PersonThreeColInfo",
      "name": "个人三列详细信息",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "demo-PersonTwoColInfo", "code": "demo-PersonTwoColInfo", "name": "个人二列详细信息", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "demo-WithUserBeanPersonList",
      "code": "demo-WithUserBeanPersonList",
      "name": "数据受限于当前登录用户",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "invest-ContractApplyInfo",
      "code": "invest-ContractApplyInfo",
      "name": "合同申请详细信息",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "invest-ContractApplyList",
      "code": "invest-ContractApplyList",
      "name": "合同申请列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "invest-ContractApplyInfo",
      "code": "invest-ContractApplyInfo",
      "name": "新增合同申请",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "invest-ContractInfoList",
      "code": "invest-ContractInfoList",
      "name": "合同可编辑列表",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "invest-PlanBasicInfo", "code": "invest-PlanBasicInfo", "name": "项目基本信息详情", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "invest-PlanBasicInfoForPreMeeting",
      "code": "invest-PlanBasicInfoForPreMeeting",
      "name": "预沟通会议项目基本信息",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "invest-PlanBasicInfoHeader",
      "code": "invest-PlanBasicInfoHeader",
      "name": "项目基本信息详情头",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "invest-PlanInfo", "code": "invest-PlanInfo", "name": "项目信息详情", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "invest-PlanInfoHeader",
      "code": "invest-PlanInfoHeader",
      "name": "copyof项目信息详情",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "invest-PlanList", "code": "invest-PlanList", "name": "项目信息列表", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "invest-PlanListForPreMeeting",
      "code": "invest-PlanListForPreMeeting",
      "name": "预沟通会议选择项目列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "invest-PlanSubjectInfo",
      "code": "invest-PlanSubjectInfo",
      "name": "项目标的公司信息详情",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "invest-PlanSummary", "code": "invest-PlanSummary", "name": "项目概要信息", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "invest-PlanTradeInfo", "code": "invest-PlanTradeInfo", "name": "项目交易信息详情", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "invest-PreCommunicationMeetingList",
      "code": "invest-PreCommunicationMeetingList",
      "name": "预沟通会议列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "invest-PreCommunicationMeetingSummary",
      "code": "invest-PreCommunicationMeetingSummary",
      "name": "预沟通会议概要",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "invest-PreMeetingBasicInfo",
      "code": "invest-PreMeetingBasicInfo",
      "name": "预沟通会议基本信息详情",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "invest-PreMeetingDocListItemList",
      "code": "invest-PreMeetingDocListItemList",
      "name": "预沟通会议文档清单项列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "invest-UserListForPreMeeting",
      "code": "invest-UserListForPreMeeting",
      "name": "参会人员用户列表",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "invest-VoteMeetingList", "code": "invest-VoteMeetingList", "name": "投决会信息列表", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "system-DataFormConfigList",
      "code": "system-DataFormConfigList",
      "name": "显示模板列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "system-DictCategoryTreeList",
      "code": "system-DictCategoryTreeList",
      "name": "数据字典分类树图列表",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "system-DictInfo", "code": "system-DictInfo", "name": "数据字典详情", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "system-DictItemInfo", "code": "system-DictItemInfo", "name": "数据字典条目详情", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "system-DictItemList", "code": "system-DictItemList", "name": "数据字典条目列表", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "system-DictList", "code": "system-DictList", "name": "数据字典列表", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "system-DisplayTemplate", "code": "system-DisplayTemplate", "name": "显示模板列表", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "system-MenuInfo", "code": "system-MenuInfo", "name": "菜单配置详情", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "system-MenuList", "code": "system-MenuList", "name": "菜单配置列表", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "system-OrgInfo", "code": "system-OrgInfo", "name": "系统管理机构详情", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "system-OrgList", "code": "system-OrgList", "name": "系统管理机构列表", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "system-OrgSummaryList", "code": "system-OrgSummaryList", "name": "系统管理机构列表", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "system-ParamInfo", "code": "system-ParamInfo", "name": "参数详情", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "system-ParamItemInfo", "code": "system-ParamItemInfo", "name": "参数条目详情", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "system-ParamItemList", "code": "system-ParamItemList", "name": "参数条目列表", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "system-ParamList", "code": "system-ParamList", "name": "参数列表", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "system-RoleInfo", "code": "system-RoleInfo", "name": "系统管理角色详情", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "system-RoleList", "code": "system-RoleList", "name": "系统管理角色列表", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "system-SimpleRoleListForUserManage",
      "code": "system-SimpleRoleListForUserManage",
      "name": "用户下的角色列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "system-UnrelatedRoleListForUserManage",
      "code": "system-UnrelatedRoleListForUserManage",
      "name": "未关联当前用户的角色列表",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "system-UserInfo", "code": "system-UserInfo", "name": "系统管理用户详情", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "system-UserList", "code": "system-UserList", "name": "系统管理用户列表", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "system-UserListForRoleManage",
      "code": "system-UserListForRoleManage",
      "name": "角色下的用户列表",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "system-UserSummaryList", "code": "system-UserSummaryList", "name": "系统管理用户列表", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "workflow-DesignerModelList",
      "code": "workflow-DesignerModelList",
      "name": "流程模型定义列表",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "workflow-DesignerModelListForParam",
      "code": "workflow-DesignerModelListForParam",
      "name": "流程模型定义列表",
      "rw": null
    }, "children": []
  }, {
    value: {"sortCode": "workflow-ProcInstInfo", "code": "workflow-ProcInstInfo", "name": "流程实例详情", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "workflow-ProcInstList", "code": "workflow-ProcInstList", "name": "流程实例列表", "rw": null},
    "children": []
  }, {
    value: {"sortCode": "workflow-UntreatedTask", "code": "workflow-UntreatedTask", "name": "流程待处理列表", "rw": null},
    "children": []
  }, {
    value: {
      "sortCode": "workflow-WorkflowParamsInfo",
      "code": "workflow-WorkflowParamsInfo",
      "name": "流程参数详情",
      "rw": null
    }, "children": []
  }, {
    value: {
      "sortCode": "workflow-WorkflowParamsList",
      "code": "workflow-WorkflowParamsList",
      "name": "流程参数列表",
      "rw": null
    }, "children": []
  }]
}, {value: {"sortCode": "/Rest", "code": "/Rest", "name": "WebApi", "rw": null}, "children": []}]