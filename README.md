
# 开始使用
schema-form是一个基于[JSON Schema](http://json-schema.org/)标准的构建表单。

## 特性
* 符合最新的 JSON Schema 7.0 标准。
* 基于但不限于 antd-design 基础组件库。
* 目前定义 8 种小部件，可动态注册。
* 可自定义小部件满足各种业务需求。
* 支持自定义校验，自定义错误信息文本
* 基于 Grid 栅格系统，根据 ui.grid 配置自动完成布局。

## 如何阅读
* 代码以 `schema.` 开头的表示 JSON Schema 对象属性
* 代码以 `ui.` 开头的表示 UI 属性
* 所有的部件都以对象路径的方式检索，格式为 `a.b[0].c`

## 如何使用
如果使用antd库，则引入对应的 `./lib/antd`，如果使用KPC库，则引入 `./lib/kpc`，目前kpc部件库尚未完善。

```tsx
import React from 'react';
import 'antd/dist/antd.css';
import {FormProperty, WidgetProperty, SF, Schema} from './lib';
import './lib/antd';

function App() {
    const sf = React.useRef(new FormProperty());

    const submit = () => {
		if(sf.current.validates()) {
            console.log("submit", sf.current.getValues());
        }
	}

    const schema: Schema = {
		properties: {
			name: { 
				type: "string",
				title: "姓名",
			},
			email: { 
				type: "string",
				format: "email",
				title: "邮箱",
			},
		},
		required: ["name", "email"],
	}

     return (
		<div>
			<SF schema={schema} ref={sf} />
			<button onClick={submit}>提交</button>
		</div>
	)
}
```

## API

### **SF**
表单组件

参数    |说明   |类型   |默认值 
:--|:--|:--|:-- 
schema  |必填项 JSON Schema     |Schema     |-

使用 ref 获取表单的 FormProperty 以与表单交互。

### **FormProperty**
表单状态管理工具，允许在外部与表单交互。

属性/方法   |说明      |类型        |默认值
:--|:--|:--|:-- 
schema      |表单的 schema 对象，已去除 $ref。   |`() => Schema`      |-
getValues   |获取表单当前值     |`() => IFormData`   |-
setValues   |设置表单当前值，触发表单的 ui.onChange事件     |`(values: IFormData) => void`    |-
resetValues |重置为初始值 schema.default , 触发表单的 ui.onChange事件      |`() => void`      |-
validates   |触发 [ajv](https://github.com/ajv-validator/ajv) 验证，同时触发表单和所有部件的ui.onValidate事件   |`() => void`     |-
getProperty |根据对象路径获取部件的 WidgetProperty 以与部件交互     |`(path: string) => WidgetProperty`   |-
getValue    |根据对象路径获取部件的当前值   |`(path: string) => SFValue`  |-

### **WidgetProperty**
部件状态管理工具，允许在外部与部件交互。

属性/方法   |说明      |类型        |默认值
:--|:--|:--|:-- 
value       |获取部件的当前值     |`() => SFValue`    |-
setValue    |设置部件的当前值     |`(value: SFValue) => void`   |-
propertyName    |获取部件的在 schema 中的键值   |`() => string`   |-
reset       |重置部件的当前值 schema.default，优先级高于表单的 schema.default   |`() => void` |-
setError    |设置部件的错误信息     |`(error: string) => void`    |-
resetError  |清除部件的错误信息     |`() => void`     |-
setSchema   |设置当前部件的 schema 信息, 部件的 schema 仅包含表单 schema 中对应该部件的声明部分  |`(schema: Schema) => void`  |-
setUI       |设置当前部件的 ui 信息     |`<UI extends SCUI>(ui: UI) => void`  |-
path        |获取当前部件的对象路径     |`() => string` |-
formProperty    |获取表单 formProperty  |`() => FormProperty`   |-

### **WidgetRegistry**
部件注册管理工具

属性/方法   |说明      |类型        |默认值
:--|:--|:--|:--
register    |根据名称注册部件，解析 schema 时会根据 `ui.widget || schema.type ` 规则查找对应名称的部件，即如果没有 ui.widget 字段则会使用 schema.type 字段去查找，如果名称未注册则会使用 widgetRegistry.setDefault 设置的默认部件   |`(name: string, widget: WidgetType) => void`   |-
setDefault  |设置默认部件，如果使用未注册的部件，默认使用此值   |`(widget: WidgetType) => void`   |-
get     |根据名称获取部件，缺省则返回默认值   |`(name: string) => WidgetType`   |-
registrySF  |注册 sf 表单，每个组件库都应该注册自己的 form 组件，例如 lib/antd/form.tsx 会调用该方法自动注册 |`(name: string, sf: WidgetType) => void`   |-
getSF       |获取 sf 表单，未注册会显式抛出异常     |(name: string) => WidgetType   |-

### **Widget组件**
```tsx
Widget<UI extends SCUI> extends React.Component<WidgetProps<UI>>
```

所有的 class 部件都应该继承此类，以使用 widgetProperty工具。

### **useWidget**
```tsx
useWidget<UI extends SCUI>(props: WidgetProps<UI>)
```

所有的 function 部件都应该使用此 hook ，以使用 widgetProperty 工具。

### **SchemaUtil**
JSON Schema 语法解析工具

属性/方法   |说明      |类型        |默认值
:--|:--|:--|:--
getSchema   |根据对象路径获取 schema 节点   |`(schema: Schema, path: string) => SchemaNode` |-
ignoreNode  |深度搜索时忽略的节点列表，默认忽略 ui 节点    |`(key: string, node: SchemaNode) => boolean`    |-
eliminateRef    |将 schema 中的 $ref 语法替换成对应的 schema，递归调用，支持 $ref 路径和 $id 的引用方式，不支持跨文件引用，$ref 路径必须符合 [JSON Schema 标准](http://json-schema.org/understanding-json-schema/structuring.html)。 |`(schema: Schema, node: SchemaNode = schema) => void` |-
parseRef    |解析 $ref  |`(schema: Schema, ref: string) => void`    |-
searchSchemaByRef   |根据 $ref 路径搜索     |-  |-
searchSchemaById    |根据 $ref $id 搜索     |-  |-
deepSearchByRef     |根据 $ref 路径深度优先搜索     |-      |-
deepSearchById      |根据 $ref $id 深度优先搜索 |-  |-

### **Schema**
在符合 JSON Schema 标准的基础上加入 ui 配置，每个部件的 ui 配置都不相同，但共同继承 SCUI，ui 节点包括 grid 部件配置、自定义错误信息配置、公共事件等。

```typescript
export interface Schema extends SchemaNumber, SchemaString, SchemaObject, SchemaArray {
    [key: string]: any;
    $schema?: string;
    type?: SchemaType;

    /* Structuring a complex schema */
    definitions?: {
        [key: string]: Schema;
    }
    $id?: string;
    $ref?: string;
   
    /* Generic keywords */
    title?: string;
    description?: string;
    default?: any;
    examples?: any[];
    $comment?: string;
    readOnly?: boolean;

    enum?: SchemaEnumType;
    const?: any;

    /* Media: string-encoding non-JSON data */
    contentMediaType?: string;
    contentEncoding?: '7bit' | '8bit' | 'binary' | 'quoted-printable' | 'base64';

    /* Combining schemas */
    allOf?: Schema[];
    anyOf?: Schema[];
    oneOf?: Schema[];
    not?: Schema;

    /* Applying subschemas conditionally */
    if?: Schema;
    then?: Schema;
    else?: Schema;

    ui?: SCUI;
}

export interface SCUI {
    [key: string]: any;
    widget?: string;
    style?: CSSProperties;
    className?: string;
    grid?: SCGrid;
    errors?: {
        [keyword: string]: string;
    };
    onValidate?: (values: any) => boolean; 
}

export interface SCGrid {
    hideLabel?: boolean;
    labelAlign?: 'left' | 'right' | 'center';
    labelCol?: number;
    labelWidth?: string;
    labelStyle?: CSSProperties;
    controlCol?: number;
    controlOffset?: number;
    controlWidth?: string;
    controlStyle?: CSSProperties;
}
```

配置项    |说明   |类型   |默认值 
:--|:--|:--|:-- 
type    |数据类型，如果缺省 ui.widget 则会使用这个字段查找部件   |`'number' | 'string' | 'boolean' | 'object' | 'array' | 'null'`    |-
title   |解析为 FormItem 的 label       |string     |-
description     |暂不支持   |string  |-
default     |解析为部件的默认值，如果出现在顶层，则解析为表单的默认值。 |any  |-
readOnly    |暂不支持   |boolean  |-
ui          |表单或部件的 ui 配置，最顶部的 ui 会解析为表单配置，节点的 ui 会解析为部件的 ui 配置   |`SCUI`     |-

### **使用 $ref**
$ref 的值必须以 # 开头，后面跟 schema 的路径。

```typescript
schema: Schema = {
    properties: {
        name: {
            type: 'string',
            title: '姓名',
            maxLength: 20,
        },
        alias: {
            $ref: "#/properties/name",
            title: "别名",
        },
    }
}
```

使用 $id 定位 ref，$id 值必须符合 JSON Schema 规范，即以 # 开头
```typescript
schema: Schema = {
    properties: {
        name: {
            type: 'string',
            title: '姓名',
            maxLength: 20,
            $id: "#name",
        },
        alias: {
            $ref: "#name",
            title: "别名",
        },
    }
}
```

### **ui**
表单或部件的 ui 配置，每个部件的 ui 配置都不相同，下面时所有部件都支持的公共配置。

配置项    |说明   |类型   |默认值 
:--|:--|:--|:-- 
widget      |部件类型，缺省会使用 schema.type   |string  |-
grid        |栅格布局配置       |`SCGrid`       |-
errors      |自定义错误信息配置， JSON Schema 校验过程中会生产一组错误信息，每一个错误都有一个固定的 keyword 来表示，使用 ui.errors 可覆盖默认的配置。
onValidate  |表单校验时触发，必须返回true，否则导致验证失败 |-  |-
style       |部件或表单样式     |-      |-
className   |部件或表单类名     |-      |-

### **ui.erros**
自定义错误信息配置

```typescript
schema: Schema = {
    properties: {
        email: {
            type: 'string',
            title: '邮箱',
            format: 'email',
            maxLength: 20,
            ui: {
                errors: {
                    required: '必填项'
                }
            }
        }
    }
}
```

### **ui.grid**
表单或者部件布局配置。

```typescript
export interface SCGrid {
    hideLabel?: boolean;
    labelAlign?: 'left' | 'right' | 'center';
    labelCol?: number;
    labelWidth?: string;
    labelStyle?: CSSProperties;
    controlCol?: number;
    controlOffset?: number;
    controlWidth?: string;
    controlStyle?: CSSProperties;
}
```
配置项    |说明   |类型   |默认值 
:--|:--|:--|:-- 
hideLabel      |隐藏部件的 label   |boolean  |false
labelAlign     |label 对齐方式       |`'left','center','right'`       |'right'
labelCol       |label 所占的栅格数    |number              |-
labelWidth     |label 宽度，可以被 labelStyle.width 覆盖            |string           |'auto'
labelStyle     |配置 label 的样式      |CSSProperties   |-
controlCol     |部件 control 所占的栅格数   |number  |-
controlOffset   |部件 control 栅格左移数    |number     |-
controlWidth    |部件 control 的宽度，可以被 controlStyle.width 覆盖    |string  |'auto'
controlStyle    |部件 control 的样式    |CSSProperties  |-


表单的 ui.grid 会作用于所有子部件，每个部件也可以定义自己的 ui.grid 配置。
```typescript
schema: Schema = {
    properties: {
        email: {
            type: 'string',
            title: '邮箱',
            format: 'email',
            maxLength: 20,
            ui: {
                grid: {
                    labelAlign: "left",
                    labelWidth: "120px",
                }
            }
        }
    },
    ui: {
        grid: {
            labelAlign: "right",
            labelWidth: "100px",
        }
    }
}
```

# 部件

## string 部件
string 类型默认使用 input 组件，可配置 ui.widget 使用其他组件。

ui 配置参考

```typescript
interface StringWidgetUI extends SCUI {
    placeholder?: string;
    disabled?: boolean;
    autocomplete?: 'on' | 'off';
    autofocus?: boolean;
    addonBefore?: string | ReactNode;
    addonAfter?: string | ReactNode;
    prefix?: string | ReactNode;
    suffix?: string | ReactNode;
    onChange?: (val: string) => void;
    onFocus?: (e: FocusEvent) => void;
    onBlur?: (e: FocusEvent) => void;
    onEnter?: (e: KeyboardEvent) => void;
}
```

使用 sting 部件，无需配置 ui.widget。

如下示例：姓名输入联动，自动回填到 alias 部件。

```ts
schema: Schema = {
    properties: {
        name: {
            type: "string",
            title: "姓名",
            maxLength: 10,
            ui: {
                placeholder: "请输入姓名",
                onChange: function(this: WidgetProperty, val: string) {
                    this.formProperty.getProperty("alias").setValue(val);
                }
            }
        },
        alias: {
            type: 'string',
            title: '别名',
            ui: {
                placeholder: "请输入别名",
            }
        },
        
    }
}
```

## number 部件
number 类型默认使用 InputNumber 组件，可配置 ui.widget 使用其他组件。

ui 配置参考

```ts
interface NumberWidgetUI extends SCUI {
    placeholder?: string;
    disabled?: boolean;
    autofocus?: boolean;
    formatter?: (val?: number | string) => string;
    parser?: (val?: string) => number;
    precision?: number;
    decimalSeparator?: string;
    step?: number | string;
    onChange?: (val?: string | number) => void;
    onEnter?: (e: KeyboardEvent) => void;
}
```

使用 number 部件无需配置 ui.widget.

```ts
schema: Schema = {
    properties: {
        age: {
            type: "number",
            title: "姓名",
            minimum: 10,
            maximum: 20,
        },
    }
}
```

## boolean 部件

boolean 类型默认使用 switch 组件，可通过 ui.widget 配置其他组件。

ui 配置参考

```ts
interface BooleanWidgetUI extends SCUI {
    disabled?: boolean;
    autoFocus?: boolean;
    checkedChildren?: string | ReactNode;
    unCheckedChildren?: string | ReactNode;
    onChange?: (checked: boolean) => void;
}
```

使用 boolean 部件无需配置 ui.widget.

```ts
schema: Schema = {
    properties: {
        isMarital: {
            type: "boolean",
            title: "已婚",
            default: false,
        },
    }
}
```


## select 部件

ui 配置参考

```ts
interface SelectWidgetUI extends SCUI {
    mode?: 'multiple' | 'tags';
    allowClear?: boolean;
    placeholder?: string;
    disabled?: boolean;
    autofocus?: boolean;
    showSearch?: boolean;
    options?: {label: string; value: SFValue;}[];
    onChange?: (val: string) => void;
    onFocus?: (e: FocusEvent) => void;
    onBlur?: (e: FocusEvent) => void;
    onSearch?: (e: SFValue) => void;
}
```

使用 select 部件，需配置 ui.widget = "select"。

```ts
schema: Schema = {
    properties: {
        province: {
            type: "string",
            title: "省份",
            ui: {
                widget: "select",
                placeholder: "请选择省份",
                options: [
                    {label: "北京", value: "bj"},
                    {label: "天津", value: "tj"},
                    {label: "上海", value: "sh"},
                ]
            }
        },
        isp: {
            type: 'array',
            title: '运营商',
            ui: {
                widget: "select",
                placeholder: "请选择运营商",
                mode: "multiple",
                options: [
                    {label: "移动", value: "cm"},
                    {label: "联通", value: "um"},
                    {label: "电信", value: "cn"},
                ]
            }
        },
        layer: {
            type: "number",
            title: "层级",
            ui: {
                widget: "select",
                placeholder: "请选择层级",
                optiosn: [
                    {label: "上层", value: 0},
                    {label: "中层", value: 1},
                    {label: "下层", value: 2},
                ]
            }
        }
    }
}
```

## object 部件
object 类型默认使用 card 组件，可配置 ui.widget 使用其他组件。

ui 配置参考

```ts
interface ObjectWidgetUI extends SCUI {
    bordered?: boolean;
    hoverable?: boolean;
    headStyle?: CSSProperties;
    bodyStyle?: CSSProperties;
}
```

object 可支持嵌套，object 也可配置 ui.grid，并且对该类型下的所有子部件都生效。

```ts
schema: Schema = {
    properties: {
        name: {
            type: "string",
        }
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
                zone: {
                    type: "string", 
                    title: "地区"
                },
            },
            required: ["province", "city"],
            ui: {
                grid: {
                    labelWidth: "70px"
                }
            },
        },
    }
}    
```

## checkbox.group 部件

ui 配置参考

```ts
interface CheckBoxGroupWidgetUI extends SCUI {
    disabled?: boolean;
    options?: (string | CheckboxOptionType)[];
    onChange?: (checkedValue: CheckboxValueType[]) => void;
}
```

使用 select 部件，需配置 ui.widget = "checkbox.group"。

```ts
schema: Schema = {
    properties: {
        province: {
            type: "array", 
            title: "省份", 
            default: "hb",
            ui: {
                widget: "checkbox.group",
                options: [
                    {label: "北京", value: "bj"},
                    {label: "黑龙江", value: "hlj"},
                    {label: "湖北", value: "hb"},
                ]
            }
        },
    }
}
```






