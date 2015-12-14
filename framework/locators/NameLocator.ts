namespace et {
	
	export interface NameLocatorData extends LocatorData {
		name:string;
	}
	
	export class NameLocator extends Locator {
		name:string;
		parse(data:NameLocatorData,stage:egret.Stage) {
			super.parse(data,stage);
			this.name = data.name;
		}
	}
}