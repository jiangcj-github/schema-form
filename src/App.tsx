import React from 'react';
import 'antd/dist/antd.css';
import {FormProperty, WidgetProperty, SF, Schema} from './lib';
import './lib/antd';


function App() {

	const sf = React.useRef(new FormProperty());

	const submit = () => {
		sf.current.validates()
		alert(JSON.stringify(sf.current.getValues()));
		console.log(sf.current.getValues());
	}

	const schema: Schema = {
		properties: {
			fruit: {
				type: "array",
				title: "水果",
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
			checkbox: {
				$ref: "#/properties/fruit",
				title: "水果",
				ui: {
					widget: "checkbox.group",
				}
			},
			agree: {
				type: "boolean",
				title: "爱吃水果",
				default: true,
				ui: {
					checkedChildren: "是",
					unCheckedChildren: "否",
				}
			},
			address: { 
				type: "object",
				title: "详细地址",
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
				default: "xxx",
			},
			age: {
				type: "number",
				title: "年龄",
			},
			email: { 
				type: "string",
				format: "email",
				title: "邮箱",
				ui: {
					onChange: function(this: any, val: string) {
						console.log(this, val)
					}
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
		required: ["name", "email", "age"],
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
