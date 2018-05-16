import React from "react";
import { Item } from "./item";

export const List = ({ list, onItemClick, onClickLike, onAddingComment, onClickDelete }) => (
  <ul className="todo-list">
    {list.map(item => (
      <Item
        key={item.id}
        {...item}
        onClick={onItemClick}

        onClickLike={onClickLike}
        onAddingComment={onAddingComment}
        onClickDelete={onClickDelete}
      />
    ))}
  </ul>
);
