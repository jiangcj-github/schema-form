import React from 'react';
import {FormProperty, SF} from '../lib/kpc';

function App() {

	const sf = React.useRef(new FormProperty());

	const submit = () => {
		sf.current.validates()
		console.log(sf.current.getValues());
	}

	const schema: any = {
		properties: {
			name: { 
				type: "string",
				title: "姓名",
				minLength: 3,
				maxLength: 10,
				default: "john",
			},
			email: { 
				type: "string",
				format: "email",
				title: "邮箱",
			},
		},
		required: ["name", "email", "age"],
		ui: {
			grid: {labelWidth: "100px"},
		}
	}

    return (
		<div style={{margin: "40px 50px", width: "800px"}}>
			<SF schema={schema} ref={sf} />
			<button onClick={submit} style={{width:"200px",height:"30px",marginLeft:"100px",marginTop:"20px"}}>提交</button>
		</div>
	)
}

export default App;