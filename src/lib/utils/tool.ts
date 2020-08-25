
export const _is = (o: any, types: string[]) => {
	return types.includes(Object.prototype.toString.call(o).slice(8, -1).toLowerCase());
}

