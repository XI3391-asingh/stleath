import React, { useEffect, useState } from 'react';

import { Card, Snackbar, Typography } from '@mui/material';

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

function ConfigSettings() {
	const [serviceIssueRule, setServiceIssueRule] = useState([]);
	const [productIssueRule, setProductIssueRule] = useState([]);
	const [repeatCallVolumeRule, setRepeatCallVolumeRule] = useState([]);
	const [callOpeningRule, setCallOpeningRule] = useState([]);
	const [callClosingRule, setCallClosingRule] = useState([]);
	const [warrantIssueRule, setWarrantIssueRule] = useState([]);
	const [agentIdentificationRule, setAgentIdentificationRule] = useState([]);
	const [open, setOpen] = React.useState(false);

	const dispatch = useDispatch();
	//   const { settingconfiguration } = useSelector((store) => store.setting);
	//   console.log(settingconfiguration);

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
			}
		});
	};

	const onSubmit = () => {
		const payload = {
			agent_identification_rule: agentIdentificationRule,
			call_opening_rule: callOpeningRule,
			call_closing_rule: callClosingRule,
			service_issue_rule: serviceIssueRule,
			product_issue_rule: productIssueRule,
			warrant_issue_rule: warrantIssueRule,
			repeat_call_volume_rule: repeatCallVolumeRule,
			comparison_score: 0.65,
			escalation_score: 0.6,
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

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<>
			<div className='config-settings-page-layout'>
				<Card className='config-page-card-layout'>
					<Typography variant='h5'>Configuration Settings</Typography>
					<div className='config-page-settings-cards'>
						<CompetitorAnalysis
							title='Competitor Analysis'
							data={
								[
									// 'Called so many times',
									// 'Issue is still not resolved',
									// 'Raised this problem again and again',
									// 'Facing this issue again',
								]
							}
							defaultdata={
								[
									// 'Called so many times',
									// 'Issue is still not resolved',
									// 'Raised this problem again and again',
									// 'Facing this issue again',
								]
							}
						/>
						<CompetitorAnalysis title='Escalation' />
					</div>
					<div className='config-page-settings-cards'>
						<ServiceIssue
							title='Service Issue'
							data={
								[
									// 'Called so many times',
									// 'Issue is still not resolved',
									// 'Raised this problem again and again',
									// 'Facing this issue again',
								]
							}
							defaultdata={serviceIssueRule || []}
							onchangedata={(data) => setServiceIssueRule(data)}
						/>
						<ServiceIssue
							title='Product Issue'
							data={
								[
									// 'card stops working',
									// 'Not able to make any transactions',
									// 'charges are more',
								]
							}
							defaultdata={productIssueRule || []}
							onchangedata={(data) => setProductIssueRule(data)}
						/>
					</div>
					<div className='config-page-settings-cards'>
						<ServiceIssue
							title='Hold Time Violations'
							data={[]}
							defaultdata={[]}
						/>
						<ServiceIssue
							title='Repeat Calls Volume'
							data={
								[
									// 'Stop calling me', 'Why are you calling again and again'
								]
							}
							defaultdata={repeatCallVolumeRule || []}
							onchangedata={(data) => setRepeatCallVolumeRule(data)}
						/>
					</div>
					<div className='config-page-settings-cards'>
						<ServiceIssue
							title='Opening Call'
							data={
								[
									// 'Thank you',
									// 'Is there anything that I can help you with?',
									// 'Thank you for calling',
									// 'Thank you for your valuable time',
									// 'I hope I was able to solve your problem',
									// 'I hope I was able to solve your query',
								]
							}
							defaultdata={callOpeningRule || []}
							onchangedata={(data) => setCallOpeningRule(data)}
						/>
						<ServiceIssue
							title='Closing Call'
							data={
								[
									// 'Thank you',
									// 'Is there anything that I can help you with?',
									// 'Thank you for calling',
									// 'Thank you for your valuable time',
									// 'I hope I was able to solve your problem',
									// 'I hope I was able to solve your query',
								]
							}
							defaultdata={callClosingRule || []}
							onchangedata={(data) => setCallClosingRule(data)}
						/>
					</div>
					<div className='config-page-settings-cards'>
						<ServiceIssue
							title='Warranty & Others'
							data={
								[
									// 'Out of warranty'
								]
							}
							defaultdata={warrantIssueRule || []}
							onchangedata={(data) => setWarrantIssueRule(data)}
						/>
						<ServiceIssue title='Pricing' data={[]} defaultdata={[]} />
					</div>
					<div className='config-page-settings-cards'>
						<VoiceEnergyCard title='Voice Energy' />
						<SilenceDetection title='Silence Detection' />
					</div>
					<div className='config-page-settings-cards'>
						<ServiceIssue
							title='Agent Identification'
							data={[]}
							defaultdata={agentIdentificationRule || []}
							onchangedata={(data) => setAgentIdentificationRule(data)}
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
