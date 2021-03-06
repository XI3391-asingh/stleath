import React, { useEffect } from 'react';

import { Card, Divider } from '@mui/material';

import './styles.css';
import MyTeamCard from '../../components/employee-management/my-team-card/MyTeamCard';
import PerformanceCard from '../../components/employee-management/performance-card/PerformanceCard';
import EmployeeContinuousFeedbackCard from '../../components/employee-management/employee-continuous-feedback-card/EmployeeContinuousFeedbackCard';
import EmployeeManagementAchievementsCard from '../../components/employee-management/employee-management-achievements-card/EmployeeManagementAchievementsCard';
import Axios from '../../http/Axios';
import { useDispatch, useSelector } from 'react-redux';
import { GET_AGENT_ACHIEVEMENT, SET_PERFORMANCE } from '../../store/type';

import TeamData from '../../data/team.json';
import PerformanceCardProvideFeedback from '../../components/employee-management/performance-card-provide-feedback-button/PerformanceCardProvideFeedback';
import PerformanceCardFilters from '../../components/filters/performance-card-filters/PerformanceCardFilters';
import indexService from '../../service/index';

const options = {
	id: '1',
	label: 'Agent Name',
	options: [
		{ value: '1', label: 'Jayant Raja' },
		{ value: '2', label: 'Wasi Muka' },
		{ value: '3', label: 'Rajat Bansal' },
		{ value: '4', label: 'Servashree L' },
	],
};

function EmployeeManagement() {
	const dispatch = useDispatch();
	const { selectedUser } = useSelector((store) => store.user);
	const { agentachievement } = useSelector((store) => store.call);

	useEffect(() => {
		let userName = selectedUser
			? selectedUser?.name
			: localStorage.getItem('userable_type').toLowerCase() === 'manager'
			? TeamData[0].name
			: localStorage.getItem('username');
		if (userName) {
			(async () => {
				const headers = {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + localStorage.getItem('access_token'),
				};
				const perRes = await Axios.post(
					'/get-performance',
					{
						agent_name: userName,
					},
					{
						headers: headers,
					}
				);
				if (perRes.isSuccess) {
					dispatch({ type: SET_PERFORMANCE, payload: perRes.data });
				}
				getAgentAchievement(userName);
			})();
		}
	}, [selectedUser]);

	const getAgentAchievement = (userName) => {
		indexService.getAgentAchievement(userName).then((resp) => {
			if (resp.isSuccess) {
				dispatch({
					type: GET_AGENT_ACHIEVEMENT,
					payload: resp?.data,
				});
			}
		});
	};

	return (
		<div className='employee-management-body-layout'>
			<Card className='employee-management-card-layout'>
				<EmployeeManagementAchievementsCard
					agentachievementdata={agentachievement}
				/>
				<div className='employee-management-main-card-layout'>
					<div className='employee-management-button-elements'>
						{localStorage.getItem('userable_type').toLowerCase() ===
							'manager' && <PerformanceCardProvideFeedback />}
						<PerformanceCardFilters />
					</div>
					<Divider />
					<div className='employee-management-page'>
						{localStorage.getItem('userable_type').toLowerCase() ===
							'manager' && <MyTeamCard />}
						<PerformanceCard />
						<div className='employee-management-main-bottom-cards'>
							<EmployeeContinuousFeedbackCard className='employee-management-main-feedback-card-layout' />
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default EmployeeManagement;
