import skillsVideo from '../../assets/skills_video.mp4';
import { TabletContainer } from '../ui/tablet-container';

export const Dashboard = () => {
    return (
        <div className="flex flex-col overflow-hidden">
            <TabletContainer>
                <div className="mx-auto rounded-2xl object-cover h-full object-left-top flex justify-center flex-col">
                    <video
                        autoPlay={true}
                        playsInline={true}
                        muted={true}
                        className="w-full h-full object-cover rounded-3xl"
                        src={skillsVideo}
                    >
                        <source src={skillsVideo} type="video/mp4" />
                    </video>
                </div>
            </TabletContainer>
        </div>
    );
};
