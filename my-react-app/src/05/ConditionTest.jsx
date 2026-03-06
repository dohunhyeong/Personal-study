import Profile from './Profile';
const user = [
  {
    id: '1',
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 120
  },
  {
    id: "2",
    name: "placehold",
    imageUrl: "https://placehold.co/800",
    imageSize: 120
  }
];

export default function ConditionTest() {
  return (
    <>
      {user.map(
        (userInfo) =>
          userInfo.id && <Profile user={userInfo} key={userInfo.id} />
      )}
    </>
  );
}

