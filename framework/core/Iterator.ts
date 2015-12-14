namespace et {
	export class Iterator {
		root:egret.DisplayObjectContainer;
		private nextIndex:number;
		private current:egret.DisplayObject;
		next():egret.DisplayObject{
			var current = this.current;
			if(current instanceof egret.DisplayObjectContainer && current.numChildren>0){
				this.current = current.getChildAt(0);
				this.nextIndex = 1;
				return this.current;
			}
			else if(current.parent && current.parent.numChildren > this.nextIndex){
				this.current = current.parent.getChildAt(this.nextIndex);
				this.nextIndex++;
				return this.current;
			}
			else if(current.parent) {
				let local = current;
				while(local.parent){
					let parent = local.parent.parent;
					if(!parent)
						break;
					let nextIndex = parent.getChildIndex(local.parent)+1;
					if(parent.numChildren>nextIndex){
						this.current = parent.getChildAt(nextIndex);
						this.nextIndex = nextIndex+1;
						return this.current;
					}
					else{
						local = current.parent;
					}
				}
				return null;
			}
		}
	}
}