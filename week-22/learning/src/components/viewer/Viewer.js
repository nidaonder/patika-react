import React from "react";
import { findItemById } from "../../helpers/utils";

const Viewer = ({ activeFolderId, list, changeFolder }) => {
  const data = findItemById([list], activeFolderId);
  return <div>viewer</div>
};

export default Viewer;
