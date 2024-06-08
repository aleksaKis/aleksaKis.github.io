import dashboardImage from '../../assets/dashboard.jpg';
import { ContainerScroll } from '../ui/container-scroll-animation';

export const Dashboard = () => {
    return (
        <div className="flex flex-col md:max-h-[1000px] max-h-[570px] overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h5 className="md:text-4xl text-2xl font-semibold text-black dark:text-white">
                            Building Innovative Solutions for
                            <br />
                            <span className="text-2xl md:text-[8rem] font-bold mt-1 leading-none">
                                Digital World
                            </span>
                        </h5>
                    </>
                }
            >
                <img
                    src={dashboardImage}
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    );
};
