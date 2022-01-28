import React, { useEffect, useState } from "react";

import { Card, Grid } from "@mui/material";

import CallsTable from "../../components/shared-components/tables/calls-table/CallsTable";

import "./styles.css";
import { useLocation } from "react-router-dom";

import indexService from "../../service/index";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_CALLS } from "../../store/type";
import SidebarFilters from "../../components/filters/sidebar-filters/SidebarFilters";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { typography } from "@mui/material/node_modules/@mui/system";

function Calls() {
  const path = useLocation();
  const dispatch = useDispatch();
  const { calls } = useSelector((store) => store.call);
  let query = new URLSearchParams(path?.search);
  let feedbackquery = query.get("feedback");

  useEffect(() => {
    getCall();
  }, []);

  const getCall = () => {
    // TODO: recheck Jayanth
    // indexService
    //   .getReport(query.get("call_emotion") ? query.get("call_emotion") : "")
    //   .then((resp) => {
    //     if (resp.isSuccess) {
    //       let feeddata = resp?.data;
    //       if (feeddata?.length) {
    //         let calldata = [];
    //         if (feedbackquery) {
    //           calldata = feeddata.filter(
    //             (resp) => resp.feedback === `${feedbackquery} Feedback`
    //           );
    //         } else {
    //           calldata = feeddata;
    //         }
    //         dispatch({
    //           type: GET_ALL_CALLS,
    //           payload: {
    //             total: feeddata?.length,
    //             filter: calldata?.length,
    //             data: calldata,
    //           },
    //         });
    //       }
    //     }
    //   });
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="calls-page-layout">
      <Card className="calls-page-card-body-layout">
        <div className="calls-page-card-body-design">
          <div>
            <SidebarFilters />
          </div>
          <div className="calls-page-card-main-body">
            <div className="calls-page-call-details">
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  {/* <Item> */}
                  {calls?.filter} of {calls?.total} Calls
                  {/* </Item> */}
                </Grid>
                <Grid item xs={5} className="calls-page-legends">
                  {/* <Item> */}
                  {/* {calls?.filter} of {calls?.total} Calls */}
                  {/* </Item> */}
                  <typography className="legend-1">
                    <span>1</span>Happy
                  </typography>{" "}
                  &nbsp;
                  <typography className="legend-2">
                    <span>2</span>Angry
                  </typography>{" "}
                  &nbsp;
                  <typography className="legend-3">
                    <span>3</span>Dissapointed
                  </typography>{" "}
                  &nbsp;
                  <typography className="legend-4">
                    <span>4</span>Hold time Violation
                  </typography>{" "}
                  &nbsp;
                  <typography className="legend-5">
                    <span>5</span>Voice Energy Deviation
                  </typography>{" "}
                  &nbsp;
                </Grid>
              </Grid>
            </div>
            <hr className="calls-page-divider" />
            <div className="calls-page-table-layout">
              {calls?.data?.length && <CallsTable data={calls?.data} />}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Calls;
