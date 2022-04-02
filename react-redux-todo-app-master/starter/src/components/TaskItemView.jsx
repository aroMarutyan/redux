import React from "react";

import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
  StyledCheck,
  StyledCross,
  StyledGear,
} from "../styles/taskListStyles";

const TaskItemView = ({ props }) => {
  const { title, category, priority, deadline, description, completed, id } =
    props;
  // const [edit, setEdit] = useState(false);
  // const dispatch = useDispatch();

  // const handleCompleteClick = () => {
  //   dispatch(completeTaskAsync({ id, completed: !completed }));
  // };
  // const handleDeleteClick = () => {
  //   dispatch(deleteTaskAsync({ id }));
  // };

  // const handleEditClick = () => {
  //   setEdit((v) => !v);
  // };

  console.log(id);

  return (
    <AccordionItem value={id}>
      <div style={{ display: "flex" }}>
        <AccordionTrigger>
          <div
            style={{
              display: "flex",
              alignItems: "space-between",
              width: "450px",
            }}
          >
            {title}
          </div>
        </AccordionTrigger>
        {/* <button>
          <StyledCheck />
        </button>
        <button onClick={() => console.log("click")}>
          <StyledCross />
        </button>
        <button onClick={() => console.log("click")}>
          <StyledGear />
        </button> */}
      </div>
      <AccordionContent>Description: {description}</AccordionContent>
      <AccordionContent>Priority: {priority}</AccordionContent>
      <AccordionContent>Category: {category}</AccordionContent>
      <AccordionContent>Deadline: {deadline}</AccordionContent>
    </AccordionItem>
  );
};

export default TaskItemView;

{
  /* <ul className={`ulst-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column justify-content-between">
          <span>
           
            {title}
          </span>
          <span>{category}</span>
          <span>{priority}</span>
          <span>{deadline}</span>
          <span>{description}</span>
        </div>
      </div>
    </ul> */
}
