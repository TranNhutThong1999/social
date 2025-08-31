import { generateAvatarColor } from '@/src/utils';

export interface AvatarGradientProps {
	postId: number | string;
	authorName: string;
}
const AvatarGradient = ({ postId, authorName }: AvatarGradientProps) => {
	const lightColor = generateAvatarColor(authorName);
	const darkColor = generateAvatarColor(authorName, true);

	return (
		<aside className="flex items-center sm:mr-6 justify-center">
			<figure className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden mr-2 sm:mr-3">
				<svg
					className="w-full h-full"
					viewBox="0 0 100 100"
					aria-hidden="true"
				>
					<defs>
						<linearGradient
							id={`detailGrad${postId}`}
							x1="0%"
							y1="0%"
							x2="100%"
							y2="100%"
						>
							<stop
								offset="0%"
								style={{
									stopColor: lightColor,
									stopOpacity: 1,
								}}
							/>
							<stop
								offset="100%"
								style={{ stopColor: darkColor, stopOpacity: 1 }}
							/>
						</linearGradient>
					</defs>
					<circle
						cx="50"
						cy="50"
						r="50"
						fill={`url(#detailGrad${postId})`}
					/>
					<circle cx="50" cy="35" r="15" fill="white" opacity="0.9" />
					<path
						d="M25 75 Q25 60 50 60 Q75 60 75 75 Z"
						fill="white"
						opacity="0.9"
					/>
				</svg>
			</figure>
			<p className="text-sm sm:text-base text-gray-500">{authorName}</p>
		</aside>
	);
};

export { AvatarGradient };
