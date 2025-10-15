"use client";
import React from "react";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";


import {
  DropdownWrapper,
  DropdownHeader,
  DropdownList,
  DropdownItem,
} from "./styled";

export default function SizeDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select Size");

  const sizes = ["Small", "Medium", "Large"];

  return (
    <DropdownWrapper>
      <DropdownHeader onClick={() => setOpen(!open)}>
        {selected}
        <FaCaretDown />
      </DropdownHeader>
      {open && (
        <DropdownList>
          {sizes.map((s) => (
            <DropdownItem
              key={s}
              onClick={() => {
                setSelected(s);
                setOpen(false);
              }}
            >
              {s}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
}
