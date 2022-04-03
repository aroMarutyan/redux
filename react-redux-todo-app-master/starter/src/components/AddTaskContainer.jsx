import AddTaskForm from "./AddTaskForm";

import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "../styles/taskListStyles";

import React from "react";

const AddTaskContainer = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Add Task</AccordionTrigger>
        <AccordionContent>
          <AddTaskForm />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AddTaskContainer;
