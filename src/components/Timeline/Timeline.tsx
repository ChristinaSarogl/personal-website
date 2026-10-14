import PageTitle from "../common/PageTitle/PageTitle";
import TimelineCard from "../common/TimelineCard/TimelineCard";

import './timeline.css';

export default function Timeline() {
	return (
		<div className="mt-10">
			<PageTitle
				title='Career Timeline'
			/>

			<div className="grid gap-6 timeline-grid"  >
				<TimelineCard animationIndex={0} />
				<TimelineCard animationIndex={1} />
				<TimelineCard animationIndex={2} />
				<TimelineCard animationIndex={3} />
			</div>
		</div>
	);
}