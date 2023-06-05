// import {useState}      from "react";
import Post            from "./Post";
import {PostInterface} from "../Pages/WorkPage/WorkPage";
import "./Sidebar.scss";

interface SidebarProps {
    posts: PostInterface[];
    fetchData: () => void;
    seeOnMap: (lat:number, lng:number) => void;
}
  
const Sidebar: React.FC<SidebarProps> = ({posts, fetchData, seeOnMap}) => {
    // const [selectedFilter, setSelectedFilter] = useState<"New"| "Ongoing" |"Completed">("New");  

    return (
        <div className = "sidebar">
            {/* <div className = "filters">
                <p className = {`filter ${selectedFilter === "New" ? "selectedFilter" : ""}`}       onClick = {()=> setSelectedFilter("New")}      >New</p>
                <p className = {`filter ${selectedFilter === "Ongoing" ? "selectedFilter" : ""}`}   onClick = {()=> setSelectedFilter("Ongoing")}  >Ongoing</p>
                <p className = {`filter ${selectedFilter === "Completed" ? "selectedFilter" : ""}`} onClick = {()=> setSelectedFilter("Completed")}>Completed</p>
            </div> */}

            <div className = "posts">
                {posts.map((post:PostInterface) => (
                    <Post post = {post} key = {post.id} fetchData = {fetchData} seeOnMap = {seeOnMap}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;