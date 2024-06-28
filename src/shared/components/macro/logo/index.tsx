import logo from '../../../../internal/img/datafusion_logo_3.svg';
interface Props{
    width?:number,
    height?:number,
    className?:string,
    showText?: boolean,
    textLabel?:string
}
const Index = (props: Props) => {
    return (
        <div className={props.className}>
           <img src={logo} width={props.width} height={props.height}/>
           {props.showText && <div className="pl-2">{props.textLabel}</div> || ''}
        </div>
    );
};
export default Index;