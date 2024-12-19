"use client";
// import { Task } from "@/types/Task";
// import { useState } from "react";

// const defaultTask: Task = {
//   id: Date.now(),
//   title: "Default Title",
//   description: "Default Description",
//   dueDate: new Date().toISOString().split("T")[0],
//   isCompleted: false,
// };
export default function Boards() {
  return (
    <aside className="content">
      <h1>Design Boards</h1>
      {/* <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>{task.title}</p>
            <p>{task.description}</p>
            <p>{task.dueDate}</p>
          </li>
        ))}
      </ul> */}
    </aside>
  );
}
