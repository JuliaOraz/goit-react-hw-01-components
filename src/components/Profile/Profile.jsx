import {
  BoxProfile,
  BoxDescription,
  Avatar,
  Name,
  Text,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';
import PropTypes from 'prop-types';

const defaultImage = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png';

export const Profile = props => {
  const { username, tag, location, avatar = defaultImage } = props;
  const { followers = 0, views = 0, likes = 0 } = props.stats;

  return (
    <BoxProfile>
      <BoxDescription>
        <Avatar src={avatar ? avatar : defaultImage} alt={username} />
        <Name>{username}</Name>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </BoxDescription>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </Stats>
    </BoxProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null, undefined]),
  ]),
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
