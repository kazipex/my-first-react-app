type TaskbarProps = {
    onPageChange: (page: string) => void;
}

export default function TaskTray({ onPageChange }: TaskbarProps) {

    return (
        <div className="tasktray">
            <div>            
                <div className="task" onClick={() => onPageChange("home")}>HOME</div>
                <div className="task">TASK 2</div>
                <div className="task">TASK 3</div>
                <div className="task" onClick={() => onPageChange("settings")}>SETTINGS</div>
            </div>
        </div>
    )
}