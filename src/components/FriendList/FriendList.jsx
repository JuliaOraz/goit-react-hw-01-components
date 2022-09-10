import {FriendListBox} from "./FriendList.styled";
import PropTypes from "prop-types";
import {FriendListItem} from "components/FriendList/FriendListItem";

export const FriendList = ({friends})  => { 
    return (
    <FriendListBox>
        {friends.map(({id, name, avatar, isOnline}) => (
            <FriendListItem key={id} name={name} avatar={avatar} isOnline={isOnline} />
        ))}
    </FriendListBox>
)}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
    })),
};