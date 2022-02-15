import React, { useEffect, useState } from 'react';

import { Card, collapseClasses, Snackbar, Typography } from '@mui/material';
import { Chip } from '@material-ui/core';
import './styles.css';
import CompetitorAnalysis from '../../components/config-settings/competitor-analysis/CompetitorAnalysis';
import ServiceIssue from '../../components/config-settings/service-issue/ServiceIssue';
import VoiceEnergyCard from '../../components/config-settings/voice-energy/VoiceEnergyCard';
import SilenceDetection from '../../components/config-settings/silence-detection/SilenceDetection';
import { useDispatch, useSelector } from 'react-redux';
import indexService from '../../service/index';
import {
	ADD_SETTING_CONFIGURATION,
	GET_SETTING_CONFIGURATION,
} from '../../store/type';
import Swal from 'sweetalert2'

function ConfigSettings() {
	const dispatch = useDispatch();
	const [open, setOpen] = React.useState(false);
	const [serviceIssueRule, setServiceIssueRule] = useState([]);
	const [productIssueRule, setProductIssueRule] = useState([]);
	const [lastQuestionValue, setLastQuestionValue] = useState('')
	const [repeatCallVolumeRule, setRepeatCallVolumeRule] = useState([]);
	const [callOpeningRule, setCallOpeningRule] = useState([]);
	const [callClosingRule, setCallClosingRule] = useState([]);
	const [warrantIssueRule, setWarrantIssueRule] = useState([]);
	const [agentIdentificationRule, setAgentIdentificationRule] = useState([]);
	const [priceRule, setPriceRule] = useState([]);
	const [holdTimeViolationRule, setHoldTimeViolationRule] = useState([]);
	const [holdTimeViolationThreshold, setHoldTimeViolationThreshold] =
		useState();
	const [voiceEnergyThreshold, setVoiceEnergyThreshold] = useState();
	const [domainAccuracy, setDomainAccuracy] = useState([]);
	const [competitorAnalysis, setCompetitorAnalysis] = useState([
		{ label: '', score: '' },
	]);
	const [escalationRule, setEscalationRule] = useState([
		{ label: '', score: '' },
	]);

	useEffect(() => {
		getSettingConfiguration();
	}, []);

	const getSettingConfiguration = () => {
		indexService.getSettingConfiguration().then((resp) => {
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
		indexService.addSettingConfiguration(payload).then((resp) => {
			if (resp.isSuccess) {
				setOpen(true);
				dispatch({
					type: ADD_SETTING_CONFIGURATION,
					payload: resp?.data,
				});
			}
		});
	};
	const evaluationQuestions = [{ question: 'This is my first question and everything asked is correct' },
	{ question: 'This is my second question and everything asked is correct' },
	{ question: 'This is my third question and everything asked is correct' },
	{ question: 'This is my fourth question and everything asked is correct' }]

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const addNewQuetion = () => {
		Swal.fire({
			title: 'Add New Question For Evaluation',
			input: 'text',
			confirmButtonColor: '#6b1d5e',
			cancelButtonColor: '#6b1d5e75',
			showCancelButton: true,
			confirmButtonText: 'Add Question',
			showLoaderOnConfirm: true,
		}).then((result) => {
			if (result.isConfirmed) {
				console.log(result.value, 'swalResult');
				setLastQuestionValue(result.value)
			}
		})
	}

	return (
		<>
			<div className='config-settings-page-layout'>
				<Card className='config-page-card-layout'>
					<Typography variant='h5'>Configuration Settings</Typography>
					<div className='config-page-settings-cards'>
						<ServiceIssue
							title='Service Issue'
							data={[]}
							defaultdata={serviceIssueRule || []}
							onchangedata={(data) => setServiceIssueRule(data)}
						/>
						<ServiceIssue
							title='Product Issue'
							data={[]}
							defaultdata={productIssueRule || []}
							onchangedata={(data) => setProductIssueRule(data)}
						/>
					</div>
					<div className='config-page-settings-cards'>
						<ServiceIssue
							title='Agent Identification'
							data={[]}
							defaultdata={agentIdentificationRule || []}
							onchangedata={(data) => setAgentIdentificationRule(data)}
						/>
						<ServiceIssue
							title='Repeat Calls Volume'
							data={[]}
							defaultdata={repeatCallVolumeRule || []}
							onchangedata={(data) => setRepeatCallVolumeRule(data)}
						/>
					</div>
					<div className='config-page-settings-cards'>
						<ServiceIssue
							title='Opening Call'
							data={[]}
							defaultdata={callOpeningRule || []}
							onchangedata={(data) => setCallOpeningRule(data)}
						/>
						<ServiceIssue
							title='Closing Call'
							data={[]}
							defaultdata={callClosingRule || []}
							onchangedata={(data) => setCallClosingRule(data)}
						/>
					</div>
					<div className='config-page-settings-cards'>
						<ServiceIssue
							title='Warranty & Others'
							data={[]}
							defaultdata={warrantIssueRule || []}
							onchangedata={(data) => setWarrantIssueRule(data)}
						/>
						<ServiceIssue
							title='Pricing'
							data={[]}
							defaultdata={priceRule || []}
							onchangedata={(data) => setPriceRule(data)}
						/>
					</div>
					<div className='config-page-settings-cards'>
						<VoiceEnergyCard
							title='Voice Energy'
							defaultdata={voiceEnergyThreshold}
							onchangedata={(data) => setVoiceEnergyThreshold(data)}
						/>
						<SilenceDetection
							title='Hold Time Violations'
							defaultdata={holdTimeViolationRule || []}
							onchangedata={(data) => setHoldTimeViolationRule(data)}
							defaultholdtimethresholddata={holdTimeViolationThreshold}
							onchangeholdtimethresholddata={(data) =>
								setHoldTimeViolationThreshold(parseFloat(data))
							}
						/>
					</div>
					<div className='config-page-settings-cards'>
						<CompetitorAnalysis
							title='Competitor Analysis'
							defaultdata={competitorAnalysis}
							onchangedata={(data) => setCompetitorAnalysis(data)}
						/>
						<CompetitorAnalysis
							title='Escalation'
							defaultdata={escalationRule}
							onchangedata={(data) => setEscalationRule(data)}
						/>
					</div>
					<div className='config-page-settings-cards'>
						<ServiceIssue
							title='Domain Accuracy'
							data={[]}
							defaultdata={domainAccuracy || []}
							onchangedata={(data) => setDomainAccuracy(data)}
						/>
					</div>
					<div>
						<button
							type='button'
							onClick={() => onSubmit()}
							className='config-page-settings-save-button'
						>
							SAVE
						</button>
					</div>
				</Card>

				<div>
					<Typography variant='h5'>Evaluation Form</Typography>
					<Card className='config-page-evaluation-card'>
						<div style={{ margin: '30px', justifyContent: '' }}>
							<div className='config-page-evaluation-card-left'>
								{evaluationQuestions.map((data, index) => {
									return (
										<div style={{ margin: '10px' }}>
											<Chip label={index + 1} className='config-page-evaluation-question-chip' />
											<span>{data.question}</span>
										</div>
									)
								})}

							</div>
							<div className='config-page-evaluation-card-right'>
								<div style={{ padding: '33px' }}>

									<button onClick={addNewQuetion} className='config-page-settings-save-button'>
										Add New Question
									</button>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</div>

			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				message='Setting configuration save successfully.'
			/>
		</>
	);
}

export default ConfigSettings;
