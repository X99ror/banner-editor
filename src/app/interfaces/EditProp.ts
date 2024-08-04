export interface EditProp{
    open:boolean;
    onClose: ()=>void;
    banner:any;
    onSave: (updatedBaanner:any)=>void;
}