import TeamMemberStyleWrapper from "./TeamMember.style";
import hoverShape from "../../../../assets/images/icon/hov_shape_L.svg";

const TeamMember = ({ avatar, name, designation, socialLinks }) => {
  return (
    <TeamMemberStyleWrapper>
      <div className="bithu_team_card">
        <div className="team_member_img">
          <img src={avatar} alt="bithu nft team avatar" />
        </div>
        <h3>{name}</h3>
        <h4>{designation}</h4>
        <span className="hover_shape hov_shape1">
          <img src={hoverShape} alt="bithu nft team" />
        </span>
        <span className="hover_shape hov_shape2">
          <img src={hoverShape} alt="" />
        </span>

        <div className="team_social_icon">
          <ul>
            {socialLinks?.map((item, i) => (
              <li key={i}>
                <a href={item.url}>
                  <img src={item.icon} alt="icon" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TeamMemberStyleWrapper>
  );
};

export default TeamMember;
