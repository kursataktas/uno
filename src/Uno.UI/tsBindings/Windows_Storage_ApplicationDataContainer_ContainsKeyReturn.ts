/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace Windows.Storage
{
	export class ApplicationDataContainer_ContainsKeyReturn
	{
		/* Pack=4 */
		public ContainsKey : boolean;
		public marshal(pData:number)
		{
			Module.setValue(pData + 0, this.ContainsKey, "i32");
		}
	}
}
