import React from 'react';
import 'antd/dist/antd.css';
import {FormProperty, SF, Schema, IFormData} from '../lib/antd';

function App() {

	const schema: Schema = {
		properties: {
			name: { 
				type: "string",
				title: "姓名",
				default: "john",
				ui: {
					placeholder: "请输入姓名",
					allowClear: true,
				}
			},
			sex: { 
				type: "string",
				title: "性别",
				ui: {
					widget: "select",
					placeholder: "请选择性别",
					style: {width: "150px"},
					options: [
						{label: "男", value: "男"},
						{label: "女", value: "女"},
					]
				}
			},
			age: {
				type: "number",
				title: "年龄",
				ui: {
					style: {width: "100px"},
					placeholder: "年龄",
				}
			},
			province: {
				type: "string", 
				title: "省份", 
				default: "hb",
				ui: {
					widget: "select",
					style: {width: "150px"},
					placeholder: "请选择省份",
					options: [
						{label: "北京", value: "bj"},
						{label: "黑龙江", value: "hlj"},
						{label: "湖北", value: "hb"},
					]
				}
			},
		},
		ui: {
			layout: "inline",
			actions: [
				{
					text: "搜索",
					style: {width: "100px"},
					onClick: function(this: FormProperty, values: IFormData) {
						console.log(values);
						alert(JSON.stringify(values));
					}
				},
				{
					text: "导出",
					style: {width: "100px"},
					type: "default",
					onClick: function(this: FormProperty, values: IFormData) {
						console.log(values);
						alert(JSON.stringify(values));
					}
				},
			]
		}
	}

    return (
		<div style={{margin: "40px 50px"}}>
			<SF schema={schema} />
		</div>
	)
}

export default App;