import DestopSideBar from "./DesktopSideBar";
import Mobile from "./Mobile";
import getCurrentUser from "../../actions/getCurrentUser"

async function SideBar({
    children
}: {
    children: React.ReactNode
}) {
    const currentUser = await getCurrentUser();
    return (
        <div className="h-full">
            <DestopSideBar currentUser={currentUser!}/>
            <Mobile/>
            <main className="lg:pl-20 h-full">
                {children}
            </main>
        </div>
    )
}
export default SideBar;