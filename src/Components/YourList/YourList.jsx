/*
    props.chore [
        { task: "first task", comment: "first comment", id: 1 },
        { task: "second task", comment: "second comment", id: 2 }
    ]
*/
function YourList(props) {
    const handleDelete = (event) => {
        debugger;
       props.deleteChore(event.target.dataset.id);
    }

    const choreItem = props.chores.map((chore) =>
        <li key={chore.id}>
            {chore.task}: {chore.comment}
            <button data-id={chore.id} onClick={handleDelete}>Delete</button>
        </li>
    )
    return <ul>{choreItem}</ul>
}

export default YourList;