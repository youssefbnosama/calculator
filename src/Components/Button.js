export default function Button(props){
    return(
        <button onClick={props.onClick} className={props.class}>{props.value}</button>
    )
}