import React, { useState } from "react";

import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import CloseIcon from "@mui/icons-material/Close";

import "./styles.css";
import { Divider, Drawer, IconButton, Typography } from "@material-ui/core";
import EvaluationFormOptions from "./EvaluationFormOptions";

function EvaluationForm({
  controlWidth,
  questionsanswersdata,
  managerqueans,
  evaluationFormCallback,
}) {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    controlWidth("73%");
  };

  const handleDrawerClose = () => {
    setOpen(false);
    controlWidth("100%");
  };

  return (
    <div>
      <button
        variant="contained"
        className="sidebar-filter-btn"
        onClick={handleDrawerOpen}
        className="calls-page-evaluationform-button"
        sx={{ ...(open && { display: "none" }) }}
      >
        <ContentPasteIcon className="calls-page-evaluationform-button-icon" />
        Evaluation Form
      </button>
      <Drawer variant="persistent" anchor="right" open={open}>
        <div container className="calls-page-evaluationform-header">
          <Typography
            variant="subtitle1"
            className="calls-page-evaluationform-heading"
          >
            Evaluation Form
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />
        <EvaluationFormOptions
          questionsanswersdata={questionsanswersdata}
          evaluationFormCallback={evaluationFormCallback}
          managerqueans={managerqueans}
        />
      </Drawer>
    </div>
  );
}

export default EvaluationForm;
