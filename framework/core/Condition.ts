namespace et {
	var conditionMap:Map<typeof Condition> = {};
	export class Condition implements etObject {
		stage:egret.Stage;
		parse(json:ConditionData,stage:egret.Stage){
			this.stage = stage;
		}
		execute():boolean {
			return this.stage != undefined;
		}
		
		static regContidion(type:string,clazz:typeof Condition){
			conditionMap[type] = clazz;
		}
		
		static parse(json:ConditionData,stage:egret.Stage):Condition{
			var clazz = conditionMap[json.type];
			if(!clazz){
				et.error("condition.type.unknown","Unknown Condition type.")
			}
			var that = new clazz();
			that.parse(json,stage);
			return that;
		}
	}
	
	export interface ConditionData {
		type:string;
	}
}