const Clock = (props) =>
{
    return(
        <p className={props.class}>
            {new Date().toLocaleTimeString()}
        </p>
    );
}

export default Clock;