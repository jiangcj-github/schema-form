import React from 'react';
import 'antd/dist/antd.css';
import {FormProperty, WidgetProperty, SF, Schema} from '../lib/antd';

function App() {

	const sf = React.useRef(new FormProperty());

	const submit = () => {
		sf.current.validates()
		console.log(sf.current.getValues());
	}

	const schema: Schema = {
		properties: {
			fruit: {
				type: "array",
				title: "下拉多选",
				ui: {
					widget: "select",
					mode: "tags",
					placeholder: "请选择水果",
					options: [
						{label: "苹果", value: "apple"},
						{label: "香蕉", value: "banana"},
						{label: "橘子", value: "orange"},
					],
				}
			},
			checkgroup: {
				$ref: "#/properties/fruit",
				title: "多选",
				ui: {
					widget: "checkgroup",
				}
			},
			checkbox: {
				type: "boolean",
				title: "单选",
				ui: {
					widget: "checkbox",
				}
			},
			radio: {
				type: "string",
				title: "水果",
				ui: {
					widget: "radiogroup",
					options: ["苹果", "香蕉", "橘子"]
				}
			},
			boolean: {
				type: "boolean",
				title: "开关",
				default: true,
				ui: {
					checkedChildren: "开",
					unCheckedChildren: "关",
				}
			},
			date: {
				type: "number",
				title: "日期",
				default: 1,
				ui: {
					widget: "datepicker",
					allowClear: true,
				}
			},
			dateRange: {
				type: "array",
				title: "日期范围",
				default: [1, 2],
				ui: {
					widget: "rangepicker",
					allowClear: true,
				}
			},
			search: {
				type: "string",
				title: "搜索",
				ui: {
					widget: "search",
					placeholder: "请输入关键字搜索",
				}
			},
			address: { 
				type: "object",
				title: "对象",
				properties: {
					province: {
						type: "string", 
						title: "省份", 
						default: "hb",
						ui: {
							widget: "select",
							options: [
								{label: "北京", value: "bj"},
								{label: "黑龙江", value: "hlj"},
								{label: "湖北", value: "hb"},
							]
						}
					},
					city: {
						type: "string", 
						title: "城市",
					},
					zone: {type: "string", title: "地区"},
				},
				required: ["province", "city"],
				ui: {
					
					grid: {
						labelWidth: "70px"
					}
				},
			},
			name: { 
				type: "string",
				title: "姓名",
				minLength: 3,
				maxLength: 10,
				default: "john",
			},
			password: {
				type: "string",
				title: "密码",
				ui: {
					widget: "password",
				}
			},
			age: {
				type: "number",
				title: "年龄",
				ui: {
					placeholder: "年龄",
				}
			},
			age2: {
				type: "number",
				title: "年龄2",
				minimum: 1,
				maximum: 100,
				ui: {
					widget: "slider"
				}
			},
			email: { 
				type: "string",
				format: "email",
				title: "邮箱",
				ui: {
					widget: "textarea",
					placeholder: "请输入邮箱",
				}
			},
			custom: {
				type: "string",
				title: "自定义",
				ui: {
					widget: "custom",
					render: (widgetProperty: WidgetProperty) => {
						const { ui } = widgetProperty;
						return <div>{ui.widget} 我是自定义内容</div>
					}
				}
			}
		},
		required: ["date", "checkgroup", "dateRange", "boolean", "name", "email", "age"],
		ui: {
			grid: {labelWidth: "100px"},
		}
	}

    return (
		<div style={{margin: "40px 50px", width: "800px"}}>
			<SF schema={schema} ref={sf} />
			<button onClick={submit} style={{width:"200px",marginLeft:"100px"}}>提交</button>
		</div>
	)
}

export default App;