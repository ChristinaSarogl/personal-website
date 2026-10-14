import PageTitle from "../common/PageTitle/PageTitle";
import TimelineCard from "../common/TimelineCard/TimelineCard";
import experienceData from '../../assets/data/experience.json';

import './timeline.css';

export type Experience = {
	id: string;
	company: string;
	position: string;
	location: string;
	startDate: string;
	endDate: string | null;
	current: boolean;
	description: string;
	highlights: string[];
	technologies: string[];
}

export default function Timeline() {
	const experience = experienceData;

	return (
		<div className="mt-10">
			<PageTitle
				title='Career Timeline'
			/>

			<div className="grid gap-6 timeline-grid">
				{experience.map((job, index) => (
					<TimelineCard job={job} animationIndex={index} />
				))}
			</div>
		</div>
	);
}