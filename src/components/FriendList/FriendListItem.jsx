import {Item, Status, Avatar, Name} from "./FriendList.styled";
import PropTypes from "prop-types";


export const FriendListItem = ({ avatar, name, isOnline }) => { 
    return <Item>
        <Status isOnline={isOnline}></Status>
        <Avatar src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
    </Item>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}