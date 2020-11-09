import React from 'react';
import 'antd/dist/antd.css';
import {SF, Schema, FormProperty} from '../lib/antd';

export function App() {
	const schema: Schema = {
		properties: {
			username: {
				type: "string",
				title: "用户名",
			},
			password: {
				type: "string",
				title: "密码",
			},
            remember: {
                type: "boolean",
                title: "保存密码",
            }
		},
		required: ["username", "password"],
		ui: {
			grid: {labelWidth: "100px"},
			actions: [
				{
					text: "提交",
                    onclick: function(this: FormProperty) {
                        console.log(this.getValues());
                    }
				},
				{
					text: "重置",
					type: "default",
				},
			]
		}
	}
    return <SF schema={schema} />
}