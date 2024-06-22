import skillsVideo from '../../assets/skills_video.mp4';
import { TabletContainer } from '../ui/tablet-container';

export const Dashboard = () => {
    return (
        <div className="flex justify-center flex-col overflow-hidden relative h-screen">
            <TabletContainer>
                <div className="rounded-xl object-cover h-full object-left-top flex-col">
                    <video
                        loop
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
