const TaskRow = ({title, storyPoints}) => {
    const handleDelete = () => {
        
    }
    return (
        <div className="task-row">
            <button className="task-check"></button>
            <span className="task-title">
                {title}
            </span>
        <div className="estimate-stepper">
            <button className="stepper-btn></button>
            <span className="stepper-value"{storyPoints}</span>
            <button className="stepper-btn">+</button>
        </div>
        <button className="quic-bump">+2</button>
        <button className="icon-danger">x</button>
        </div>
    )
}

export default TaskRow