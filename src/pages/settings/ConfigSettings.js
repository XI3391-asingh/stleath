import React, { useEffect, useState } from "react";

import {
  Card,
  collapseClasses,
  Snackbar,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
  FormLabel,
  RadioGroup,
  IconButton,
  Radio,
  Button,
  FormHelperText,
  FormControlLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import { Chip } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import "./styles.css";
import CompetitorAnalysis from "../../components/config-settings/competitor-analysis/CompetitorAnalysis";
import ServiceIssue from "../../components/config-settings/service-issue/ServiceIssue";
import VoiceEnergyCard from "../../components/config-settings/voice-energy/VoiceEnergyCard";
import SilenceDetection from "../../components/config-settings/silence-detection/SilenceDetection";
import { useDispatch, useSelector } from "react-redux";
// import indexService from "../../service/index";
import { toast } from "react-toastify";
import settingServices from "../../service/settingServices";
import {
  ADD_SETTING_CONFIGURATION,
  GET_SETTING_CONFIGURATION,
  ADD_NEW_EVALUATION_QUESTION,
  GET_EVALUATION_QUESTIONS_OF_QA,
  GET_EVALUATION_QUESTIONS_OF_MANAGER,
  DELETE_EVALUATION_QUESTION_BY_ID,
} from "../../store/type";
import Swal from "sweetalert2";

function ConfigSettings() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [openQuestionModal, setopenQuestionModal] = useState(false);
  const [serviceIssueRule, setServiceIssueRule] = useState([]);
  const [productIssueRule, setProductIssueRule] = useState([]);
  const [manageStateCount, setmanageStateCount] = useState(0);
  const [questionText, setquestionText] = useState("");
  const [repeatCallVolumeRule, setRepeatCallVolumeRule] = useState([]);
  const [callOpeningRule, setCallOpeningRule] = useState([]);
  const [callClosingRule, setCallClosingRule] = useState([]);
  const [warrantIssueRule, setWarrantIssueRule] = useState([]);
  const [radioForRole, setradioForRole] = useState("MANAGER");
  const [agentIdentificationRule, setAgentIdentificationRule] = useState([]);
  const [priceRule, setPriceRule] = useState([]);
  const [holdTimeViolationRule, setHoldTimeViolationRule] = useState([]);
  const [holdTimeViolationThreshold, setHoldTimeViolationThreshold] =
    useState();
  const [voiceEnergyThreshold, setVoiceEnergyThreshold] = useState();
  const {
    newEvaluationQuestion,
    evaluationQuestionsOfManager,
    evaluationQuestionsOfQA,
    deleteEvaluationQuestion,
  } = useSelector((store) => store.setting);

  console.log(
    evaluationQuestionsOfManager,
    "newEvaluationQuestion",
    evaluationQuestionsOfQA
  );
  const [domainAccuracy, setDomainAccuracy] = useState([]);
  const [competitorAnalysis, setCompetitorAnalysis] = useState([
    { label: "", score: "" },
  ]);
  const [escalationRule, setEscalationRule] = useState([
    { label: "", score: "" },
  ]);

  useEffect(() => {
    getSettingConfiguration();
  }, []);

  useEffect(() => {
    getEvaluationQuestionsByType({ type: "QA" });
    getEvaluationQuestionsByType({ type: "MANAGER" });
  }, [manageStateCount]);

  // console.log(deleteEvaluationQuestion,'deleteEvaluationQuestion')

  const getSettingConfiguration = () => {
    settingServices.getSettingConfiguration().then((resp) => {
      if (resp.isSuccess) {
        dispatch({
          type: GET_SETTING_CONFIGURATION,
          payload: resp?.data,
        });
        setServiceIssueRule(resp?.data?.service_issue_rule);
        setProductIssueRule(resp?.data?.product_issue_rule);
        setRepeatCallVolumeRule(resp?.data?.repeat_call_volume_rule);
        setCallOpeningRule(resp?.data?.call_opening_rule);
        setCallClosingRule(resp?.data?.call_closing_rule);
        setWarrantIssueRule(resp?.data?.warrant_issue_rule);
        setAgentIdentificationRule(resp?.data?.agent_identification_rule);
        setPriceRule(resp?.data?.pricing_rule);
        setDomainAccuracy(resp?.data?.domain_accuracy_rule);
        setHoldTimeViolationRule(resp?.data?.hold_time_violation_rule);
        setHoldTimeViolationThreshold(
          resp?.data?.hold_time_violation_threshold
        );
        setVoiceEnergyThreshold(resp?.data?.voice_energy_threshold);
        if (
          resp?.data?.label_rule &&
          resp?.data?.label_rule.length &&
          resp?.data?.label_rule[0]
        ) {
          let comparisonobj = resp?.data?.label_rule[0].comparison;
          let labelval = comparisonobj.label;
          let comparison_rule = [];
          for (var i = 0; i < labelval.length; i++) {
            comparison_rule.push({
              label: labelval[i],
              score: comparisonobj.score[i],
            });
          }
          setCompetitorAnalysis(comparison_rule);
        }

        if (
          resp?.data?.label_rule &&
          resp?.data?.label_rule.length &&
          resp?.data?.label_rule[1]
        ) {
          let escalationobj = resp?.data?.label_rule[1].escalation;
          let labelval = escalationobj.label;
          let escalation_rule = [];
          for (var i = 0; i < labelval.length; i++) {
            escalation_rule.push({
              label: labelval[i],
              score: escalationobj.score[i],
            });
          }
          setEscalationRule(escalation_rule);
        }
      }
    });
  };

  const getEvaluationQuestionsByType = (input) => {
    settingServices.getEvaluationQuestions(input).then((resp) => {
      if (resp.isSuccess && input.type == "QA") {
        dispatch({
          type: GET_EVALUATION_QUESTIONS_OF_QA,
          payload: resp.data,
        });
      } else if (resp.isSuccess && input.type == "MANAGER") {
        dispatch({
          type: GET_EVALUATION_QUESTIONS_OF_MANAGER,
          payload: resp.data,
        });
      }
    });
  };

  const onSubmit = () => {
    let comparisonrule = {
      label: [],
      score: [],
    };
    if (competitorAnalysis && competitorAnalysis.length) {
      comparisonrule.label = [...competitorAnalysis.map((obj) => obj.label)];
      comparisonrule.score = [...competitorAnalysis.map((obj) => obj.score)];
    }
    let escalationrule = {
      label: [],
      score: [],
    };

    if (escalationRule && escalationRule.length) {
      escalationrule.label = [...escalationRule.map((obj) => obj.label)];
      escalationrule.score = [...escalationRule.map((obj) => obj.score)];
    }

    const payload = {
      agent_identification_rule: agentIdentificationRule,
      call_opening_rule: callOpeningRule,
      call_closing_rule: callClosingRule,
      service_issue_rule: serviceIssueRule,
      product_issue_rule: productIssueRule,
      warrant_issue_rule: warrantIssueRule,
      repeat_call_volume_rule: repeatCallVolumeRule,
      label_rule: [
        {
          comparison: comparisonrule,
        },
        {
          escalation: escalationrule,
        },
      ],
      pricing_rule: priceRule,
      domain_accuracy_rule: domainAccuracy,
      voice_energy_threshold: voiceEnergyThreshold,
      hold_time_violation_threshold: holdTimeViolationThreshold,
      hold_time_violation_rule: holdTimeViolationRule,
    };
    settingServices.addSettingConfiguration(payload).then((resp) => {
      if (resp.isSuccess) {
        setOpen(true);
        dispatch({
          type: ADD_SETTING_CONFIGURATION,
          payload: resp?.data,
        });
      }
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleRadioChange = (e) => {
    setradioForRole(e.target.value);
  };

  const handleAddQuestion = () => {
    // const res=dispatch()
    let input = {
      title: questionText,
      type: radioForRole,
      options: ["Yes", "No", "N/A"],
    };

    settingServices.addNewQuestion(input).then((resp) => {
      if (resp.isSuccess) {
        dispatch({
          type: ADD_NEW_EVALUATION_QUESTION,
          payload: resp?.data,
        });
        setmanageStateCount(manageStateCount === 0 ? 1 : 0);

        toast.success("Question Added Successfully");
      } else {
        toast.error("Error while uploading question");
      }
    });
    setradioForRole("MANAGER");
    setquestionText("");
    closeAddQuestionModal();
  };

  function handleQuestionDelete(input) {
    settingServices.deleteEvaluationQuestion(input).then((resp) => {
      if (resp.isSuccess) {
        dispatch({
          type: DELETE_EVALUATION_QUESTION_BY_ID,
          payload: resp?.data,
        });
        toast.success("Question Deleted Successfully");

        setmanageStateCount(manageStateCount === 0 ? 1 : 0);
      } else {
        toast.error("Error while deleting question");
      }
    });
  }
  const openAddQuestionModal = () => {
    setopenQuestionModal(true);
  };
  const closeAddQuestionModal = () => {
    setopenQuestionModal(false);
  };

  return (
    <>
      <div className="config-settings-page-layout">
        <Typography variant="h4" className="page-main-heading">
          Configuration Settings
        </Typography>
        <Card className="config-page-card-layout">
          <div className="config-page-settings-cards">
            <ServiceIssue
              title="Service Issue"
              data={[]}
              defaultdata={serviceIssueRule || []}
              onchangedata={(data) => setServiceIssueRule(data)}
            />
            <ServiceIssue
              title="Product Issue"
              data={[]}
              defaultdata={productIssueRule || []}
              onchangedata={(data) => setProductIssueRule(data)}
            />
          </div>
          <div className="config-page-settings-cards">
            <ServiceIssue
              title="Agent Identification"
              data={[]}
              defaultdata={agentIdentificationRule || []}
              onchangedata={(data) => setAgentIdentificationRule(data)}
            />
            <ServiceIssue
              title="Repeat Calls Volume"
              data={[]}
              defaultdata={repeatCallVolumeRule || []}
              onchangedata={(data) => setRepeatCallVolumeRule(data)}
            />
          </div>
          <div className="config-page-settings-cards">
            <ServiceIssue
              title="Opening Call"
              data={[]}
              defaultdata={callOpeningRule || []}
              onchangedata={(data) => setCallOpeningRule(data)}
            />
            <ServiceIssue
              title="Closing Call"
              data={[]}
              defaultdata={callClosingRule || []}
              onchangedata={(data) => setCallClosingRule(data)}
            />
          </div>
          <div className="config-page-settings-cards">
            <ServiceIssue
              title="Warranty & Others"
              data={[]}
              defaultdata={warrantIssueRule || []}
              onchangedata={(data) => setWarrantIssueRule(data)}
            />
            <ServiceIssue
              title="Pricing"
              data={[]}
              defaultdata={priceRule || []}
              onchangedata={(data) => setPriceRule(data)}
            />
          </div>
          <div className="config-page-settings-cards">
            <VoiceEnergyCard
              title="Voice Energy"
              defaultdata={voiceEnergyThreshold}
              onchangedata={(data) => setVoiceEnergyThreshold(data)}
            />
            <SilenceDetection
              title="Hold Time Violations"
              defaultdata={holdTimeViolationRule || []}
              onchangedata={(data) => setHoldTimeViolationRule(data)}
              defaultholdtimethresholddata={holdTimeViolationThreshold}
              onchangeholdtimethresholddata={(data) =>
                setHoldTimeViolationThreshold(parseFloat(data))
              }
            />
          </div>
          <div className="config-page-settings-cards">
            <CompetitorAnalysis
              title="Competitor Analysis"
              defaultdata={competitorAnalysis}
              onchangedata={(data) => setCompetitorAnalysis(data)}
            />
            <CompetitorAnalysis
              title="Escalation"
              defaultdata={escalationRule}
              onchangedata={(data) => setEscalationRule(data)}
            />
          </div>
          <div className="config-page-settings-cards">
            <ServiceIssue
              title="Domain Accuracy"
              data={[]}
              defaultdata={domainAccuracy || []}
              onchangedata={(data) => setDomainAccuracy(data)}
            />
          </div>
          <div>
            <button
              type="button"
              onClick={() => onSubmit()}
              className="config-page-settings-save-button"
            >
              SAVE
            </button>
          </div>
        </Card>

        <div>
          <Card className="config-page-evaluation-card">
            <Typography variant="h5">Evaluation Form</Typography>
            <div>
              <div className="config-page-evaluation-card-question-container">
                <Card className="config-page-evaluation-card-questions-layout">
                  <Typography
                    variant="h6"
                    className="config-page-evaluation-card-questions-heading"
                  >
                    Manager's Questions
                  </Typography>

                  <div className="config-page-evaluation-card-questions">
                    {evaluationQuestionsOfManager?.map((data, index) => {
                      return (
                        <div className="config-page-evaluation-card-question">
                          <div>
                            <Chip
                              label={index + 1}
                              className="config-page-evaluation-question-chip"
                            />
                            <span>{data.title}</span>
                          </div>
                          <div onClick={() => handleQuestionDelete(data.id)}>
                            <IconButton aria-label="delete" color="primary">
                              <DeleteIcon sx={{ color: "gray" }} />
                            </IconButton>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>

                <Card className="config-page-evaluation-card-questions-layout">
                  <Typography
                    variant="h6"
                    className="config-page-evaluation-card-questions-heading"
                  >
                    QA's Questions
                  </Typography>
                  <div className="config-page-evaluation-card-questions">
                    {evaluationQuestionsOfQA?.map((data, index) => {
                      return (
                        <div className="config-page-evaluation-card-question">
                          <div>
                            <Chip
                              label={index + 1}
                              className="config-page-evaluation-question-chip"
                            />
                            <span>{data.title}</span>
                          </div>
                          <div onClick={() => handleQuestionDelete(data.id)}>
                            <IconButton aria-label="delete" color="primary">
                              <DeleteIcon sx={{ color: "gray" }} />
                            </IconButton>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </div>

              <div className="config-page-evaluation-card-right">
                <button
                  className="config-page-settings-save-button"
                  onClick={openAddQuestionModal}
                >
                  Add New Question
                </button>

                {/* Add new question Modal */}

                <Modal open={openQuestionModal} onClose={closeAddQuestionModal}>
                  <Box className="config-page-addQuestion-fields-container">
                    <div className="config-page-addQuestion-fields">
                      <FormControl>
                        <FormLabel
                          id="demo-radio-buttons-group-label"
                          style={{ color: "black" }}
                        >
                          <Typography variant="h6">Role:</Typography>
                        </FormLabel>

                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          defaultValue="MANAGER"
                          onChange={handleRadioChange}
                        >
                          <FormControlLabel
                            value="QA"
                            control={
                              <Radio
                                sx={{
                                  color: "#6b1d5e",
                                  "&.Mui-checked": {
                                    color: "#6b1d5e",
                                  },
                                }}
                              />
                            }
                            label="QA"
                          />
                          <FormControlLabel
                            value="MANAGER"
                            control={
                              <Radio
                                sx={{
                                  color: "#6b1d5e",
                                  "&.Mui-checked": {
                                    color: "#6b1d5e",
                                  },
                                }}
                              />
                            }
                            label="Manager"
                          />
                          {/* <FormControlLabel
                            value="Both"
                            control={
                              <Radio
                                sx={{
                                  color: "#6b1d5e",
                                  "&.Mui-checked": {
                                    color: "#6b1d5e",
                                  },
                                }}
                              />
                            }
                            label="Both"
                          /> */}
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div className="config-page-addQuestion-fields">
                      <Typography variant="h6">Question:</Typography>
                      <Box component="form" noValidate autoComplete="off">
                        <div>
                          <textarea
                            onChange={(e) => setquestionText(e.target.value)}
                            class="form-control"
                            value={questionText}
                            id="message-text"
                          />
                        </div>
                      </Box>
                    </div>
                    <div className="config-page-settings-addQuestion-buttons-container">
                      <button
                        className="config-page-settings-cancel-button"
                        onClick={closeAddQuestionModal}
                      >
                        Cancel
                      </button>
                      {questionText && radioForRole ? (
                        <button
                          className="config-page-settings-save-button"
                          onClick={handleAddQuestion}
                        >
                          Submit
                        </button>
                      ) : (
                        <button className="config-page-settings-save-button-disabled">
                          Submit
                        </button>
                      )}
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Setting configuration save successfully."
      />
    </>
  );
}

export default ConfigSettings;
