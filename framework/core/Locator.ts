namespace et {
	var locatorMap:Map<typeof Locator> = {};
	export class Locator implements etObject {
		stage:egret.Stage;
		execute():egret.DisplayObject {
			return null;
		}
		parse(data:LocatorData,stage:egret.Stage){
			this.stage = stage;
		}
		
		
		static parse(data:LocatorData,stage:egret.Stage) {
			
			var clazz = locatorMap[data.type];
			if(!clazz){
				et.error("condition.type.unknown","Unknown Condition type.")
			}
			var that = new clazz();
			that.parse(data,stage);
			return that;
		}
		
		static regLocator(type:string,clazz:typeof Locator){
			locatorMap[type] = clazz;
		}
	}
	
	export interface LocatorData {
		type:string;
	}
}